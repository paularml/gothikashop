// src/data.js

// Estrutura de categorias e subcategorias
export const categories = {
  destaques: {
    label: 'Destaques',
    subcategories: null
  },
  roupas: {
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
  maquiagem: {
    label: 'Maquiagem',
    subcategories: [
      { id: 'sombras', label: 'Sombras' },
      { id: 'batons', label: 'Batons' },
      { id: 'diversos', label: 'Diversos' }
    ]
  },
  sapatos: {
    label: 'Sapatos',
    subcategories: null
  }
};

// Produtos de exemplo para Destaques (página inicial)
export const featuredProducts = [
  {
    id: 1,
    image: '../public/img/vestido e bota tratorada.png',
    title: 'Look Gothic Completo',
    description: 'Vestido + Choker + Meia-calça',
    links: [
      { product: 'Vestido', price: 'R$ 35,62', url: 'https://s.shopee.com.br/2g3QwbxXmO?share_channel_code=1' },
      { product: 'bota tratorada', price: 'R$ 44,95', url: 'https://s.shopee.com.br/2qMr9Eg1xS' }
    ]
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x600/2E0B11/7E2338?text=Look+Destaque+2',
    title: 'Visual Dark Elegante',
    description: 'Top + Saia + Cinto',
    links: [
      { product: 'Top Cropped Renda', price: 'R$ 45,90', url: '#' },
      { product: 'Saia Plissada', price: 'R$ 67,90', url: '#' },
      { product: 'Cinto Harness', price: 'R$ 52,90', url: '#' }
    ]
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/400x600/201F26/8D7E83?text=Look+Destaque+3',
    title: 'Estilo Alternativo',
    description: 'Conjunto + Acessórios',
    links: [
      { product: 'Calça Cargo', price: 'R$ 78,90', url: '#' },
      { product: 'Top Mesh', price: 'R$ 38,90', url: '#' }
    ]
  }
];

// Produtos por categoria/subcategoria
export const categoryProducts = {
  vestidos: [
    {
      id: 101,
      image: 'https://via.placeholder.com/400x600/2E0B11/8E1B2C?text=Vestido+1',
      title: 'Look com Vestido Gothic',
      description: 'Vestido + Acessórios',
      links: [
        { product: 'Vestido Longo Gothic', price: 'R$ 129,90', url: '#' },
        { product: 'Choker Spike', price: 'R$ 39,90', url: '#' }
      ]
    }
  ],
  tops: [
    {
      id: 201,
      image: 'https://via.placeholder.com/400x600/2E0B11/7E2338?text=Top+Cropped',
      title: 'Look com Top',
      description: 'Top + Saia',
      links: [
        { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: '#' }
      ]
    }
  ],
  sapatos: [
    // Exemplo de sapatos, para renderCategoryPage
    {
      id: 501,
      image: '../public/img/bota tratorada.png',
      title: 'Bota tratorada',
      description: 'Bota cano médio',
      links: [
        { product: 'bota tratorada', price: 'R$ 44,95', url: 'https://s.shopee.com.br/2qMr9Eg1xS' }
      ]
    }
  ]
  // Adicione mais produtos para cada subcategoria...
};