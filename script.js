// --- ESTADO GLOBAL (LocalStorage) ---
let state = JSON.parse(localStorage.getItem('slytherinStudyUFU_v2')) || {
  points: 0,
  totalXP: 0,
  planner: {
    Segunda: [], Terça: [], Quarta: [], Quinta: [], Sexta: [], Sábado: [], Domingo: []
  },
  syllabus: [],
  revisions: [],
  mistakes: [],
  mocks: [],
  essays: []
};

function saveState() {
  localStorage.setItem('slytherinStudyUFU_v2', JSON.stringify(state));
}

// --- NAVEGAÇÃO & UI ---
const pageTitles = {
  dashboard: 'Central de Comando',
  planner: 'Planejamento Semanal & Adaptativo',
  syllabus: 'Mapa do Edital UFU',
  revisions: 'Ciclo de Revisões (15 • 30 • 60d)',
  mistakes: 'Caderno de Erros & Diagnóstico',
  simulations: 'Simulados & Estatísticas',
  essays: 'Controle de Redações',
  rewards: 'Recompensas & Conquistas'
};

function navigate(viewId, btnEl) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewId}`).classList.add('active');
  document.getElementById('pageTitle').textContent = pageTitles[viewId] || 'Slytherin Study';

  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    const idx = Object.keys(pageTitles).indexOf(viewId);
    if (idx >= 0) document.querySelectorAll('.nav-item')[idx].classList.add('active');
  }
  document.getElementById('sidebar').classList.remove('open');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function toggleWidgetConfig() {
  document.getElementById('widgetConfigPanel').classList.toggle('hidden');
}

function toggleWidget(id, visible) {
  document.getElementById(id).classList.toggle('hidden', !visible);
}

let toastTimer;
function showToast(msg, isGold = false) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.style.borderColor = isGold ? '#d4af37' : '#10b981';
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

// --- CONTAGEM REGRESSIVA UFU (04/04/2027) ---
function updateCountdown() {
  const exam = new Date('2027-04-04T08:00:00');
  const now = new Date();
  const days = Math.ceil((exam - now) / (1000 * 60 * 60 * 24));
  const el = document.getElementById('daysLeft');
  const badge = document.getElementById('examWeekAlert');

  if (days > 0) {
    el.textContent = `${days} dias`;
    if (days <= 7) badge.classList.remove('hidden');
  } else if (days === 0) {
    el.textContent = 'É HOJE!';
  } else {
    el.textContent = 'Concluído';
  }
}

// --- PONTOS, XP & RECOMPENSAS ---
const ranks = [
  { min: 0, name: 'Nível 1 • Estrategista' },
  { min: 300, name: 'Nível 2 • Implacável' },
  { min: 800, name: 'Nível 3 • Elite UFU' },
  { min: 1600, name: 'Nível 4 • Pré-Caloura' },
  { min: 2800, name: 'Nível 5 • Jaleco Branco' }
];

function updateHUD() {
  document.getElementById('pointsDisplay').textContent = `${state.points} pts`;
  let cur = ranks[0];
  let next = ranks[1];

  for (let i = 0; i < ranks.length; i++) {
    if (state.totalXP >= ranks[i].min) {
      cur = ranks[i];
      next = ranks[i + 1] || { min: ranks[i].min + 1200 };
    }
  }
  document.getElementById('rankLabel').textContent = cur.name;
  const pct = Math.min(100, ((state.totalXP - cur.min) / (next.min - cur.min)) * 100);
  document.getElementById('xpFill').style.width = `${pct}%`;
  document.getElementById('xpCounter').textContent = `${state.totalXP} / ${next.min} XP`;
}

function addPoints(pts, reason) {
  state.points += pts;
  state.totalXP += pts;
  saveState();
  updateHUD();
  showToast(`⚡ +${pts} pts • ${reason}`);
  if (pts >= 60 && typeof confetti === 'function') {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 }, colors: ['#10b981', '#d4af37'] });
  }
}

function redeemReward(cost, name) {
  if (state.points < cost) {
    showToast(`🔒 Faltam ${cost - state.points} pts para "${name}"`, true);
    return;
  }
  state.points -= cost;
  saveState();
  updateHUD();
  showToast(`👑 Recompensa liberada: ${name} (-${cost} pts)`, true);
  if (typeof confetti === 'function') {
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 }, colors: ['#d4af37', '#10b981'] });
  }
}

// --- PLANEJAMENTO ADAPTATIVO ---
const daysOrder = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

function renderPlanner() {
  const grid = document.getElementById('plannerGrid');
  grid.innerHTML = '';

  const jsDayMap = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const todayName = jsDayMap[new Date().getDay()];
  document.getElementById('todayDayName').textContent = todayName;

  const dashToday = document.getElementById('dashTodayTasks');
  dashToday.innerHTML = '';

  daysOrder.forEach(day => {
    const col = document.createElement('div');
    col.className = 'day-col';
    col.innerHTML = `<h4>${day} ${day === todayName ? '• Hoje' : ''}</h4>`;

    const tasks = state.planner[day] || [];
    if (tasks.length === 0) {
      col.innerHTML += `<p class="muted" style="font-size:0.78rem;">Sem atividades</p>`;
    }

    tasks.forEach((t, idx) => {
      const card = document.createElement('div');
      card.className = `task-card ${t.done ? 'done' : ''}`;
      card.innerHTML = `
        <div class="task-top">
          <span>${t.time} • ${t.type}</span>
        </div>
        <div>${t.subject}</div>
        <div class="task-actions">
          <button class="mini-btn" onclick="toggleTask('${day}', ${idx})">${t.done ? 'Desfazer' : '✓ Concluir'}</button>
          <button class="mini-btn" onclick="rescheduleTask('${day}', ${idx})" title="Mover para outro dia">↪ Reagendar</button>
          <button class="mini-btn" onclick="deleteTask('${day}', ${idx})">×</button>
        </div>
      `;
      col.appendChild(card);

      if (day === todayName) {
        const dashRow = document.createElement('div');
        dashRow.className = 'list-row';
        dashRow.innerHTML = `
          <div><strong>${t.time}</strong> • [${t.type}] ${t.subject}</div>
          <button class="mini-btn" onclick="toggleTask('${day}', ${idx})">${t.done ? '✅ Feito' : 'Concluir (+20 pts)'}</button>
        `;
        dashToday.appendChild(dashRow);
      }
    });

    grid.appendChild(col);
  });

  if (dashToday.innerHTML === '') {
    dashToday.innerHTML = `<p class="muted">Nenhuma tarefa agendada para ${todayName}.</p>`;
  }
}

document.getElementById('plannerForm').addEventListener('submit', e => {
  e.preventDefault();
  const day = document.getElementById('planDay').value;
  const time = document.getElementById('planTime').value;
  const type = document.getElementById('planType').value;
  const subject = document.getElementById('planSubject').value.trim();
  if (!subject) return;

  state.planner[day].push({ time, type, subject, done: false });
  state.planner[day].sort((a, b) => a.time.localeCompare(b.time));
  document.getElementById('planSubject').value = '';
  saveState();
  renderPlanner();
  showToast(`📅 Agendado em ${day}`);
});

function toggleTask(day, idx) {
  const t = state.planner[day][idx];
  t.done = !t.done;
  if (t.done) addPoints(20, `${t.type}: ${t.subject}`);
  saveState();
  renderPlanner();
}

function rescheduleTask(fromDay, idx) {
  const nextIdx = (daysOrder.indexOf(fromDay) + 1) % daysOrder.length;
  const suggestedDay = daysOrder[nextIdx];
  const target = prompt(`Mover "${state.planner[fromDay][idx].subject}" para qual dia?`, suggestedDay);
  if (!target) return;

  const matchedDay = daysOrder.find(d => d.toLowerCase() === target.trim().toLowerCase());
  if (!matchedDay) {
    showToast('Dia inválido. Use Segunda, Terça, etc.', true);
    return;
  }

  const [moved] = state.planner[fromDay].splice(idx, 1);
  moved.done = false;
  state.planner[matchedDay].push(moved);
  state.planner[matchedDay].sort((a, b) => a.time.localeCompare(b.time));
  saveState();
  renderPlanner();
  showToast(`↪ Reagendado para ${matchedDay}`);
}

function deleteTask(day, idx) {
  state.planner[day].splice(idx, 1);
  saveState();
  renderPlanner();
}

function resetWeekChecks() {
  daysOrder.forEach(d => state.planner[d].forEach(t => (t.done = false)));
  saveState();
  renderPlanner();
  showToast('🔄 Semana resetada!');
}

// --- MAPA DO EDITAL ---
function renderSyllabus() {
  const list = document.getElementById('syllabusList');
  list.innerHTML = '';

  let dominated = 0;
  state.syllabus.forEach((item, idx) => {
    if (item.status === 'Dominado') dominated++;
    const pct = item.questions > 0 ? Math.round((item.correct / item.questions) * 100) : 0;

    const row = document.createElement('div');
    row.className = 'list-row';
    row.innerHTML = `
      <div>
        <small class="gold-text">${item.area} → ${item.discipline}</small>
        <div><strong>${item.topic}</strong> • <span class="muted">${item.status}</span></div>
        <small class="muted">Questões: ${item.correct}/${item.questions} (${pct}% de acerto)</small>
      </div>
      <div style="display:flex; gap:6px;">
        <button class="mini-btn" onclick="cycleSyllabusStatus(${idx})">Alterar Status</button>
        <button class="mini-btn" onclick="deleteSyllabus(${idx})">×</button>
      </div>
    `;
    list.appendChild(row);
  });

  const total = state.syllabus.length;
  const pctTotal = total > 0 ? Math.round((dominated / total) * 100) : 0;
  document.getElementById('syllabusProgressKPI').textContent = `${pctTotal}%`;
  document.getElementById('syllabusCountKPI').textContent = `${dominated} de ${total} assuntos dominados`;
}

document.getElementById('syllabusForm').addEventListener('submit', e => {
  e.preventDefault();
  const area = document.getElementById('sylArea').value;
  const discipline = document.getElementById('sylDiscipline').value.trim();
  const topic = document.getElementById('sylTopic').value.trim();
  const questions = Number(document.getElementById('sylQuestions').value);
  const correct = Number(document.getElementById('sylCorrect').value);
  const status = document.getElementById('sylStatus').value;

  state.syllabus.unshift({ area, discipline, topic, questions, correct, status });
  if (status === 'Dominado') addPoints(40, `Assunto dominado: ${topic}`);

  document.getElementById('sylTopic').value = '';
  saveState();
  renderSyllabus();
});

function cycleSyllabusStatus(idx) {
  const order = ['Em estudo', 'Revisar', 'Dominado'];
  const cur = state.syllabus[idx];
  const next = order[(order.indexOf(cur.status) + 1) % order.length];
  cur.status = next;
  if (next === 'Dominado') addPoints(40, `Assunto dominado: ${cur.topic}`);
  saveState();
  renderSyllabus();
}

function deleteSyllabus(idx) {
  state.syllabus.splice(idx, 1);
  saveState();
  renderSyllabus();
}

// --- REVISÕES 15 / 30 / 60 DIAS ---
function addDaysISO(dateStr, days) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return dt.toISOString().split('T')[0];
}

function formatBR(iso) {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function renderRevisions() {
  const list = document.getElementById('revisionList');
  const dashList = document.getElementById('dashRevisionList');
  list.innerHTML = '';
  dashList.innerHTML = '';

  const todayISO = new Date().toISOString().split('T')[0];
  let dueCount = 0;
  let nextPriority = null;

  state.revisions.forEach((rev, rIdx) => {
    const badges = rev.intervals.map((intv, iIdx) => {
      const isDue = !intv.done && intv.date <= todayISO;
      if (isDue) {
        dueCount++;
        if (!nextPriority) nextPriority = `${rev.topic} (${intv.label})`;
        const dRow = document.createElement('div');
        dRow.className = 'list-row';
        dRow.innerHTML = `
          <span><strong>${rev.topic}</strong> • Ciclo ${intv.label} (${formatBR(intv.date)})</span>
          <button class="mini-btn" onclick="toggleRevision(${rIdx}, ${iIdx})">Revisar (+15 pts)</button>
        `;
        dashList.appendChild(dRow);
      }
      return `<span class="rev-pill ${intv.done ? 'done' : ''} ${isDue ? 'due' : ''}" onclick="toggleRevision(${rIdx}, ${iIdx})">
        ${intv.label}: ${formatBR(intv.date)} ${isDue ? '⚠️' : ''}
      </span>`;
    }).join('');

    const row = document.createElement('div');
    row.className = 'list-row';
    row.innerHTML = `
      <div>
        <strong>${rev.topic}</strong>
        <div class="rev-badges">${badges}</div>
      </div>
      <button class="mini-btn" onclick="deleteRevision(${rIdx})">×</button>
    `;
    list.appendChild(row);
  });

  document.getElementById('navRevBadge').textContent = dueCount;
  if (dueCount === 0) {
    dashList.innerHTML = `<p class="muted">Nenhuma revisão vencendo hoje.</p>`;
  } else {
    document.getElementById('smartPriorityText').textContent = `Revisar: ${nextPriority}`;
    document.getElementById('smartPrioritySub').textContent = `${dueCount} revisão(ões) aguardando hoje`;
  }
}

document.getElementById('revisionForm').addEventListener('submit', e => {
  e.preventDefault();
  const topic = document.getElementById('revTopic').value.trim();
  const base = document.getElementById('revDate').value;
  if (!topic || !base) return;

  state.revisions.unshift({
    topic,
    intervals: [
      { label: '15d', date: addDaysISO(base, 15), done: false },
      { label: '30d', date: addDaysISO(base, 30), done: false },
      { label: '60d', date: addDaysISO(base, 60), done: false }
    ]
  });
  document.getElementById('revTopic').value = '';
  saveState();
  renderRevisions();
  showToast('🔁 Revisões 15/30/60d agendadas!');
});

function toggleRevision(rIdx, iIdx) {
  const intv = state.revisions[rIdx].intervals[iIdx];
  intv.done = !intv.done;
  if (intv.done) addPoints(15, `Revisão ${intv.label}: ${state.revisions[rIdx].topic}`);
  saveState();
  renderRevisions();
}

function deleteRevision(idx) {
  state.revisions.splice(idx, 1);
  saveState();
  renderRevisions();
}

// --- CADERNO DE ERROS ---
function renderMistakes() {
  const list = document.getElementById('mistakeList');
  list.innerHTML = '';

  state.mistakes.forEach((m, idx) => {
    const row = document.createElement('div');
    row.className = 'list-row';
    row.innerHTML = `
      <div>
        <small class="gold-text">${m.discipline} • ${m.topic} (${m.type})</small>
        <div><strong>Questão:</strong> ${m.question}</div>
        <div class="muted" style="margin-top:4px;"><strong>Correção:</strong> ${m.correction}</div>
      </div>
      <button class="mini-btn" onclick="deleteMistake(${idx})">×</button>
    `;
    list.appendChild(row);
  });
}

document.getElementById('mistakeForm').addEventListener('submit', e => {
  e.preventDefault();
  state.mistakes.unshift({
    discipline: document.getElementById('errDiscipline').value.trim(),
    topic: document.getElementById('errTopic').value.trim(),
    type: document.getElementById('errType').value,
    question: document.getElementById('errQuestion').value.trim(),
    correction: document.getElementById('errCorrection').value.trim()
  });
  addPoints(15, 'Erro mapeado no Caderno');
  e.target.reset();
  saveState();
  renderMistakes();
});

function deleteMistake(idx) {
  state.mistakes.splice(idx, 1);
  saveState();
  renderMistakes();
}

// --- SIMULADOS & GRÁFICO ---
let chartInstance = null;

function renderMocks() {
  const history = document.getElementById('mockHistory');
  history.innerHTML = '';
  let best = 0;

  state.mocks.forEach((m, idx) => {
    if (m.score > best) best = m.score;
    const pct = ((m.score / m.total) * 100).toFixed(1);
    const chip = document.createElement('div');
    chip.className = 'stat-chip';
    chip.innerHTML = `<span>${m.name}: <strong>${m.score}/${m.total}</strong> (${pct}%)</span>
      <button class="mini-btn" onclick="deleteMock(${idx})">×</button>`;
    history.appendChild(chip);
  });

  if (state.mocks.length > 0) {
    const last = state.mocks[state.mocks.length - 1];
    const lastPct = ((last.score / last.total) * 100).toFixed(1);
    document.getElementById('bestMockTag').textContent = `Recorde: ${best}/65`;
    document.getElementById('lastMockKPI').textContent = `${last.score} / ${last.total}`;
    document.getElementById('lastMockPctKPI').textContent = `${last.name} (${lastPct}% de acerto)`;
  }

  const ctx = document.getElementById('mockChart').getContext('2d');
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: state.mocks.map(m => m.name),
      datasets: [{
        label: 'Acertos',
        data: state.mocks.map(m => m.score),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.16)',
        borderWidth: 3,
        tension: 0.35,
        fill: true,
        pointBackgroundColor: '#d4af37',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, max: 65, ticks: { color: '#8fa39b' }, grid: { color: '#1e352d' } },
        x: { ticks: { color: '#8fa39b' }, grid: { color: '#1e352d' } }
      }
    }
  });
}

document.getElementById('mockForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('mockName').value.trim();
  const score = Number(document.getElementById('mockScore').value);
  const total = Number(document.getElementById('mockTotal').value);

  state.mocks.push({ name, score, total });
  addPoints(80, `Simulado: ${name}`);
  e.target.reset();
  document.getElementById('mockTotal').value = 65;
  saveState();
  renderMocks();
});

function deleteMock(idx) {
  state.mocks.splice(idx, 1);
  saveState();
  renderMocks();
}

// --- REDAÇÕES ---
function renderEssays() {
  const list = document.getElementById('essayList');
  list.innerHTML = '';
  state.essays.forEach((es, idx) => {
    const row = document.createElement('div');
    row.className = 'list-row';
    row.innerHTML = `
      <div>
        <strong>${es.theme}</strong> • <span class="gold-text">Nota: ${es.grade}</span>
        <div class="muted">${formatBR(es.date)} ${es.notes ? '• Ajuste: ' + es.notes : ''}</div>
      </div>
      <button class="mini-btn" onclick="deleteEssay(${idx})">×</button>
    `;
    list.appendChild(row);
  });
}

document.getElementById('essayForm').addEventListener('submit', e => {
  e.preventDefault();
  state.essays.unshift({
    theme: document.getElementById('essayTheme').value.trim(),
    date: document.getElementById('essayDate').value,
    grade: document.getElementById('essayGrade').value,
    notes: document.getElementById('essayNotes').value.trim()
  });
  addPoints(30, 'Redação concluída');
  e.target.reset();
  document.getElementById('essayDate').valueAsDate = new Date();
  saveState();
  renderEssays();
});

function deleteEssay(idx) {
  state.essays.splice(idx, 1);
  saveState();
  renderEssays();
}

// --- INICIALIZAÇÃO ---
document.getElementById('revDate').valueAsDate = new Date();
document.getElementById('essayDate').valueAsDate = new Date();
updateCountdown();
updateHUD();
renderPlanner();
renderSyllabus();
renderRevisions();
renderMistakes();
renderMocks();
renderEssays();