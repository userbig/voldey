// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
const i18n = {
  pl: {
    logo_sub: "Instalacje Przemysłowe",
    nav_home: "Start", nav_about: "O nas", nav_services: "Usługi",
    nav_projects: "Projekty", nav_contact: "Kontakt",
    btn_call: "Zadzwoń do nas",
    hero_label: "Elektroinstalacje Przemysłowe",
    hero_title_html: "Kompleksowe<br>instalacje<br><em>elektryczne</em>",
    hero_desc: "Specjalizujemy się w kompleksowych przemysłowych pracach montażowych. Ekipa minimum 10 wykwalifikowanych pracowników gotowych do realizacji każdego projektu.",
    hero_cta1: "Skontaktuj się", hero_cta2: "Nasze usługi →",
    stat1: "Wykwalifikowanych pracowników", stat2: "Lat doświadczenia", stat3: "Duże projekty ukończone",
    scroll: "Przewiń",
    about_label: "O nas", about_title: "Dlaczego warto z nami współpracować?",
    about_sub: "Doświadczona ekipa montażowa z udokumentowanymi realizacjami na obiektach przemysłowych najwyższej klasy.",
    feat1_title: "Gotowy zespół", feat1_desc: "Minimum 10 wykwalifikowanych pracowników do dyspozycji na każdym projekcie.",
    feat2_title: "Mobilność i sprzęt", feat2_desc: "Własny transport oraz komplet profesjonalnych elektronarzędzi.",
    feat3_title: "Dokumentacja", feat3_desc: "Biegłe czytanie rysunków technicznych, schematów elektrycznych. Realizacja zgodnie z PB/PW.",
    feat4_title: "Doświadczenie", feat4_desc: "Realizacje na obiektach takich jak Brembo, SK Hi-Tech, LG Wrocław.",
    certs_label: "Uprawnienia i certyfikaty",
    cert1: "Świadectwo kwalifikacyjne — Eksploatacja urządzeń elektrycznych",
    cert2: "Świadectwo kwalifikacyjne — Dozór urządzeń elektrycznych",
    cert3: "Zaświadczenie kwalifikacyjne — Podesty ruchome przejezdne (nożycowe i koszowe)",
    srv_label: "Nasze usługi", srv_title: "Zakres prac",
    srv_sub: "Nasze oferowanie obejmuje szeroki zakres prac elektroinstalacyjnych dla obiektów przemysłowych.",
    s1_name: "Rozdzielnie i transformatory", s1_desc: "Montaż podzespołów rozdzielczych stacji oraz instalacja i podłączenie transformatorów.",
    s2_name: "Szyny i szafy elektryczne", s2_desc: "Montaż szyn zbiorczych (busbar), szaf zasilających i sterowniczych.",
    s3_name: "Systemy SSP", s3_desc: "Kompleksowy montaż systemów przeciwpożarowych SSP: czujki, przyciski alarmowe, centrale.",
    s4_name: "Trasy kablowe i uziemienie", s4_desc: "Budowa tras kablowych, instalacji odgromowych i uziemiających.",
    s5_name: "Oświetlenie", s5_desc: "Montaż oświetlenia podstawowego oraz awaryjnego dla hal przemysłowych i pomieszczeń.",
    s6_name: "Linie podziemne i modernizacje", s6_desc: "Układanie i przeciąganie linii kablowych podziemnych (nN, SN). Demontaż i modernizacja istniejących linii.",
    proj_label: "Zrealizowane projekty", proj_title: "Nasze projekty",
    proj_sub: "Wybrane realizacje naszego zespołu dla największych inwestycji przemysłowych w Polsce.",
    proj_soon: "Zdjęcia wkrótce",
    con_label: "Kontakt", con_title: "Skontaktuj się z nami", con_contacts: "Kontakty",
    con_offer_title: "Nasza oferta",
    con_offer_text: "W nawiązaniu do realizowanych inwestycji — chcielibyśmy zaoferować usługi naszej ekipy montażowej. Specjalizujemy się w kompleksowych instalacjach przemysłowych.",
    why1: "Gotowy zespół: minimum 10 wykwalifikowanych pracowników",
    why2: "Własny transport oraz profesjonalne elektronarzędzia",
    why3: "Uprawnienia SEP (E i D), UDT na podesty ruchome",
    why4: "Doświadczenie: Brembo, SK Hi-Tech, LG Wrocław",
    footer_rights: "Wszelkie prawa zastrzeżone.", footer_country: "Polska · Instalacje Przemysłowe",
    filter_all: "Wszystkie", filter_connection: "Podłączenia",
    filter_underground: "Trasy i linie", filter_equipment: "Montaż sprzętu",
  },
  en: {
    logo_sub: "Industrial Installations",
    nav_home: "Home", nav_about: "About", nav_services: "Services",
    nav_projects: "Projects", nav_contact: "Contact",
    btn_call: "Call us",
    hero_label: "Industrial Electrical Works",
    hero_title_html: "Comprehensive<br>electrical<br><em>installations</em>",
    hero_desc: "We specialize in comprehensive industrial installation works. A crew of at least 10 qualified workers ready to execute any project.",
    hero_cta1: "Get in touch", hero_cta2: "Our services →",
    stat1: "Qualified workers", stat2: "Years of experience", stat3: "Major projects completed",
    scroll: "Scroll",
    about_label: "About us", about_title: "Why work with us?",
    about_sub: "Experienced installation crew with documented completions at top-tier industrial facilities.",
    feat1_title: "Ready team", feat1_desc: "Minimum 10 qualified workers available for every project.",
    feat2_title: "Mobility & equipment", feat2_desc: "Own transportation and a full set of professional power tools.",
    feat3_title: "Documentation", feat3_desc: "Proficient in reading technical drawings and electrical diagrams. Works performed per design (PB/PW).",
    feat4_title: "Experience", feat4_desc: "Completed projects at Brembo, SK Hi-Tech, and LG Wrocław.",
    certs_label: "Qualifications & certificates",
    cert1: "Qualification certificate — Operation of electrical equipment (E)",
    cert2: "Qualification certificate — Supervision of electrical equipment (D)",
    cert3: "UDT qualification — Mobile elevating work platforms (scissor and boom lifts)",
    srv_label: "Our services", srv_title: "Scope of works",
    srv_sub: "Our offering covers a wide range of electrical installation works for industrial facilities.",
    s1_name: "Substations & transformers", s1_desc: "Installation of distribution substation components and connection of transformers.",
    s2_name: "Busbars & electrical cabinets", s2_desc: "Installation of busbars, power supply cabinets, and control cabinets.",
    s3_name: "Fire alarm systems (SSP)", s3_desc: "Comprehensive installation of fire alarm systems: detectors, call points, control panels.",
    s4_name: "Cable trays & grounding", s4_desc: "Construction of cable tray systems, lightning protection, and grounding installations.",
    s5_name: "Lighting", s5_desc: "Installation of primary and emergency lighting for industrial halls and rooms.",
    s6_name: "Underground cables & upgrades", s6_desc: "Laying and pulling underground cable lines (LV, MV). Dismantling and modernization of existing lines.",
    proj_label: "Completed projects", proj_title: "Our projects",
    proj_sub: "Selected realizations by our team for the largest industrial investments in Poland.",
    proj_soon: "Photos coming soon",
    con_label: "Contact", con_title: "Get in touch", con_contacts: "Contacts",
    con_offer_title: "Our offer",
    con_offer_text: "In connection with your ongoing investments — we would like to offer the services of our installation crew. We specialize in comprehensive industrial installations.",
    why1: "Ready team: minimum 10 qualified workers",
    why2: "Own transport and professional power tools",
    why3: "SEP certificates (E and D), UDT for elevating platforms",
    why4: "Experience: Brembo, SK Hi-Tech, LG Wrocław",
    footer_rights: "All rights reserved.", footer_country: "Poland · Industrial Installations",
    filter_all: "All", filter_connection: "Connections",
    filter_underground: "Cable routes", filter_equipment: "Equipment",
  },
  ko: {
    logo_sub: "산업용 전기 설치",
    nav_home: "홈", nav_about: "회사 소개", nav_services: "서비스",
    nav_projects: "프로젝트", nav_contact: "연락처",
    btn_call: "전화하기",
    hero_label: "산업용 전기 공사",
    hero_title_html: "종합적인<br>전기<br><em>설치 서비스</em>",
    hero_desc: "저희는 종합적인 산업용 전기 설치 공사를 전문으로 합니다. 최소 10명의 숙련된 인력이 모든 프로젝트를 수행할 준비가 되어 있습니다.",
    hero_cta1: "문의하기", hero_cta2: "서비스 보기 →",
    stat1: "숙련된 작업자", stat2: "경력 년수", stat3: "완료된 대형 프로젝트",
    scroll: "스크롤",
    about_label: "회사 소개", about_title: "왜 저희와 함께 하시나요?",
    about_sub: "최고 수준의 산업 시설에서 검증된 경력을 가진 숙련된 설치팀입니다.",
    feat1_title: "준비된 팀", feat1_desc: "모든 프로젝트에 최소 10명의 자격을 갖춘 작업자 투입.",
    feat2_title: "이동성 및 장비", feat2_desc: "자체 운송 수단과 전문 전동 공구 완비.",
    feat3_title: "문서 작업", feat3_desc: "기술 도면 및 전기 회로도 해독 가능. PB/PW 설계에 따른 작업 수행.",
    feat4_title: "경력", feat4_desc: "Brembo, SK Hi-Tech, LG 브로츠와프 등 대형 프로젝트 수행.",
    certs_label: "자격증 및 인증서",
    cert1: "자격증 — 전기 설비 운용 (E)",
    cert2: "자격증 — 전기 설비 감독 (D)",
    cert3: "UDT 자격증 — 이동식 고소 작업대 (가위형 및 붐형)",
    srv_label: "서비스", srv_title: "작업 범위",
    srv_sub: "저희는 산업 시설을 위한 광범위한 전기 설치 공사를 제공합니다.",
    s1_name: "변전소 및 변압기", s1_desc: "배전 변전소 구성품 설치 및 변압기 연결.",
    s2_name: "부스바 및 전기 패널", s2_desc: "부스바, 전원 공급 캐비닛 및 제어 캐비닛 설치.",
    s3_name: "화재 경보 시스템 (SSP)", s3_desc: "감지기, 발신기, 수신기 등 화재 경보 시스템 종합 설치.",
    s4_name: "케이블 트레이 및 접지", s4_desc: "케이블 트레이 시스템, 피뢰 시설 및 접지 설치 공사.",
    s5_name: "조명", s5_desc: "산업 홀 및 시설의 기본 조명 및 비상 조명 설치.",
    s6_name: "지중 케이블 및 개조", s6_desc: "저압/중압 지중 케이블 포설. 기존 케이블 철거 및 현대화.",
    proj_label: "완료된 프로젝트", proj_title: "프로젝트",
    proj_sub: "폴란드 최대 산업 투자 현장에서 수행한 주요 프로젝트.",
    proj_soon: "사진 준비 중",
    con_label: "연락처", con_title: "문의하기", con_contacts: "연락처",
    con_offer_title: "제안",
    con_offer_text: "귀사의 프로젝트와 관련하여 저희 설치팀의 서비스를 제안드리고 싶습니다. 저희는 종합 산업 설치 공사를 전문으로 합니다.",
    why1: "준비된 팀: 최소 10명의 숙련 인력",
    why2: "자체 운송 및 전문 전동 공구",
    why3: "SEP 자격증 (E 및 D), 고소 작업대 UDT 자격",
    why4: "경력: Brembo, SK Hi-Tech, LG 브로츠와프",
    footer_rights: "모든 권리 보유.", footer_country: "폴란드 · 산업용 전기 설치",
    filter_all: "전체", filter_connection: "배선 연결",
    filter_underground: "케이블 트레이", filter_equipment: "장비 조립",
  },
  it: {
    logo_sub: "Installazioni Industriali",
    nav_home: "Home", nav_about: "Chi siamo", nav_services: "Servizi",
    nav_projects: "Progetti", nav_contact: "Contatti",
    btn_call: "Chiamaci",
    hero_label: "Impianti Elettrici Industriali",
    hero_title_html: "Installazioni<br>elettriche<br><em>complete</em>",
    hero_desc: "Siamo specializzati in lavori di installazione industriale completi. Un team di almeno 10 lavoratori qualificati pronti per ogni progetto.",
    hero_cta1: "Contattaci", hero_cta2: "I nostri servizi →",
    stat1: "Lavoratori qualificati", stat2: "Anni di esperienza", stat3: "Grandi progetti completati",
    scroll: "Scorri",
    about_label: "Chi siamo", about_title: "Perché lavorare con noi?",
    about_sub: "Team di installazione esperto con realizzazioni documentate presso strutture industriali di primo livello.",
    feat1_title: "Team pronto", feat1_desc: "Minimo 10 lavoratori qualificati disponibili per ogni progetto.",
    feat2_title: "Mobilità e attrezzature", feat2_desc: "Trasporto proprio e set completo di utensili elettrici professionali.",
    feat3_title: "Documentazione", feat3_desc: "Lettura di disegni tecnici e schemi elettrici. Esecuzione secondo progetto PB/PW.",
    feat4_title: "Esperienza", feat4_desc: "Realizzazioni presso Brembo, SK Hi-Tech, LG Wrocław.",
    certs_label: "Qualifiche e certificati",
    cert1: "Certificato di qualifica — Esercizio di apparecchi elettrici (E)",
    cert2: "Certificato di qualifica — Sorveglianza di apparecchi elettrici (D)",
    cert3: "Qualifica UDT — Piattaforme di lavoro mobili elevabili (a forbice e a braccio)",
    srv_label: "I nostri servizi", srv_title: "Ambito di lavoro",
    srv_sub: "La nostra offerta comprende un'ampia gamma di lavori di installazione elettrica per impianti industriali.",
    s1_name: "Sottostazioni e trasformatori", s1_desc: "Installazione di componenti di sottostazione e collegamento di trasformatori.",
    s2_name: "Sbarre e quadri elettrici", s2_desc: "Installazione di sbarre collettici (busbar), quadri di alimentazione e controllo.",
    s3_name: "Sistemi antincendio SSP", s3_desc: "Installazione completa di sistemi di allarme antincendio: rilevatori, pulsanti, centrali.",
    s4_name: "Percorsi cavi e messa a terra", s4_desc: "Costruzione di sistemi di percorsi cavi, protezione fulmine e impianti di messa a terra.",
    s5_name: "Illuminazione", s5_desc: "Installazione di illuminazione ordinaria ed emergenza per capannoni e ambienti.",
    s6_name: "Cavi interrati e modernizzazioni", s6_desc: "Posa e tiro di linee in cavo sotterranee (BT, MT). Smontaggio e modernizzazione di linee esistenti.",
    proj_label: "Progetti realizzati", proj_title: "I nostri progetti",
    proj_sub: "Alcune realizzazioni del nostro team per i più grandi investimenti industriali in Polonia.",
    proj_soon: "Foto in arrivo",
    con_label: "Contatti", con_title: "Contattaci", con_contacts: "Recapiti",
    con_offer_title: "La nostra offerta",
    con_offer_text: "In riferimento ai Vostri investimenti in corso — vorremmo offrire i servizi del nostro team di installazione. Siamo specializzati in installazioni industriali complete.",
    why1: "Team pronto: minimo 10 lavoratori qualificati",
    why2: "Trasporto proprio e utensili elettrici professionali",
    why3: "Certificati SEP (E e D), UDT per piattaforme elevabili",
    why4: "Esperienza: Brembo, SK Hi-Tech, LG Wrocław",
    footer_rights: "Tutti i diritti riservati.", footer_country: "Polonia · Installazioni Industriali",
    filter_all: "Tutti", filter_connection: "Connessioni",
    filter_underground: "Percorsi cavi", filter_equipment: "Attrezzature",
  },
  uk: {
    logo_sub: "Промислові електромонтажі",
    nav_home: "Головна", nav_about: "Про нас", nav_services: "Послуги",
    nav_projects: "Проекти", nav_contact: "Контакти",
    btn_call: "Зателефонуйте нам",
    hero_label: "Промислові електромонтажні роботи",
    hero_title_html: "Комплексні<br>електричні<br><em>монтажі</em>",
    hero_desc: "Спеціалізуємося на комплексних промислових монтажних роботах. Бригада мінімум 10 кваліфікованих працівників, готових до виконання будь-якого проекту.",
    hero_cta1: "Зв'язатися", hero_cta2: "Наші послуги →",
    stat1: "Кваліфікованих працівників", stat2: "Років досвіду", stat3: "Великих проектів завершено",
    scroll: "Прокрутити",
    about_label: "Про нас", about_title: "Чому варто працювати з нами?",
    about_sub: "Досвідчена монтажна бригада з задокументованими реалізаціями на промислових об'єктах найвищого класу.",
    feat1_title: "Готова команда", feat1_desc: "Мінімум 10 кваліфікованих працівників на кожному проекті.",
    feat2_title: "Мобільність та обладнання", feat2_desc: "Власний транспорт і повний комплект професійного електроінструменту.",
    feat3_title: "Документація", feat3_desc: "Читання технічних креслень та електричних схем. Виконання відповідно до проекту PB/PW.",
    feat4_title: "Досвід", feat4_desc: "Реалізації на об'єктах Brembo, SK Hi-Tech, LG Wrocław.",
    certs_label: "Допуски та сертифікати",
    cert1: "Кваліфікаційне свідоцтво — Експлуатація електроустаткування (E)",
    cert2: "Кваліфікаційне свідоцтво — Нагляд за електроустаткуванням (D)",
    cert3: "Допуск UDT — Пересувні підйомні платформи (ножичні та стрілові)",
    srv_label: "Наші послуги", srv_title: "Обсяг робіт",
    srv_sub: "Наша пропозиція охоплює широкий спектр електромонтажних робіт для промислових об'єктів.",
    s1_name: "Підстанції та трансформатори", s1_desc: "Монтаж компонентів розподільних підстанцій та підключення трансформаторів.",
    s2_name: "Шини та електрошафи", s2_desc: "Монтаж збірних шин (busbar), силових і керуючих шаф.",
    s3_name: "Системи пожежної сигналізації (SSP)", s3_desc: "Комплексний монтаж систем пожежної сигналізації: датчики, кнопки, панелі управління.",
    s4_name: "Кабельні траси та заземлення", s4_desc: "Будівництво кабельних трас, блискавкозахисних і заземлювальних установок.",
    s5_name: "Освітлення", s5_desc: "Монтаж основного та аварійного освітлення для промислових залів і приміщень.",
    s6_name: "Підземні кабелі та модернізація", s6_desc: "Прокладання підземних кабельних ліній (нН, СН). Демонтаж та модернізація існуючих ліній.",
    proj_label: "Реалізовані проекти", proj_title: "Наші проекти",
    proj_sub: "Вибрані реалізації нашої команди для найбільших промислових інвестицій у Польщі.",
    proj_soon: "Фото незабаром",
    con_label: "Контакти", con_title: "Зв'яжіться з нами", con_contacts: "Контакти",
    con_offer_title: "Наша пропозиція",
    con_offer_text: "У зв'язку з вашими поточними інвестиціями — хотіли б запропонувати послуги нашої монтажної бригади. Спеціалізуємося на комплексних промислових монтажах.",
    why1: "Готова команда: мінімум 10 кваліфікованих працівників",
    why2: "Власний транспорт та професійний електроінструмент",
    why3: "Допуски SEP (E і D), UDT на підйомні платформи",
    why4: "Досвід: Brembo, SK Hi-Tech, LG Wrocław",
    footer_rights: "Усі права захищені.", footer_country: "Польща · Промислові монтажі",
    filter_all: "Усі", filter_connection: "З'єднання",
    filter_underground: "Кабельні траси", filter_equipment: "Монтаж обладнання",
  }
};

let currentLang = 'pl';

function setLang(lang) {
  currentLang = lang;
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (key.endsWith('_html')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  // Gallery filter buttons contain a count <span> — replace only the label text node,
  // keep the count span intact.
  document.querySelectorAll('[data-i18n-filter]').forEach(el => {
    const key = el.getAttribute('data-i18n-filter');
    if (t[key] === undefined) return;
    const first = el.firstChild;
    if (first && first.nodeType === Node.TEXT_NODE) {
      first.nodeValue = t[key] + ' ';
    } else {
      el.insertBefore(document.createTextNode(t[key] + ' '), el.firstChild);
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.textContent.toLowerCase() === lang || (lang === 'uk' && btn.textContent === 'UA')) {
      btn.classList.add('active');
    }
  });
  document.documentElement.lang = lang;
}

// ── CALL DROPDOWN ─────────────────────────────────────────────────────────────
function toggleCallMenu(btn) {
  btn.classList.toggle('open');
}
document.addEventListener('click', (e) => {
  const btn = document.getElementById('callBtn');
  if (!btn.contains(e.target)) btn.classList.remove('open');
});

// ── MOBILE NAV ────────────────────────────────────────────────────────────────
function toggleNav() {
  document.getElementById('main-nav').classList.toggle('open');
}
function closeNav() {
  document.getElementById('main-nav').classList.remove('open');
}

// ── SCROLL FADE IN ────────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

// ── THEME TOGGLE ─────────────────────────────────────────────────────────────
(function() {
  const saved = localStorage.getItem('vd-theme') || 'light';
  applyTheme(saved);
})();

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('vd-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ── GALLERY DATA ──────────────────────────────────────────────────────────────
const PHOTOS = [
  ...Array.from({length:36}, (_,i) => ({ src: `photos/connection/cn_${String(i+1).padStart(2,'0')}.jpg`, cat: 'connection' })),
  ...Array.from({length:27}, (_,i) => ({ src: `photos/underground/ug_${String(i+1).padStart(2,'0')}.jpg`, cat: 'underground' })),
  ...Array.from({length:11}, (_,i) => ({ src: `photos/equipment/eq_${String(i+1).padStart(2,'0')}.jpg`, cat: 'equipment' })),
];

const catLabels = {
  pl: { connection: 'Podłączenia', underground: 'Trasy i linie', equipment: 'Montaż sprzętu' },
  en: { connection: 'Connections', underground: 'Cable routes',  equipment: 'Equipment assembly' },
  ko: { connection: '배선 연결',    underground: '케이블 트레이',  equipment: '장비 조립' },
  it: { connection: 'Connessioni', underground: 'Percorsi cavi', equipment: 'Attrezzature' },
  uk: { connection: "З'єднання",   underground: 'Кабельні траси', equipment: 'Монтаж обладнання' },
};

function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  PHOTOS.forEach((p, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.cat = p.cat;
    item.dataset.idx = idx;
    item.innerHTML = `
      <img src="${p.src}" alt="" loading="lazy" />
      <div class="gal-overlay"><span>${catLabels[currentLang]?.[p.cat] || p.cat}</span></div>
    `;
    item.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(item);
    observer.observe(item);
  });
}

let activeFilter = 'all';

function filterGallery(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.gallery-item').forEach(el => {
    el.classList.toggle('hidden', cat !== 'all' && el.dataset.cat !== cat);
  });
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ── LIGHTBOX ──────────────────────────────────────────────────────────────────
let lbIdx = 0;
let lbVisible = [];

function getVisible() {
  return PHOTOS.map((_,i) => i).filter(i =>
    activeFilter === 'all' || PHOTOS[i].cat === activeFilter
  );
}

function openLightbox(idx) {
  lbVisible = getVisible();
  lbIdx = lbVisible.indexOf(idx);
  if (lbIdx < 0) lbIdx = 0;
  showLbImage();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showLbImage() {
  const realIdx = lbVisible[lbIdx];
  document.getElementById('lb-img').src = PHOTOS[realIdx].src;
  document.getElementById('lb-counter').textContent = `${lbIdx + 1} / ${lbVisible.length}`;
}

function lbNav(dir, e) {
  if (e) e.stopPropagation();
  lbIdx = (lbIdx + dir + lbVisible.length) % lbVisible.length;
  showLbImage();
}

function closeLightbox(e) {
  if (e.target === document.getElementById('lightbox')) closeLightboxBtn();
}
function closeLightboxBtn() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') lbNav(1, null);
  if (e.key === 'ArrowLeft')  lbNav(-1, null);
  if (e.key === 'Escape')     closeLightboxBtn();
});

// Patch setLang to refresh gallery overlay labels
const _origSetLang = setLang;
window.setLang = function(lang) {
  _origSetLang(lang);
  document.querySelectorAll('.gallery-item').forEach(el => {
    const span = el.querySelector('.gal-overlay span');
    if (span) span.textContent = catLabels[lang]?.[el.dataset.cat] || el.dataset.cat;
  });
};

// ── EXPORT INLINE-HANDLERS TO window ─────────────────────────────────────────
// setLang уже висит на window (переопределение выше). Остальные — здесь,
// потому что в ES-модуле function-декларации НЕ становятся глобальными.
Object.assign(window, {
  closeNav, toggleNav, toggleTheme, toggleCallMenu,
  filterGallery, lbNav, closeLightbox, closeLightboxBtn,
});

// Init
buildGallery();
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

