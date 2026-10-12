/* ==========================================================================
   Product catalog data — 11 SKUs mapped from Catálogo PDF
   ========================================================================== */

const PRODUCTS = [
  {
    id: 'calzados',
    name: 'Calzados a Medida',
    cat: '01 · Pie',
    img: 'assets/products/calzados.png',
    span: 'span-3',
    row: '',
    spec: 'Calzado',
    desc: 'Calzado ortopédico fabricado sobre horma individual a partir de escaneo del pie. Cuero flor, suela técnica Vibram o monocompuesta, puntera reforzada y contrafuerte termoplástico.Indicado para pie diabético, post-quirúrgico y discrepancias de longitud.',
    material: 'Cuero flor + suela técnica',
    fab: 'Horma individual + Escaneo',
    ind: 'Pie diabético · Post-quirúrgico · Discrepancia',
    sku: 'ORT-001'
  },
  {
    id: 'silla_rueda',
    name: 'Silla de Ruedas Postural',
    cat: '02 · Movilidad',
    img: 'assets/products/silla_rueda.png',
    span: 'span-3',
    row: '',
    spec: 'Silla Postural',
    desc: 'Silla de ruedas basculante con sistema postural modular: respaldo reclinable, soporte cefálico, almohadillas laterales y apoyapiés elevables. Estructura de aluminio reforzado plegable.',
    material: 'Aluminio 7000 + tapizado técnico',
    fab: 'Asesoría postural + Ensamble',
    ind: 'Parálisis cerebral · Post-ACV · Distrofias',
    sku: 'ORT-002'
  },
  {
    id: 'silla_paseo',
    name: 'Silla de Paseo Postural',
    cat: '03 · Movilidad Pediátrica',
    img: 'assets/products/silla_paseo.png',
    span: 'span-3',
    row: '',
    spec: 'Paseo Infantil',
    desc: 'Silla postural pediátrica plegable de uso diário. Configurable con sandalias, pechera, musleras y cuña abductora. Diseñada para niños de 3 a 14 años con necesidades posturales.',
    material: 'Acero cromado + tapizado ignífugo',
    fab: 'Configuración a medida',
    ind: 'PCI infantil · Hipotonía · Distrofias',
    sku: 'ORT-003'
  },
  {
    id: 'plantillas',
    name: 'Plantillas Ortopédicas',
    cat: '04 · Pie',
    img: 'assets/products/plantillas.png',
    span: 'span-3',
    row: '',
    spec: 'Plantilla',
    desc: 'Plantillas conformadas sobre el molde del pie. Capas de EVA de distintas densidades, soporte de arco longitudinal y correcciones pronadoras o supinadoras. Tratamiento antimicrobiano.',
    material: 'EVA multicapa + forro sintético',
    fab: 'Moldeo directo + Termoconformado',
    ind: 'Pie plano · Fascitis · Pronación',
    sku: 'ORT-004'
  },
  {
    id: 'ferula_dafo',
    name: 'Férula DAFO',
    cat: '05 · Tobillo Pediátrico',
    img: 'assets/products/ferula_dafo.png',
    span: 'span-3',
    row: '',
    spec: 'Férula DAFO',
    desc: 'Órtesis dinámica de tobillo-pie para pacientes pediátricos. Termoconformada en polipropileno semirrígido con almohadilla plantar. Corrige la caída del pie y favorece la dorsiflexión dinámica en la marcha.',
    material: 'Polipropileno + velour médico',
    fab: 'Termoconformado directo al paciente',
    ind: 'Caída de pie · PCI · Hipotonía',
    sku: 'ORT-005'
  },
  {
    id: 'ferula_afo',
    name: 'Férula AFO',
    cat: '06 · Tobillo Adulto',
    img: 'assets/products/ferula_afo.png',
    span: 'span-3',
    row: '',
    spec: 'Férula AFO',
    desc: 'Órtesis tobillo-pie termoconformada para adultos. Proporciona estabilidad medio-lateral, controla la flexo-extensión del tobillo y previene la caída del pie en pacientes neurológicos.',
    material: 'Polipropileno + espumas técnicas',
    fab: 'Toma de molde + Termoconformado',
    ind: 'Esclerosis múltiple · Post-ACV · Pie caído',
    sku: 'ORT-006'
  },
  {
    id: 'corset_medida',
    name: 'Corset a Medida Termoconformado',
    cat: '07 · Raquis',
    img: 'assets/products/corset_medida.png',
    span: 'span-3',
    row: '',
    spec: 'Corset TLSO',
    desc: 'Corset toraco-lumbo-sacro termoconformado directamente sobre el paciente. Diseño personalizado para corrección de curvaturas lumbares y dorsales mediante almohadillas de presión selectiva.',
    material: 'Polietileno + espuma de acolchado',
    fab: 'Termoconformado en molde positivo',
    ind: 'Escoliosis · Cifosis · Inestabilidad',
    sku: 'ORT-007'
  },
  {
    id: 'protesis',
    name: 'Prótesis de Amputación',
    cat: '08 · Prótesis',
    img: 'assets/products/protesis.png',
    span: 'span-3',
    row: '',
    spec: 'Prótesis MI',
    desc: 'Prótesis de miembro inferior transtibial o transfemoral a medida. Encaje protésico termoconformado, socket de suspensión y selección de pilones, pies protésicos (SACH, dynamic response) y rodillas mecánicas o hidráulicas.',
    material: 'Encaje laminado + titanio',
    fab: 'Encaje directo + Componentes modulares',
    ind: 'Amputación tibial · transfemoral',
    sku: 'ORT-008'
  },
  {
    id: 'ferula_dinamica_pie',
    name: 'Férula Dinámica (Pie-Pierna)',
    cat: '09 · Marcha',
    img: 'assets/products/ferula_dinamica_pie.png',
    span: 'span-3',
    row: '',
    spec: 'Férula Dinámica',
    desc: 'Férula dinámica para pie y pierna con materiales resilientes. Aplica fuerza controlada durante la marcha, devolviendo energía en la fase de despegue. Modelo adulto para rehabilitación neurológica.',
    material: 'Material resiliente + termoplásticos',
    fab: 'Termoconformado clínico',
    ind: 'Marcha neurológica · Hemiplejia',
    sku: 'ORT-009'
  },
  {
    id: 'ferula_dinamica_muslo',
    name: 'Férula Dinámica (Muslo)',
    cat: '10 · Rodilla',
    img: 'assets/products/ferula_dinamica_muslo.png',
    span: 'span-3',
    row: '',
    spec: 'KAFO Dinámica',
    desc: 'Órtesis dinámica de rodilla-tobillo-pie con sistema articulado. Asiste el control de la flexo-extensión de rodilla durante la fase de marcha. Diseño adulto con cierres de liberación rápida.',
    material: 'Aluminio articulado + termoplásticos',
    fab: 'Ensamble modular + ajustes',
    ind: 'Inestabilidad de rodilla · Genu recurvatum',
    sku: 'ORT-010'
  },
  {
    id: 'corset_termoconformado',
    name: 'Corset Termoconformado',
    cat: '11 · Columna',
    img: 'assets/products/corset_termoconformado.png',
    span: 'span-3',
    row: '',
    spec: 'Corset LSO',
    desc: 'Corset lumbo-sacro termoconformado con sistema de cierre regulable y almohadillas de corrección. Proporciona estabilización lumbar en síndromes mecánicos y post-quirúrgicos.',
    material: 'Polietileno + velcro médico',
    fab: 'Termoconformado + acolchado',
    ind: 'Lumbalgia · Espondilolistesis · Postqx',
    sku: 'ORT-011'
  }
];

/* Generate bento grid from data */
(function buildBento(){
  const grid = document.getElementById('bento');
  if (!grid) return;
  PRODUCTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = `bento-card ${p.span} ${p.row}`;
    card.dataset.productId = p.id;
    card.innerHTML = `
      <div class="bc-img">
        <span class="bc-spec">${p.spec.toUpperCase()} · ${p.sku}</span>
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="bc-meta">
        <div>
          <div class="bc-cat">${p.cat}</div>
          <div class="bc-name">${p.name}</div>
        </div>
        <div class="bc-arrow">↗</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
})();

/* Modal */
function openModal(p){
  const modal = document.getElementById('modal');
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-img').alt = p.name;
  document.getElementById('modal-cat').textContent = p.cat;
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-material').textContent = p.material;
  document.getElementById('modal-fab').textContent = p.fab;
  document.getElementById('modal-ind').textContent = p.ind;
  document.getElementById('modal-sku').textContent = p.sku;
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  const modal = document.getElementById('modal');
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target.id === 'modal') closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
