// --- RECOMPENSAS PADRÃO ---
const DEFAULT_REWARDS = [
  { id: 'r1', title: 'Pausa Café & Música', desc: '15 minutos livres após bater a meta do dia', cost: 100 },
  { id: 'r2', title: 'Episódio / Filme Livre', desc: 'Assistir sem culpa depois do simulado', cost: 250 },
  { id: 'r3', title: 'Doce ou Lanche Especial', desc: 'Comemorar semana de estudos fechada', cost: 400 },
  { id: 'r4', title: 'Domingo Off Total', desc: 'Descanso completo após atingir 1.000 pts', cost: 1000 }
];

// --- EDITAL UFU 2027 COMPLETO (124 TÓPICOS) ---
const UFU_SYLLABUS_DEFAULT = [
  { area: 'Linguagens & Obras', discipline: 'Língua Portuguesa', topic: '1. Gêneros do discurso: características composicionais e estilísticas', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Língua Portuguesa', topic: '2. Coesão, coerência e textualidade em diferentes gêneros discursivos', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Língua Portuguesa', topic: '3. Modalização e estratégias argumentativas', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Língua Portuguesa', topic: '4. Efeitos de sentido (pontuação, recursos gráficos, léxico e estilística)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Língua Portuguesa', topic: '5. Norma-padrão e variação linguística (modalidades oral e escrita)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Língua Portuguesa', topic: '6. Morfossintaxe (classes de palavras, flexões e coesão)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Língua Portuguesa', topic: '7. Sintaxe (períodos simples/compostos, coordenação, subordinação e conectores)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Redação', topic: 'Gênero: Carta de solicitação', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Redação', topic: 'Gênero: Carta de reclamação', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Redação', topic: 'Gênero: Carta aberta', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Redação', topic: 'Gênero: Artigo de opinião', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Redação', topic: 'Gênero: Resenha crítica', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Redação', topic: 'Gênero: Relato', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura', topic: '1. Literatura canônica e não canônica (escolas literárias e autores periféricos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura', topic: '2. Gêneros literários (lírico, narrativo/épico, dramático e híbridos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura', topic: '3. Relações intertextuais e intratextuais (paráfrase, paródia, alusão, pastiche)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura', topic: '4. Literatura e outras artes (cinema, teatro, música e pintura)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura', topic: '5. Literatura de grupos e povos de tradição oral (indígena, afro-brasileira, africana, feminina)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura (Obras UFU)', topic: 'Obra (Romance): Uma vida em segredo — Autran Dourado', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura (Obras UFU)', topic: 'Obra (Conto): Invenção e memória — Lygia Fagundes Telles', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura (Obras UFU)', topic: 'Obra (Poesia): Coral e outros poemas — Sophia de Mello Breyner Andresen', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura (Obras UFU)', topic: 'Obra (Drama): Auto do frade: poema para vozes — João Cabral de Melo Neto', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Literatura (Obras UFU)', topic: 'Obra (Crônica): O amor acaba: crônicas líricas e existenciais — Paulo Mendes Campos', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Linguagens & Obras', discipline: 'Língua Estrangeira', topic: 'Compreensão e interpretação de textos (elementos verbais/não verbais, inferência e variedades)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '1. Contagem, probabilidade e estatística', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '2. Funções (afim, quadrática, modular, exponencial, logarítmica, trigonométrica, inversa e composta)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '3. Progressões (PA e PG)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '4. Trigonometria (triângulo retângulo, identidades, arcos e leis dos senos/cossenos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '5. Matrizes, determinantes e sistemas lineares', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '6. Geometria plana (Tales, Pitágoras, relações métricas e áreas)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '7. Geometria espacial (prismas, cilindros, esfera, pirâmides, cones e troncos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '8. Geometria analítica plana (reta, circunferência, distâncias e inequações)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática', topic: '9. Polinômios e equações algébricas (raízes, Girard e fatoração)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática (Complementar)', topic: '10. Conjuntos e conjuntos numéricos (primos, MDC, MMC, dízimas e valor absoluto)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática (Complementar)', topic: '11. Classificação de funções (injetoras, sobrejetoras e bijetoras)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática (Complementar)', topic: '12. Arcos e ângulos (graus e radianos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática (Complementar)', topic: '13. Operações e propriedades de matrizes', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática (Complementar)', topic: '14. Posições relativas e ângulos (retas, planos e circunferências)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Matemática', discipline: 'Matemática (Complementar)', topic: '15. Números complexos (De Moivre) e Briot-Ruffini', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '1. Ecologia (ecossistemas, populações, comunidades, ciclos e impactos ambientais)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '2. Reprodução humana (sistema reprodutor, ciclo menstrual, fecundação, gemelaridade, ISTs)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '3. Embriogênese (gametogênese, etapas embrionárias, anexos e celoma)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '4. Citologia (membrana, organelas, bioenergética, núcleo, síntese proteica, mitose e meiose)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '5. Histologia (tecidos epitelial, conjuntivo, muscular e nervoso)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '6. Fisiologia animal e humana (sistemas, distúrbios e nutrição)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '7. Diversidade e classificação dos seres vivos (vírus, reinos, parasitologia, vacinas e soros)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '8. Morfologia e fisiologia de fanerógamas (botânica, seiva, hormônios e fotoperiodismo)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '9. Genética (Mendel, grupos sanguíneos, sexo, linkage, Hardy-Weinberg e biotecnologia)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Biologia', topic: '10. Evolução e origem da vida (teorias, evidências, especiação e extinção)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '1. Forças em sistemas mecânicos, interações internas e externas (Leis de Newton)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '2. Energia e trabalho (cinética, potencial, mecânica e forças conservativas/dissipativas)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '3. Dinâmica impulsiva (impulso e conservação do momento linear)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '4. Calor e temperatura (termometria, propagação, calorimetria e mudanças de fase)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '5. Leis da termodinâmica (1ª e 2ª leis, máquinas térmicas e entropia)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '6. Princípios gerais da ondulatória (ondas mecânicas, eletromagnéticas, som e luz)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '7. Fenômenos ondulatórios e da luz (reflexão, espelhos, refração e lentes)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '8. Ondas eletromagnéticas (espectro e interações com a matéria)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '9. Geração, transporte, distribuição e consumo de energia (fontes renováveis/não renováveis)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '10. Interações eletromagnéticas e equipamentos elétricos/eletrônicos (eletrostática, circuitos, eletromagnetismo)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Física', topic: '11. Astronomia e gravitação universal', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '1. O estudo da matéria (propriedades, estados físicos e separação de misturas)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '2. Os modelos representativos da constituição da matéria (modelos atômicos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '3. A tabela periódica e propriedades periódicas', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '4. Propriedades dos materiais, ligações químicas, forças intermoleculares e geometria molecular', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '5. Compostos inorgânicos: ácidos, bases, sais e óxidos', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '6. Grandezas químicas (mol, massa molar e constante de Avogadro)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '7. Soluções (solubilidade, concentrações, diluição e coloides)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '8. Efeito coligativo dos solutos nas soluções e diagrama de fases', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '9. Aspectos qualitativos e quantitativos de reações químicas (balanceamento e estequiometria)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '10. Termoquímica (entalpia, Lei de Hess e energia de ligação)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '11. Cinética química (taxa de reação, colisões e fatores influentes)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '12. Equilíbrio químico (Kc, Le Chatelier, pH/pOH, hidrólise, tampão e Kps)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '13. Eletroquímica (nox, oxirredução, pilhas e eletrólise)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '14. Radioatividade (emissões alfa/beta/gama, meia-vida, fusão e fissão)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '15. Química dos compostos do carbono (funções orgânicas, IUPAC, propriedades e polímeros)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '16. Isomeria (plana, geométrica e óptica)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências da Natureza', discipline: 'Química', topic: '17. Relações da Química com tecnologias, sociedade, meio ambiente e energias no cotidiano', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '1. A Geografia como ciência do espaço (conceitos, cartografia e formação territorial)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '2. A estrutura geológica, a dinâmica atmosférica e suas relações com a natureza e a sociedade', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '3. A biosfera como recurso para o desenvolvimento (domínios morfoclimáticos e recursos hídricos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '4. Geografia, cultura e patrimônio (diversidade, comunidades tradicionais e direitos humanos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '5. O espaço industrial (etapas, energia, meio técnico-científico-informacional e trabalho)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '6. A dinâmica da população (demografia e fluxos migratórios)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '7. O espaço urbano (urbanização, segregação e conflitos campo-cidade)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '8. O espaço agrário (estrutura fundiária, sistemas agrários e complexo agroindustrial)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '9. A globalização do espaço geográfico (redes, fluxos financeiros e desigualdades)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '10. Geopolítica e fragmentação do espaço geográfico (Guerra Fria, América Latina, conflitos e separatismos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '11. A regionalização do espaço geográfico (regionalização do Brasil e blocos econômicos)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Geografia', topic: '12. A questão ambiental (sustentabilidade, consumo, resíduos, impactos e políticas públicas)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'História', topic: '1. O conhecimento histórico (historiografia, fontes, memória e patrimônio)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'História', topic: '2. A formação do mundo moderno (Renascimento, Reformas, Expansão Marítima e Absolutismo)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'História', topic: '3. Colonização e formação das sociedades americanas (América Portuguesa, escravidão e resistências)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'História', topic: '4. Revoluções, capitalismo e transformações do século XVIII ao início do século XX', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'História', topic: '5. Formação histórica do Brasil (Independência, Império e Primeira República)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'História', topic: '6. O mundo contemporâneo (Guerras Mundiais, Totalitarismos, Guerra Fria e Descolonização)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'História', topic: '7. Brasil contemporâneo (Era Vargas, 1946-64, Ditadura Militar e Redemocratização)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'História', topic: '8. Diversidade, cultura e sujeitos históricos (povos indígenas, afro-brasileiros, gênero e raça)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '1. Filosofia Grega — As origens da filosofia (mito e logos, pólis e espanto)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '2. Filosofia Grega — Sócrates (aporia, maiêutica e debate com sofistas)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '3. Filosofia Grega — Platão (alegoria da caverna, sensível/inteligível e rei filósofo)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '4. Filosofia Grega — Aristóteles (Metafísica: categorias, substância e quatro causas)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '5. Filosofia Cristã — Agostinho (reminiscência e iluminação divina)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '6. Filosofia Cristã — Tomás de Aquino (teoria da abstração, fé/razão e provas de Deus)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '7. Teoria do Conhecimento — Descartes (regras do método, dúvida e cogito)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '8. Teoria do Conhecimento — Hume (impressões, ideias, causalidade e hábito)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '9. Teoria do Conhecimento — Kant (revolução copernicana, fenômeno/coisa em si, transcendental)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '10. Política — Maquiavel (autonomia da política, força/astúcia, fortuna e virtù)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '11. Política — Hobbes e Rousseau (estado de natureza, contrato social e soberania)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '12. Política — Marx (dialética, materialismo histórico, ideologia e alienação)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '13. Política — Hannah Arendt (condição humana, ação/política e regimes totalitários)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '14. Ética — Aristóteles (teoria do meio termo e prudência)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '15. Ética — Kant (imperativo categórico, ação por dever e autonomia)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '16. Ética — Nietzsche (genealogia da moral, moral dos nobres e moral de escravo)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '17. Interdisciplinar — Indústria cultural (Adorno e Horkheimer)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '18. Interdisciplinar — A condição histórica da mulher (Simone de Beauvoir)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '19. Interdisciplinar — Saber e Poder (Foucault)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '20. Interdisciplinar — Ética animal (Peter Singer)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Filosofia', topic: '21. Interdisciplinar — Relações étnico-raciais (Achille Mbembe)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '1. Desnaturalização do mundo social: problema social vs. problema sociológico', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '2. Indivíduos, processos de socialização e instituições sociais', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '3. Cultura, identidade e diversidade (relativismo vs. etnocentrismo e culturas juvenis)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '4. Desigualdades sociais, estratificação e diversidade (interseccionalidades e marcadores)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '5. Violência e poder (controle social e violências física, simbólica e psicológica)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '6. Movimentos sociais como processos coletivos e projetos políticos', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '7. Divisão social do trabalho e relações sociais de produção (mais-valia, alienação, uberização)', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '8. Migrações e conflitos: mobilidades transnacionais', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '9. Cidadania e democracia: participação direta e indireta', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '10. Formas de organização e poder no Estado moderno: esferas pública e privada', questions: 0, correct: 0, status: 'Em estudo' },
  { area: 'Ciências Humanas', discipline: 'Sociologia', topic: '11. Sistemas políticos e formas de governo: sistema partidário e eleitoral no Brasil', questions: 0, correct: 0, status: 'Em estudo' }
];

// --- CONSTELAÇÕES ---
const CONSTELLATION_AVATARS = {
  serpens: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#09130f"/><circle cx="50" cy="50" r="44" fill="none" stroke="#1d3029" stroke-width="1"/><polyline points="22,68 35,52 48,58 56,38 72,34 78,24" fill="none" stroke="#10b981" stroke-width="1.3" stroke-opacity="0.7"/><circle cx="22" cy="68" r="2.2" fill="#d4af37"/><circle cx="35" cy="52" r="2" fill="#edf3f0"/><circle cx="48" cy="58" r="2.5" fill="#d4af37"/><circle cx="56" cy="38" r="2" fill="#edf3f0"/><circle cx="72" cy="34" r="2.8" fill="#d4af37"/><circle cx="78" cy="24" r="1.8" fill="#10b981"/><circle cx="30" cy="28" r="1" fill="#7f948c"/><circle cx="68" cy="70" r="1.1" fill="#7f948c"/></svg>`),
  ursa: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#09130f"/><circle cx="50" cy="50" r="44" fill="none" stroke="#1d3029" stroke-width="1"/><polygon points="52,48 74,45 77,62 55,65" fill="none" stroke="#10b981" stroke-width="1.2" stroke-opacity="0.7"/><polyline points="22,30 34,36 44,42 52,48" fill="none" stroke="#10b981" stroke-width="1.2" stroke-opacity="0.7"/><circle cx="22" cy="30" r="3" fill="#d4af37"/><circle cx="34" cy="36" r="1.8" fill="#edf3f0"/><circle cx="44" cy="42" r="1.8" fill="#edf3f0"/><circle cx="52" cy="48" r="2" fill="#edf3f0"/><circle cx="74" cy="45" r="2.2" fill="#d4af37"/><circle cx="77" cy="62" r="2" fill="#edf3f0"/><circle cx="55" cy="65" r="1.8" fill="#edf3f0"/></svg>`),
  orion: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#09130f"/><circle cx="50" cy="50" r="44" fill="none" stroke="#1d3029" stroke-width="1"/><polyline points="34,24 44,50 32,76 66,74 56,48 68,26 34,24" fill="none" stroke="#10b981" stroke-width="1.2" stroke-opacity="0.65"/><line x1="44" y1="50" x2="56" y2="48" stroke="#d4af37" stroke-width="1.3"/><circle cx="34" cy="24" r="2.8" fill="#d4af37"/><circle cx="68" cy="26" r="2.4" fill="#edf3f0"/><circle cx="44" cy="50" r="2" fill="#d4af37"/><circle cx="50" cy="49" r="2" fill="#edf3f0"/><circle cx="56" cy="48" r="2" fill="#d4af37"/><circle cx="32" cy="76" r="2.4" fill="#edf3f0"/><circle cx="66" cy="74" r="2.8" fill="#10b981"/></svg>`),
  cassiopeia: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#09130f"/><circle cx="50" cy="50" r="44" fill="none" stroke="#1d3029" stroke-width="1"/><polyline points="20,38 35,62 50,46 66,64 80,36" fill="none" stroke="#10b981" stroke-width="1.4" stroke-opacity="0.75"/><circle cx="20" cy="38" r="2.4" fill="#d4af37"/><circle cx="35" cy="62" r="2.6" fill="#edf3f0"/><circle cx="50" cy="46" r="2.8" fill="#d4af37"/><circle cx="66" cy="64" r="2.2" fill="#10b981"/><circle cx="80" cy="36" r="2.5" fill="#d4af37"/><circle cx="48" cy="24" r="1.1" fill="#7f948c"/><circle cx="52" cy="76" r="1.1" fill="#7f948c"/></svg>`)
};

// --- ESTADO GLOBAL ---
function getDefaultState() {
  return {
    points: 0,
    totalXP: 0,
    profile: {
      displayName: 'Estudante UFU',
      photoURL: CONSTELLATION_AVATARS.serpens,
      showInXPRanking: true,
      showInMockRanking: true
    },
    rewards: JSON.parse(JSON.stringify(DEFAULT_REWARDS)),
    planner: {
      Segunda: [], Terça: [], Quarta: [], Quinta: [], Sexta: [], Sábado: [], Domingo: []
    },
    syllabus: JSON.parse(JSON.stringify(UFU_SYLLABUS_DEFAULT)),
    revisions: [],
    mistakes: [],
    mocks: [],
    essays: []
  };
}

let state = JSON.parse(localStorage.getItem('slytherinStudyUFU_v4')) || getDefaultState();
if (!state.syllabus || state.syllabus.length === 0) state.syllabus = JSON.parse(JSON.stringify(UFU_SYLLABUS_DEFAULT));
if (!state.rewards) state.rewards = JSON.parse(JSON.stringify(DEFAULT_REWARDS));
if (!state.profile) state.profile = getDefaultState().profile;

function saveState() {
  localStorage.setItem('slytherinStudyUFU_v4', JSON.stringify(state));
  if (typeof window.syncCloudState === 'function') {
    window.syncCloudState(state);
  }
}

// --- NAVEGAÇÃO & UI ---
const pageTitles = {
  dashboard: 'Central de Comando',
  planner: 'Planejamento Semanal & Adaptativo',
  syllabus: 'Mapa do Edital UFU 2027',
  revisions: 'Ciclo de Revisões (15 • 30 • 60d)',
  mistakes: 'Caderno de Erros & Diagnóstico',
  simulations: 'Simulados & Estatísticas',
  essays: 'Controle de Redações',
  rewards: 'Recompensas & Conquistas',
  ranking: 'Ranking Geral & Perfil',
  about: 'Sobre & Recursos'
};

const pillTitles = {
  dashboard: 'Visão Geral da Preparação',
  planner: 'Organização Semanal',
  syllabus: 'Conteúdos Programáticos',
  revisions: 'Repetição Espaçada',
  mistakes: 'Diagnóstico de Falhas',
  simulations: 'Desempenho em Provas',
  essays: 'Produção Textual',
  rewards: 'Sistema de Recompensas',
  ranking: 'Comunidade & Perfil',
  about: 'Criadora & Benefícios'
};

function navigate(viewId, btnEl) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.classList.add('active');

  document.getElementById('pageTitle').textContent = pageTitles[viewId] || 'Slytherin Study';
  document.getElementById('sectionPill').textContent = pillTitles[viewId] || '';

  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    const idx = Object.keys(pageTitles).indexOf(viewId);
    const items = document.querySelectorAll('.nav-item');
    if (idx >= 0 && items[idx]) items[idx].classList.add('active');
  }
  document.getElementById('sidebar').classList.remove('open');
  if (viewId === 'ranking') {
    if (typeof window.loadLeaderboard === 'function') window.loadLeaderboard();
    if (typeof window.loadMockLeaderboard === 'function') window.loadMockLeaderboard();
    if (typeof window.loadAdminUsers === 'function') window.loadAdminUsers();
  }
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
  if (!el) return;
  el.textContent = msg;
  el.style.borderColor = isGold ? '#d4af37' : '#10b981';
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3400);
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
    if (days <= 7 && badge) badge.classList.remove('hidden');
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

function getRankTitle(xp) {
  let cur = ranks[0].name;
  for (let i = 0; i < ranks.length; i++) {
    if (xp >= ranks[i].min) cur = ranks[i].name;
  }
  return cur;
}

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
  showToast(`+${pts} pts • ${reason}`);
  if (pts >= 60 && typeof confetti === 'function') {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 }, colors: ['#10b981', '#d4af37'] });
  }
}

function quickAction(pts, label) {
  addPoints(pts, label);
}

function renderRewards() {
  const grid = document.getElementById('rewardsGrid');
  grid.innerHTML = '';

  state.rewards.forEach((r, idx) => {
    const card = document.createElement('div');
    card.className = 'card reward-card';
    card.innerHTML = `
      <button class="mini-btn reward-del" onclick="deleteReward(${idx})" title="Excluir">×</button>
      <div>
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
      </div>
      <div>
        <div class="reward-cost" style="margin-bottom:10px;">${r.cost} pts</div>
        <button class="btn-primary" style="width:100%;" onclick="redeemReward(${r.cost}, '${r.title.replace(/'/g, "\\'")}')">Resgatar</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.getElementById('rewardForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('rewTitle').value.trim();
  const desc = document.getElementById('rewDesc').value.trim();
  const cost = Number(document.getElementById('rewCost').value);
  if (!title || !cost) return;

  state.rewards.push({ id: 'rew_' + Date.now(), title, desc, cost });
  e.target.reset();
  saveState();
  renderRewards();
  showToast('Nova recompensa adicionada.');
});

function deleteReward(idx) {
  state.rewards.splice(idx, 1);
  saveState();
  renderRewards();
}

function redeemReward(cost, name) {
  if (state.points < cost) {
    showToast(`Faltam ${cost - state.points} pts para "${name}"`, true);
    return;
  }
  state.points -= cost;
  saveState();
  updateHUD();
  showToast(`Recompensa liberada: ${name} (-${cost} pts)`, true);
  if (typeof confetti === 'function') {
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 }, colors: ['#d4af37', '#10b981'] });
  }
}

// --- PERFIL & CONSTELAÇÕES ---
let pendingAvatarData = null;

function renderProfile() {
  const name = state.profile.displayName || 'Estudante UFU';
  const avatar = state.profile.photoURL || CONSTELLATION_AVATARS.serpens;

  document.getElementById('topUserName').textContent = name;
  document.getElementById('topUserAvatar').src = avatar;
  document.getElementById('profileNamePreview').textContent = name;
  document.getElementById('profileAvatarPreview').src = avatar;
  document.getElementById('profNameInput').value = name;

  const fallback = state.profile.showInRanking !== false;
  document.getElementById('profShowXPRanking').checked =
    state.profile.showInXPRanking !== undefined ? state.profile.showInXPRanking : fallback;
  document.getElementById('profShowMockRanking').checked =
    state.profile.showInMockRanking !== undefined ? state.profile.showInMockRanking : fallback;

  pendingAvatarData = null;
}

function selectConstellation(key) {
  const url = CONSTELLATION_AVATARS[key] || CONSTELLATION_AVATARS.serpens;
  pendingAvatarData = url;
  document.getElementById('profileAvatarPreview').src = url;
  const fileInput = document.getElementById('profFileInput');
  if (fileInput) fileInput.value = '';
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const size = 200;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        const minSide = Math.min(img.width, img.height);
        const sx = (img.width - minSide) / 2;
        const sy = (img.height - minSide) / 2;

        ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = reject;
      img.src = event.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const profFileEl = document.getElementById('profFileInput');
if (profFileEl) {
  profFileEl.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const compressed = await compressImageFile(file);
      pendingAvatarData = compressed;
      document.getElementById('profileAvatarPreview').src = compressed;
      showToast('Foto carregada. Clique em Salvar Perfil para confirmar.');
    } catch (err) {
      console.error(err);
      showToast('Erro ao processar a imagem.', true);
    }
  });
}

document.getElementById('profileForm').addEventListener('submit', (e) => {
  e.preventDefault();
  state.profile.displayName = document.getElementById('profNameInput').value.trim() || 'Estudante UFU';
  if (pendingAvatarData) {
    state.profile.photoURL = pendingAvatarData;
  }
  state.profile.showInXPRanking = document.getElementById('profShowXPRanking').checked;
  state.profile.showInMockRanking = document.getElementById('profShowMockRanking').checked;

  saveState();
  renderProfile();
  if (typeof window.loadLeaderboard === 'function') window.loadLeaderboard();
  if (typeof window.loadMockLeaderboard === 'function') window.loadMockLeaderboard();
  if (typeof window.loadAdminUsers === 'function') window.loadAdminUsers();
  showToast('Perfil e preferências de ranking atualizados.');
});

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
        <div class="task-top">${t.time} • ${t.type}</div>
        <div>${t.subject}</div>
        <div class="task-actions">
          <button class="mini-btn" onclick="toggleTask('${day}', ${idx})">${t.done ? 'Desfazer' : 'Concluir'}</button>
          <button class="mini-btn" onclick="rescheduleTask('${day}', ${idx})">Reagendar</button>
          <button class="mini-btn" onclick="deleteTask('${day}', ${idx})">×</button>
        </div>
      `;
      col.appendChild(card);

      if (day === todayName) {
        const dashRow = document.createElement('div');
        dashRow.className = 'list-row';
        dashRow.innerHTML = `
          <div><strong>${t.time}</strong> • [${t.type}] ${t.subject}</div>
          <button class="mini-btn" onclick="toggleTask('${day}', ${idx})">${t.done ? 'Concluído' : 'Concluir (+20 pts)'}</button>
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
  showToast(`Agendado em ${day}.`);
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
  showToast(`Reagendado para ${matchedDay}.`);
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
  showToast('Semana resetada.');
}

// --- MAPA DO EDITAL ---
let currentDisciplineFilter = 'Todas';
let syllabusUndoStack = null;

function saveSyllabusSnapshot(pointsDelta = 0) {
  syllabusUndoStack = {
    syllabus: JSON.parse(JSON.stringify(state.syllabus)),
    pointsDelta: pointsDelta
  };
  const btn = document.getElementById('btnUndoSyllabus');
  if (btn) btn.classList.remove('hidden');
}

function undoSyllabusAction() {
  if (!syllabusUndoStack) return;
  state.syllabus = syllabusUndoStack.syllabus;
  if (syllabusUndoStack.pointsDelta > 0) {
    state.points = Math.max(0, state.points - syllabusUndoStack.pointsDelta);
    state.totalXP = Math.max(0, state.totalXP - syllabusUndoStack.pointsDelta);
  }
  syllabusUndoStack = null;
  const btn = document.getElementById('btnUndoSyllabus');
  if (btn) btn.classList.add('hidden');
  saveState();
  updateHUD();
  renderSyllabus();
  showToast('Última alteração no edital desfeita.');
}

function restoreDefaultSyllabus() {
  saveSyllabusSnapshot(0);

  const currentMap = new Map();
  state.syllabus.forEach(item => {
    currentMap.set(`${item.discipline}::${item.topic}`, item);
  });

  const defaultKeys = new Set();
  const orderedSyllabus = [];
  let added = 0;

  // Reconstrói na ordem oficial da UFU, mantendo seu progresso nos existentes
  UFU_SYLLABUS_DEFAULT.forEach(defItem => {
    const key = `${defItem.discipline}::${defItem.topic}`;
    defaultKeys.add(key);

    if (currentMap.has(key)) {
      orderedSyllabus.push(currentMap.get(key));
    } else {
      orderedSyllabus.push(JSON.parse(JSON.stringify(defItem)));
      added++;
    }
  });

  // Preserva tópicos extras que você tenha adicionado manualmente
  state.syllabus.forEach(item => {
    const key = `${item.discipline}::${item.topic}`;
    if (!defaultKeys.has(key)) {
      orderedSyllabus.push(item);
    }
  });

  state.syllabus = orderedSyllabus;
  saveState();
  renderSyllabus();

  if (added > 0) {
    showToast(`${added} tópico(s) restaurado(s) na ordem original!`);
  } else {
    showToast('Todos os 124 tópicos oficiais já estão na ordem certa.');
  }
}

function resetFullSyllabus() {
  const ok = confirm('Isso vai restaurar os 124 tópicos originais da UFU zerados ("Em estudo"). Deseja continuar?');
  if (!ok) return;

  saveSyllabusSnapshot(0);
  state.syllabus = JSON.parse(JSON.stringify(UFU_SYLLABUS_DEFAULT));
  saveState();
  renderSyllabus();
  showToast('Edital UFU reiniciado para o padrão inicial.');
}

function setDisciplineFilter(disc) {
  currentDisciplineFilter = disc;
  renderSyllabus();
}

function renderSyllabus() {
  const list = document.getElementById('syllabusList');
  list.innerHTML = '';

  const disciplines = ['Todas', ...new Set(state.syllabus.map(s => s.discipline))];
  const filterBar = document.createElement('div');
  filterBar.className = 'chip-wrap mb-18';
  disciplines.forEach(d => {
    const btn = document.createElement('button');
    btn.className = 'mini-btn';
    if (d === currentDisciplineFilter) {
      btn.style.borderColor = '#10b981';
      btn.style.color = '#ffffff';
      btn.style.background = 'rgba(16, 185, 129, 0.18)';
    }
    btn.textContent = d;
    btn.onclick = () => setDisciplineFilter(d);
    filterBar.appendChild(btn);
  });
  list.appendChild(filterBar);

  let dominated = 0;
  state.syllabus.forEach((item, idx) => {
    if (item.status === 'Dominado') dominated++;
    if (currentDisciplineFilter !== 'Todas' && item.discipline !== currentDisciplineFilter) return;

    const pct = item.questions > 0 ? Math.round((item.correct / item.questions) * 100) : 0;
    const statusColor = item.status === 'Dominado' ? '#10b981' : (item.status === 'Revisar' ? '#d4af37' : '#7f948c');

    const row = document.createElement('div');
    row.className = 'list-row';
    row.innerHTML = `
      <div style="flex:1;">
        <small class="gold-text">${item.area} → ${item.discipline}</small>
        <div><strong>${item.topic}</strong> • <span style="color:${statusColor}; font-weight:600;">${item.status}</span></div>
        <small class="muted">Questões: ${item.correct}/${item.questions} (${pct}% de acerto)</small>
      </div>
      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <button class="mini-btn" onclick="logSyllabusQuestions(${idx})">+ Questões</button>
        <button class="mini-btn" onclick="cycleSyllabusStatus(${idx})">Status</button>
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

function logSyllabusQuestions(idx) {
  const item = state.syllabus[idx];
  const q = Number(prompt(`Quantas questões você fez de "${item.topic}"?`, '10'));
  if (!q || q <= 0) return;
  const c = Number(prompt(`Quantas acertou dessas ${q}?`, '0'));
  if (isNaN(c) || c < 0) return;

  saveSyllabusSnapshot(30);
  item.questions += q;
  item.correct += Math.min(q, c);
  addPoints(30, `Lista: ${item.topic}`);
  saveState();
  renderSyllabus();
}

document.getElementById('syllabusForm').addEventListener('submit', e => {
  e.preventDefault();
  const area = document.getElementById('sylArea').value;
  const discipline = document.getElementById('sylDiscipline').value.trim();
  const topic = document.getElementById('sylTopic').value.trim();
  const questions = Number(document.getElementById('sylQuestions').value);
  const correct = Number(document.getElementById('sylCorrect').value);
  const status = document.getElementById('sylStatus').value;

  const pts = status === 'Dominado' ? 40 : 0;
  saveSyllabusSnapshot(pts);
  state.syllabus.unshift({ area, discipline, topic, questions, correct, status });
  if (pts > 0) addPoints(40, `Assunto dominado: ${topic}`);

  document.getElementById('sylTopic').value = '';
  saveState();
  renderSyllabus();
});

function cycleSyllabusStatus(idx) {
  const order = ['Em estudo', 'Revisar', 'Dominado'];
  const cur = state.syllabus[idx];
  const next = order[(order.indexOf(cur.status) + 1) % order.length];
  const pts = next === 'Dominado' ? 40 : 0;

  saveSyllabusSnapshot(pts);
  cur.status = next;
  if (pts > 0) addPoints(40, `Assunto dominado: ${cur.topic}`);
  saveState();
  renderSyllabus();
}

function deleteSyllabus(idx) {
  const item = state.syllabus[idx];
  if (!confirm(`Remover "${item.topic}" do edital?`)) return;

  saveSyllabusSnapshot(0);
  state.syllabus.splice(idx, 1);
  saveState();
  renderSyllabus();
  showToast('Tópico removido. Clique em "Desfazer última ação" se foi sem querer.');
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
        ${intv.label}: ${formatBR(intv.date)}
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
  showToast('Revisões 15/30/60d agendadas.');
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

  if (typeof Chart !== 'undefined') {
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
          y: { beginAtZero: true, max: 65, ticks: { color: '#7f948c' }, grid: { color: '#1d3029' } },
          x: { ticks: { color: '#7f948c' }, grid: { color: '#1d3029' } }
        }
      }
    });
  }
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

// --- RENDER GERAL ---
function renderAll() {
  updateCountdown();
  updateHUD();
  renderProfile();
  renderRewards();
  renderPlanner();
  renderSyllabus();
  renderRevisions();
  renderMistakes();
  renderMocks();
  renderEssays();
}

function copyCouponCode(code) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Cupom ${code} copiado para a área de transferência!`, true);
    }).catch(() => {
      showToast(`Use o cupom: ${code}`, true);
    });
  } else {
    showToast(`Use o cupom: ${code}`, true);
  }
}

document.getElementById('revDate').valueAsDate = new Date();
document.getElementById('essayDate').valueAsDate = new Date();
renderAll();