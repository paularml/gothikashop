// ==========================================
// 1. CONFIGURAÇÃO DE CATEGORIAS (Mude pouco)
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
// 2. LISTAS DE PRODUTOS (Edite aqui!)
// ==========================================

// --- LISTA: DESTAQUES (Home) ---
const listaDestaques = [
  {
    id: 1,
    image: 'img/vestido e bota tratorada.png', // ATENÇÃO: Não use 'public/' no caminho
    title: 'Look Gothic Completo',
    description: 'Vestido + Choker + Meia-calça',
    links: [
      { product: 'Vestido', price: 'R$ 35,62', url: 'https://s.shopee.com.br/2g3QwbxXmO?share_channel_code=1' },
      { product: 'Bota Tratorada', price: 'R$ 44,95', url: 'https://s.shopee.com.br/2qMr9Eg1xS' }
    ]
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x600/2E0B11/7E2338?text=Look+Destaque+2',
    title: 'Visual Dark Elegante',
    description: 'Top + Saia + Cinto',
    links: [
      { product: 'Top Cropped Renda', price: 'R$ 45,90', url: '#' },
      { product: 'Saia Plissada', price: 'R$ 67,90', url: '#' }
    ]
  }
];

// --- LISTA: VESTIDOS ---
const listaVestidos = [
  {
    id: 101,
    image: 'https://via.placeholder.com/400x600/2E0B11/8E1B2C?text=Vestido+1',
    title: 'Look com Vestido Gothic',
    description: 'Vestido + Acessórios',
    links: [
      { product: 'Vestido Longo', price: 'R$ 129,90', url: '#' },
      { product: 'Choker Spike', price: 'R$ 39,90', url: '#' }
    ]
  },
  // COLOQUE NOVOS VESTIDOS AQUI
];

// --- LISTA: TOPS ---
const listaTops = [
  {
    id: 201,
    image: 'https://via.placeholder.com/400x600/2E0B11/7E2338?text=Top+Cropped',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: '#' }
    ]
  }
];

// --- LISTA: SAPATOS ---
const listaSapatos = [
  {
    id: 501,
    image: 'img/bota tratorada.png', // Caminho corrigido
    title: 'Bota tratorada',
    description: 'Bota cano médio',
    links: [
      { product: 'Bota tratorada', price: 'R$ 44,95', url: 'https://s.shopee.com.br/2qMr9Eg1xS' }
    ]
  }
];

// ==========================================
// 3. EXPORTAÇÃO FINAL (Não mexa aqui)
// ==========================================

export const featuredProducts = listaDestaques;

export const categoryProducts = {
  // Roupas
  vestidos: listaVestidos,
  tops: listaTops,
  saias: [],  // Listas vazias para preencher depois
  calcas: [],
  verao: [],
  inverno: [],

  // Acessórios
  brincos: [],
  colares: [],
  cintos: [],
  meias: [],

  // Maquiagem
  sombras: [],
  batons: [],
  diversos: [],

  // Categorias Principais
  sapatos: listaSapatos
};