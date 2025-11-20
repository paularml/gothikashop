// ==========================================
// 1. CONFIGURAÇÃO DE CATEGORIAS E SUBCATEGORIAS
// ==========================================
export const categories = {
  destaques:  { label: 'Destaques', subcategories: null },
  roupas:     { 
    label: 'Roupas', 
    subcategories: [
      { id: 'vestidos', label: 'Vestidos' },
      { id: 'tops', label: 'Tops/Croppeds' },
      { id: 'saias', label: 'Saias' },
      { id: 'calcas', label: 'Calças' },
      { id: 'verao', label: 'Verão' },
      { id: 'inverno', label: 'Inverno' }
    ]
  },
  acessorios: { 
    label: 'Acessórios', 
    subcategories: [
      { id: 'brincos', label: 'Brincos/Alargadores' },
      { id: 'colares', label: 'Colares/Chokers' },
      { id: 'cintos', label: 'Cintos/Harness' },
      { id: 'meias', label: 'Meias' }
    ]
  },
  maquiagem:  { 
    label: 'Maquiagem', 
    subcategories: [
      { id: 'sombras', label: 'Sombras' },
      { id: 'batons', label: 'Batons' },
      { id: 'diversos', label: 'Diversos' }
    ]
  },
  sapatos:    { label: 'Sapatos', subcategories: null }
};

// ==========================================
// 2. LISTAS DE PRODUTOS (Preencha aqui!)
// ==========================================

// ----------------- DESTAQUES (HOME) -----------------
const listaDestaques = [
  {
    id: 101,
    image: 'img/vestido e bota tratorada.png', 
    title: 'Look Gothic Completo',
    description: 'Vestido + Choker + Meia-calça',
    links: [
      { product: 'Vestido', price: 'R$ 35,62', url: 'https://s.shopee.com.br/2g3QwbxXmO?share_channel_code=1' },
      { product: 'Bota Tratorada', price: 'R$ 44,95', url: 'https://s.shopee.com.br/2qMr9Eg1xS' }
    ]
  },
  {
    id: 102,
    image: 'https://via.placeholder.com/400x600/2E0B11/7E2338?text=Look+Destaque+2',
    title: 'Visual Dark Elegante',
    description: 'Top + Saia + Cinto',
    links: [
      { product: 'Top Cropped Renda', price: 'R$ 45,90', url: '#' },
      { product: 'Saia Plissada', price: 'R$ 67,90', url: '#' }
    ]
  },
  // --- COLE NOVOS DESTAQUES AQUI ---
];

// ----------------- ROUPAS -----------------

const listaVestidos = [
  {
    id: 201,
    image: 'https://via.placeholder.com/400x600/2E0B11/8E1B2C?text=Vestido+1',
    title: 'Look com Vestido Gothic',
    description: 'Vestido + Acessórios',
    links: [
      { product: 'Vestido Longo', price: 'R$ 129,90', url: '#' },
      { product: 'Choker Spike', price: 'R$ 39,90', url: '#' }
    ]
  },
  // --- COLE NOVOS VESTIDOS AQUI ---
];

const listaTops = [
  {
    id: 301,
    image: 'https://via.placeholder.com/400x600/2E0B11/7E2338?text=Top+Cropped',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: '#' }
    ]
  },
  // --- COLE NOVOS TOPS AQUI ---
];

const listaSaias = [
  // --- COLE NOVAS SAIAS AQUI ---
];

const listaCalcas = [
  // --- COLE NOVAS CALÇAS AQUI ---
];

const listaVerao = [
  // --- COLE LOOKS DE VERÃO AQUI ---
];

const listaInverno = [
  // --- COLE LOOKS DE INVERNO AQUI ---
];

// ----------------- ACESSÓRIOS -----------------

const listaBrincos = [
  // --- COLE NOVOS BRINCOS AQUI ---
];

const listaColares = [
  // --- COLE NOVOS COLARES AQUI ---
];

const listaCintos = [
  // --- COLE NOVOS CINTOS AQUI ---
];

const listaMeias = [
  // --- COLE NOVAS MEIAS AQUI ---
];

// ----------------- MAQUIAGEM -----------------

const listaSombras = [
  // --- COLE NOVAS SOMBRAS AQUI ---
];

const listaBatons = [
  // --- COLE NOVOS BATONS AQUI ---
];

const listaDiversos = [
  // --- COLE OUTROS ITENS DE MAKE AQUI ---
];

// ----------------- SAPATOS -----------------

const listaSapatos = [
  {
    id: 501,
    image: 'img/bota tratorada.png', 
    title: 'Bota tratorada',
    description: 'Bota cano médio',
    links: [
      { product: 'Bota tratorada', price: 'R$ 44,95', url: 'https://s.shopee.com.br/2qMr9Eg1xS' }
    ]
  },
  // --- COLE NOVOS SAPATOS AQUI ---
];


// ==========================================
// 3. EXPORTAÇÃO FINAL (Não precisa mexer aqui)
// ==========================================

export const featuredProducts = listaDestaques;

export const categoryProducts = {
  // Roupas
  vestidos: listaVestidos,
  tops: listaTops,
  saias: listaSaias,
  calcas: listaCalcas,
  verao: listaVerao,
  inverno: listaInverno,

  // Acessórios
  brincos: listaBrincos,
  colares: listaColares,
  cintos: listaCintos,
  meias: listaMeias,

  // Maquiagem
  sombras: listaSombras,
  batons: listaBatons,
  diversos: listaDiversos,

  // Categorias Principais
  sapatos: listaSapatos
};