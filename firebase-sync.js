import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnwpQRxbvcdrb3CuhEIsuugiRaq2XDCco",
  authDomain: "planner-ufu.firebaseapp.com",
  projectId: "planner-ufu",
  storageBucket: "planner-ufu.firebasestorage.app",
  messagingSenderId: "1060463542917",
  appId: "1:1060463542917:web:80a97967bfa4f5ae00dfec",
  measurementId: "G-MWT5FS64HX"
};


const ADMIN_EMAIL = "mariacta9000@gmail.com";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

let currentUser = null;

function isAdmin() {
  return currentUser && currentUser.email && currentUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

function getMockSummary(mocks) {
  if (!mocks || mocks.length === 0) {
    return { bestPct: 0, bestLabel: 'Nenhum simulado', totalMocks: 0, lastLabel: '--' };
  }
  let bestPct = 0;
  let bestLabel = '';
  mocks.forEach((m) => {
    const pct = m.total > 0 ? Number(((m.score / m.total) * 100).toFixed(1)) : 0;
    if (pct >= bestPct) {
      bestPct = pct;
      bestLabel = `${m.score}/${m.total} (${m.name})`;
    }
  });
  const last = mocks[mocks.length - 1];
  const lastPct = last.total > 0 ? ((last.score / last.total) * 100).toFixed(1) : 0;
  return {
    bestPct,
    bestLabel,
    totalMocks: mocks.length,
    lastLabel: `${last.score}/${last.total} (${lastPct}%)`
  };
}

function getSyllabusPct(syllabus) {
  if (!syllabus || syllabus.length === 0) return 0;
  const dom = syllabus.filter(s => s.status === 'Dominado').length;
  return Math.round((dom / syllabus.length) * 100);
}

window.syncCloudState = async function (currentState) {
  if (!currentUser) return;
  const mockStats = getMockSummary(currentState.mocks);
  const sylPct = getSyllabusPct(currentState.syllabus);

  try {
    await setDoc(doc(db, 'users', currentUser.uid), {
      state: currentState,
      email: currentUser.email,
      displayName: currentState.profile.displayName,
      photoURL: currentState.profile.photoURL,
      totalXP: currentState.totalXP,
      bestMockPct: mockStats.bestPct,
      bestMockLabel: mockStats.bestLabel,
      lastMockLabel: mockStats.lastLabel,
      totalMocks: mockStats.totalMocks,
      syllabusPct: sylPct,
      showInRanking: currentState.profile.showInRanking,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.error('Erro ao salvar na nuvem:', err);
  }
};

window.loginWithGoogle = async function () {
  try {
    await signInWithPopup(auth, provider);
    showToast('Conectado na nuvem com sucesso.');
  } catch (err) {
    console.error(err);
    showToast('Erro ao entrar com Google.', true);
  }
};

window.logoutUser = async function () {
  await signOut(auth);
  showToast('Você saiu da conta.');
};

onAuthStateChanged(auth, async (user) => {
  currentUser = user;
  const btnLogin = document.getElementById('btnLoginGoogle');
  const userChip = document.getElementById('userChip');
  const btnLogout = document.getElementById('btnLogout');
  const hint = document.getElementById('profileLoginHint');
  const adminCard = document.getElementById('adminPanelCard');

  if (user) {
    btnLogin.classList.add('hidden');
    userChip.classList.remove('hidden');
    btnLogout.classList.remove('hidden');
    hint.textContent = 'Sincronizado na nuvem • Seus dados acompanham sua conta em qualquer dispositivo.';
    document.getElementById('profileEmailPreview').textContent = user.email;

    if (isAdmin() && adminCard) {
      adminCard.classList.remove('hidden');
    } else if (adminCard) {
      adminCard.classList.add('hidden');
    }

    const ref = doc(db, 'users', user.uid);
    const snap = await getDoc(ref);

    if (snap.exists() && snap.data().state) {
      state = { ...getDefaultState(), ...snap.data().state };
    } else {
      state.profile.displayName = user.displayName || 'Estudante UFU';
      state.profile.photoURL = user.photoURL || state.profile.photoURL;
    }

    await window.syncCloudState(state);
    renderAll();
    window.loadLeaderboard();
    window.loadMockLeaderboard();
    if (isAdmin()) window.loadAdminUsers();
  } else {
    btnLogin.classList.remove('hidden');
    userChip.classList.add('hidden');
    btnLogout.classList.add('hidden');
    if (adminCard) adminCard.classList.add('hidden');
    hint.textContent = 'Entre com sua conta Google no topo para sincronizar na nuvem e participar do ranking.';
    document.getElementById('profileEmailPreview').textContent = 'Modo Offline Local';
    renderProfile();
  }
});

// --- RANKING 1: XP ACUMULADO ---
window.loadLeaderboard = async function () {
  const container = document.getElementById('leaderboardList');
  if (!currentUser) {
    container.innerHTML = '<p class="muted">Faça login com Google para carregar o ranking em tempo real.</p>';
    return;
  }

  container.innerHTML = '<p class="muted">Carregando ranking de XP...</p>';

  try {
    const q = query(
      collection(db, 'users'),
      where('showInRanking', '==', true),
      orderBy('totalXP', 'desc'),
      limit(30)
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      container.innerHTML = '<p class="muted">Nenhum participante visível no ranking ainda.</p>';
      return;
    }

    container.innerHTML = '';
    let pos = 1;
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const isMe = docSnap.id === currentUser.uid;
      const medal = pos === 1 ? '1º' : pos === 2 ? '2º' : pos === 3 ? '3º' : `#${pos}`;

      const row = document.createElement('div');
      row.className = `rank-row ${isMe ? 'me' : ''}`;
      row.innerHTML = `
        <div class="rank-left">
          <span class="rank-pos">${medal}</span>
          <img class="rank-avatar" src="${data.photoURL || ''}" alt="Avatar" />
          <div>
            <strong>${data.displayName || 'Estudante UFU'} ${isMe ? '(Você)' : ''}</strong>
            <div class="muted" style="font-size:0.78rem;">${getRankTitle(data.totalXP || 0)}</div>
          </div>
        </div>
        <strong class="gold-text">${data.totalXP || 0} XP</strong>
      `;
      container.appendChild(row);
      pos++;
    });
  } catch (err) {
    console.error(err);
    container.innerHTML = '<p class="muted">Abra o Console (F12) e clique no link do Firebase para criar o índice de XP.</p>';
  }
};

// --- RANKING 2: ACERTOS EM SIMULADOS ---
window.loadMockLeaderboard = async function () {
  const container = document.getElementById('mockLeaderboardList');
  if (!container) return;

  if (!currentUser) {
    container.innerHTML = '<p class="muted">Faça login com Google para carregar o ranking de simulados.</p>';
    return;
  }

  container.innerHTML = '<p class="muted">Carregando ranking de simulados...</p>';

  try {
    const q = query(
      collection(db, 'users'),
      where('showInRanking', '==', true),
      orderBy('bestMockPct', 'desc'),
      limit(30)
    );
    const snapshot = await getDocs(q);

    let rowsHtml = '';
    let pos = 1;
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (!data.bestMockPct || data.bestMockPct <= 0) return;

      const isMe = docSnap.id === currentUser.uid;
      const medal = pos === 1 ? '1º' : pos === 2 ? '2º' : pos === 3 ? '3º' : `#${pos}`;

      rowsHtml += `
        <div class="rank-row ${isMe ? 'me' : ''}">
          <div class="rank-left">
            <span class="rank-pos">${medal}</span>
            <img class="rank-avatar" src="${data.photoURL || ''}" alt="Avatar" />
            <div>
              <strong>${data.displayName || 'Estudante UFU'} ${isMe ? '(Você)' : ''}</strong>
              <div class="muted" style="font-size:0.78rem;">Recorde: ${data.bestMockLabel || ''}</div>
            </div>
          </div>
          <strong class="gold-text">${data.bestMockPct}%</strong>
        </div>
      `;
      pos++;
    });

    container.innerHTML = rowsHtml || '<p class="muted">Nenhum simulado registrado pelos participantes ainda.</p>';
  } catch (err) {
    console.error(err);
    container.innerHTML = '<p class="muted">Abra o Console (F12) e clique no link do Firebase para criar o índice de simulados.</p>';
  }
};

// --- PAINEL ADMIN SECRETO (TODOS OS USUÁRIOS, INCLUINDO OCULTOS) ---
window.loadAdminUsers = async function () {
  const container = document.getElementById('adminUsersList');
  if (!container || !isAdmin()) return;

  container.innerHTML = '<p class="muted">Buscando todos os usuários...</p>';

  try {
    const snapshot = await getDocs(collection(db, 'users'));
    if (snapshot.empty) {
      container.innerHTML = '<p class="muted">Nenhum usuário registrado na base ainda.</p>';
      return;
    }

    const users = [];
    snapshot.forEach((docSnap) => users.push({ id: docSnap.id, ...docSnap.data() }));
    users.sort((a, b) => (b.bestMockPct || 0) - (a.bestMockPct || 0));

    container.innerHTML = '';
    users.forEach((u) => {
      const isPublic = u.showInRanking !== false;
      const statusTag = isPublic
        ? '<span style="color:#10b981; font-size:0.74rem; font-weight:600;">Público</span>'
        : '<span style="color:#d4af37; font-size:0.74rem; font-weight:600;">Oculto no Ranking</span>';

      const row = document.createElement('div');
      row.className = 'list-row';
      row.innerHTML = `
        <div class="rank-left">
          <img class="rank-avatar" src="${u.photoURL || ''}" alt="Avatar" />
          <div>
            <div><strong>${u.displayName || 'Sem nome'}</strong> • ${statusTag}</div>
            <div class="muted" style="font-size:0.76rem;">${u.email || 'E-mail não registrado'}</div>
            <div class="muted" style="font-size:0.78rem; margin-top:3px;">
              Edital: <strong>${u.syllabusPct || 0}%</strong> • 
              Simulados (${u.totalMocks || 0}): <strong>Recorde ${u.bestMockPct || 0}%</strong> (${u.bestMockLabel || 'Nenhum'}) • 
              Último: ${u.lastMockLabel || '--'}
            </div>
          </div>
        </div>
        <div style="text-align:right;">
          <strong class="gold-text">${u.totalXP || 0} XP</strong>
        </div>
      `;
      container.appendChild(row);
    });
  } catch (err) {
    console.error(err);
    container.innerHTML = '<p class="muted">Erro de permissão no Firestore. Atualize as Regras do banco para liberar seu e-mail de Admin.</p>';
  }
};