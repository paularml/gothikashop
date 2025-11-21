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
    image: '',
    title: 'Look com Vestido Gothic',
    description: 'Vestido + Acessórios',
    links: [
      { product: 'Vestido Longo', price: 'R$ 129,90', url: 'https://s.shopee.com.br/8AOOh3p1SI' }
    ]
  },
  {
    id: 202, // Mude o ID (número único)
    image: 'img/NOME_DA_FOTO.jpg',
    title: 'Título do Look',
    description: 'Descrição curta',
    links: [
      { product: 'Nome Peça 1', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1VrUlFlYrK' }
    ]
  },  
  {
    id: 203,
    image: 'img/vestido_cirre_longo.jpg',
    title: 'Vestido cirrê longo com fenda e amarração com correntes',
    description: 'Vestido cirrê longo com fenda e amarração com correntes (cinto não incluso).',
    links: [
      { product: 'Vestido Cirrê Longo', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8KhonQwFXY' }
    ]
  },
  {
    id: 204,
    image: 'img/vestido_vintage_renda_goth.jpg',
    title: 'Vintage Preto Renda-V-neck Mini Vestido Sexy',
    description: 'Espaguete Alça Cintura Alta Vestidos De Festa Gótico Clube Feminino.',
    links: [
      { product: 'Vestido Vintage Gótico', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8V1EzjvcCb' }
    ]
  },
  {
    id: 205,
    image: 'img/vestido_vampira_tule.jpg',
    title: 'Vestido Feminino Vampira Halloween Tule Gótico Tendência',
    description: 'Vestido Feminino Vampira Halloween Tule Gótico Tendência.',
    links: [
      { product: 'Vestido Vampira Tule', price: 'R$ 00,00', url: 'https://s.shopee.com.br/804yOoxWDW' }
    ]
  },
  {
    id: 206,
    image: 'img/vestido_midi_tule_segunda_pele.jpg',
    title: 'Vestido Midi Tule com Segunda Pele Malha Elegante e Sensual',
    description: 'Vestido Midi Tule com Segunda Pele Malha Elegante e Sensual.',
    links: [
      { product: 'Vestido Midi Tule', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7V8hp2fbtE' }
    ]
  },
  {
    id: 207,
    image: 'img/vestido_tule_regata_longo.jpg',
    title: 'VESTIDO TULE REGATA LONGO ELEGANTE FESTA MODA FEMININA',
    description: 'Vestido Tule Regata Longo Elegante Festa Moda Feminina.',
    links: [
      { product: 'Vestido Tule Longo', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6KwkR0G100' }
    ]
  },
  {
    id: 208,
    image: 'img/vestido_recorte_manga_nula.jpg',
    title: 'Vestido recorte blogueira manga nula',
    description: 'Possível usar com uma luva ou sem.',
    links: [
      { product: 'Vestido Recorte Manga Nula', price: 'R$ 00,00', url: 'https://s.shopee.com.br/60Ju2011fy' }
    ]
  },
  {
    id: 209,
    image: 'img/vestido_gola_alta_costas_nuas.jpg',
    title: 'Vestido gola alta longo costas nuas manga longa com fenda',
    description: 'Inverno elegante suplex.',
    links: [
      { product: 'Vestido Gola Alta Costas Nuas', price: 'R$ 00,00', url: 'https://s.shopee.com.br/2B7BTcH1Oi' }
    ]
  },
  {
    id: 210,
    image: 'img/vestido_cherry_alca_fina.jpg',
    title: 'Vestido feminino cherry elegante alça fina suplex basico',
    description: 'Festas balada.',
    links: [
      { product: 'Vestido Cherry Alça Fina', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5q0TqUzMHz' }
    ]
  },
  {
    id: 211,
    image: 'img/vestido_longo_decote_v.jpg',
    title: 'Vestido longo suplex com decote em V',
    description: 'Para festas eventos baladas vestido elegante charmoso.',
    links: [
      { product: 'Vestido Longo Decote V', price: 'R$ 00,00', url: 'https://s.shopee.com.br/60Ju2nyix2' }
    ]
  },
  {
    id: 212,
    image: 'img/vestido_tule_preto_balada.jpg',
    title: 'Vestido de Tule Preto Balada - 2 Peças',
    description: 'Vestido de Tule Preto Balada - 2 Peças.',
    links: [
      { product: 'Vestido Tule Preto 2 Peças', price: 'R$ 00,00', url: 'https://s.shopee.com.br/40YpfFPVaD' }
    ]
  },
  {
    id: 213,
    image: 'img/vestido_festa_fenda.jpg',
    title: 'Vestido Feminino Moda Festa Com Fenda Estiloso Elegante Tendência',
    description: 'Vestido Feminino Moda Festa Com Fenda Estiloso Elegante Tendência.',
    links: [
      { product: 'Vestido Festa Fenda', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7AVrSD6lue' }
    ]
  },
  {
    id: 214,
    image: 'img/vestido_longo_flare.jpg',
    title: 'Vestidos Femininos Longo Flare Moderno Moda 2018 Alça Festa',
    description: 'Vestidos Femininos Longo Flare Moderno.',
    links: [
      { product: 'Vestido Longo Flare', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1gAuuCY5No' }
    ]
  },
  {
    id: 215,
    image: 'img/vestido_curto_rodado_tomara_que_caia.jpg',
    title: 'Vestido Curto Rodado Tomara Que Caia Liso',
    description: 'Elegância, Conforto e Estiloso. Em Uma Peça Moda Verão.',
    links: [
      { product: 'Vestido Curto Rodado', price: 'R$ 00,00', url: 'https://s.shopee.com.br/VyxXK6cBT' }
    ]
  },
  {
    id: 216,
    image: 'img/vestido_sereia_ciganinha.jpg',
    title: 'Vestido Sereia Ciganinha Com Fenda Manga Comprida Longa',
    description: 'Vestido Sereia Ciganinha Com Fenda Manga Comprida Longa.',
    links: [
      { product: 'Vestido Sereia Ciganinha', price: 'R$ 00,00', url: 'https://s.shopee.com.br/4LBg6Y9ZqD' }
    ]
  },
  {
    id: 217,
    image: 'img/vestido_chiffon_europeu.jpg',
    title: '23 Vestido Longo De Chiffon Europeu E Americano',
    description: 'Alça Sexy, Costas Nuas, Fenda, Babado, Feminino 002.',
    links: [
      { product: 'Vestido Longo Chiffon', price: 'R$ 00,00', url: 'https://s.shopee.com.br/2qMsJtm3se' }
    ]
  },
  {
    id: 218,
    image: 'img/vestido_fenda_jennie_corrente.jpg',
    title: 'VESTIDO COM FENDA JENNIE COM CORRENTE ACESSÓRIO GÓTICO',
    description: 'Festa Balada.',
    links: [
      { product: 'Vestido Fenda Jennie Gótico', price: 'R$ 00,00', url: 'https://s.shopee.com.br/9UtmGKMhtQ' }
    ]
  },
  {
    id: 219,
    image: 'img/vestido_kylie_bata.jpg',
    title: 'VESTIDO KYLIE BATA DECOTADO COSTA NUA LONGO COM REGULAGEM',
    description: 'Vestido Kylie Bata Decotado Costa Nua Longo.',
    links: [
      { product: 'Vestido Kylie Bata', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8AOOh3p1SI' }
    ]
  },
  {
    id: 220,
    image: 'img/vestido_curto_assimetrico_fenda.jpg',
    title: 'Vestido Curto Assimétrico Com Fenda e Regulador Lateral',
    description: 'Vestido Curto Assimétrico Com Fenda e Regulador Lateral.',
    links: [
      { product: 'Vestido Curto Assimétrico', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1VrUIFIYrK' }
    ]
  },
  {
    id: 221,
    image: 'img/vestido_longo_costas_nuas_trancadas.jpg',
    title: 'Vestido LONGO elegante com costas nuas trançadas',
    description: 'Fenda Lateral Empina Bumbum Colado Novo.',
    links: [
      { product: 'Vestido Longo Costas Nuas', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1qUL9wZTOX' }
    ]
  },
  {
    id: 222, // Mude o ID (número único)
    image: 'img/NOME_DA_FOTO.jpg',
    title: 'Título do Look',
    description: 'Descrição curta',
    links: [
      { product: 'Nome Peça 1', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1qUL9wZTOx' }
    ]
  },
];

const listaTops = [
  {
    id: 301,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/8fKfHyn7RL' }
    ]
  },
  {
    id: 302,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/8V1F5fnkmK' }
    ]
  },
  {
    id: 303,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/2LQbkmiOAX' }
    ]
  },
  {
    id: 304,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/70CRJckYgz' }
    ]
  },
  {
    id: 305,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/5q0TusZ4xm?share_channel_code=1' }
    ]
  },
  {
    id: 306,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/3LJ8wMtmA9?share_channel_code=1' }
    ]
  },
  {
    id: 307,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/10vEAPce5q' }
    ]
  },
  {
    id: 308,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/70CRJckYgz' }
    ]
  },
  {
    id: 309,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/1gAuxYkvWL' }
    ]
  },
  {
    id: 310,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/qbny6dHQn' }
    ]
  },
  {
    id: 312,
    image: '',
    title: 'Look com Top',
    description: 'Top + Saia',
    links: [
      { product: 'Top Cropped Mesh', price: 'R$ 42,90', url: 'https://s.shopee.com.br/6pt17JlC1y' }
    ]
  },
  {
    id: 313,
    image: 'img/cropped_pop.jpg',
    title: 'Cropped POP',
    description: 'Cropped POP.',
    links: [
      { product: 'Cropped POP', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6pt10P8tc2' }
    ]
  },
  {
    id: 314,
    image: 'img/sutia_corpete_tule.jpg',
    title: 'Sutia Corpete Tule Xadrez',
    description: 'Sutia Corpete Tule Xadrez.',
    links: [
      { product: 'Sutiã Corpete Tule', price: 'R$ 00,00', url: 'https://s.shopee.com.br/AA9Syh0tjA' }
    ]
  },
  {
    id: 315,
    image: 'img/top_correntes_feminino.jpg',
    title: 'Top de Correntes Feminino',
    description: 'Sexy, Fashion e Ideal para Balada ou Festival M-A.',
    links: [
      { product: 'Top de Correntes', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5VNdQLD0Z2' }
    ]
  },
  {
    id: 316,
    image: 'img/top_bodychain_correntes.jpg',
    title: 'Top Bodychain Correntes de Busto Harness',
    description: 'Top Bodychain Correntes de Busto Harness.',
    links: [
      { product: 'Top Bodychain Harness', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5L4DE2Ddu1' }
    ]
  },
  {
    id: 317,
    image: 'img/espartilhos_renascentistas.jpg',
    title: 'Espartilhos Renascentistas Para Mulheres',
    description: 'Com De Ombro Mangas Longas De Renda Oferecem Góticos Corpete Top.',
    links: [
      { product: 'Espartilho Renascentista', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6fZaoxeqhT' }
    ]
  },
  {
    id: 318,
    image: 'img/top_carnaval.jpg',
    title: 'Top Carnaval',
    description: 'Top Carnaval.',
    links: [
      { product: 'Top Carnaval', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6VGAcefU2S' }
    ]
  },
  {
    id: 319,
    image: 'img/cropped_delirio_correntes.jpg',
    title: 'Cropped Delírio com Correntes',
    description: 'Cropped Delírio com Correntes.',
    links: [
      { product: 'Cropped Delírio', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6KwkQLg7NR' }
    ]
  },
  {
    id: 320,
    image: 'img/cropped_bmth_manga_longa.jpg',
    title: 'Blusa Cropped Manga Longa Bring me The Horizon',
    description: 'BMTH Banda Rock N Roll Gotico Tshirt Feminina.',
    links: [
      { product: 'Cropped BMTH Manga Longa', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6AdKE2gkiQ' }
    ]
  },
  {
    id: 321,
    image: 'img/tela_arrastao_cropped.jpg',
    title: 'Tela arrastão cropped feminino manga longa',
    description: 'PP ao G5 plus size.',
    links: [
      { product: 'Cropped Arrastão', price: 'R$ 00,00', url: 'https://s.shopee.com.br/4foWRYoSru' }
    ]
  },
  {
    id: 322,
    image: 'img/cropped_sobreposicao_tule.jpg',
    title: 'Cropped de Sobreposição de tule manga longa',
    description: 'Cropped de Sobreposição de tule manga longa.',
    links: [
      { product: 'Cropped Sobreposição Tule', price: 'R$ 00,00', url: 'https://s.shopee.com.br/4q7wdrnpWx' }
    ]
  },
  {
    id: 323,
    image: 'img/cropped_oversized_dragao.jpg',
    title: 'Cropped Feminino Oversized Estampa Dragão Japones',
    description: 'Nova coleção.',
    links: [
      { product: 'Cropped Oversized Dragão', price: 'R$ 00,00', url: 'https://s.shopee.com.br/LfXHb4xf6' }
    ]
  },
  {
    id: 324,
    image: 'img/cropped_bad_omens_manga_longa.jpg',
    title: 'Blusa Cropped Manga Longa Bad Omens',
    description: 'Album Banda Rock Roll Gotico Moda Feminina.',
    links: [
      { product: 'Cropped Bad Omens', price: 'R$ 00,00', url: 'https://s.shopee.com.br/3AzierExff' }
    ]
  },
  {
    id: 325,
    image: 'img/cropped_bmth_manga_longa_2.jpg',
    title: 'Blusa Cropped Manga Longa Bring me The Horizon (Opção 2)',
    description: 'BMTH Banda Rock N Roll Gotico Tshirt Feminina.',
    links: [
      { product: 'Cropped BMTH Manga Longa', price: 'R$ 00,00', url: 'https://s.shopee.com.br/3LJ8rAEKKI' }
    ]
  },
  {
    id: 326,
    image: 'img/corset_corrente_gotico.jpg',
    title: 'Corset com corrente gótico goth Plus Size',
    description: 'Witching Hour.',
    links: [
      { product: 'Corset Gótico Plus Size', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5q0Tpvllg2' }
    ]
  },
  {
    id: 327,
    image: 'img/cropped_ilhos_goth.jpg',
    title: 'Cropped com ilhós de amarrar Goth (Plus Size)',
    description: 'Witching Hour.',
    links: [
      { product: 'Cropped Ilhós Goth', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5fh3dclw11' }
    ]
  },
  {
    id: 328,
    image: 'img/camiseta_cropped_vampiro.jpg',
    title: 'Camiseta Cropped Preta Feminina Estampa Gótica',
    description: 'Mordida Vampiro Streetwear.',
    links: [
      { product: 'Camiseta Cropped Vampiro', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7V8hozBxIO' }
    ]
  },
  {
    id: 329,
    image: 'img/cropped_corse_gotico.jpg',
    title: 'Cropped Corse Corselet Gotico Fashion Sexy',
    description: 'Elegante Casual Top Chique Festa Estruturado Delicado.',
    links: [
      { product: 'Cropped Corselet Gótico', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6fZapVima1' }
    ]
  },
  {
    id: 330,
    image: 'img/regata_cropped_bad_omens.jpg',
    title: 'Regata Cropped Bad Omens Banda Rock',
    description: 'Americano Musica Algodão.',
    links: [
      { product: 'Regata Cropped Bad Omens', price: 'R$ 00,00', url: 'https://s.shopee.com.br/10vE59cLCG' }
    ]
  },
  {
    id: 331,
    image: 'img/cropped_bmth_2019_oversized.jpg',
    title: 'Blusa Cropped Feminino OVERSIZED Bring Me the Horizon 2019',
    description: 'You Me At Six Banda Britânica Rock.',
    links: [
      { product: 'Cropped BMTH Oversized', price: 'R$ 00,00', url: 'https://s.shopee.com.br/AUmJOq0v5n' }
    ]
  },
  {
    id: 332,
    image: 'img/cropped_bmth_estrela.jpg',
    title: 'Blusa Cropped Feminino Bring Me The Horizon Estrela',
    description: 'Banda Rock Algodao.',
    links: [
      { product: 'Cropped BMTH Estrela', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5fh3dznJ18' }
    ]
  },
  {
    id: 333,
    image: 'img/cropped_bmth_spirit.jpg',
    title: 'Blusa Cropped Feminino OVERSIZED Frente E Costas That\'s the Spirit',
    description: 'Álbum Da Banda Bring Me the Horizon Rock.',
    links: [
      { product: 'Cropped BMTH Spirit', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5q0TqlmfxB' }
    ]
  },
  {
    id: 334,
    image: 'img/cropped_slipknot.jpg',
    title: 'Blusa Cropped Feminino Slipknot',
    description: 'Rock Solomon Cut Music.',
    links: [
      { product: 'Cropped Slipknot', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5L4DFNoZy6' }
    ]
  },
  {
    id: 335,
    image: 'img/cropped_bmth_escrita_gotica.jpg',
    title: 'Blusa Cropped Feminino OVERSIZED Frente E Costas BMTH',
    description: 'Escrita Gotica Band Boy Rock.',
    links: [
      { product: 'Cropped BMTH Gótica', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5VNdRgnwd9' }
    ]
  },
  {
    id: 336,
    image: 'img/cropped_slipknot_members.jpg',
    title: 'Blusa Cropped Feminino OVERSIZED Frente E Costas Slipknot',
    description: 'Members Cute Band Rock.',
    links: [
      { product: 'Cropped Slipknot Members', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6KwkRDklwK' }
    ]
  },
  {
    id: 337,
    image: 'img/cropped_novo_inverno.jpg',
    title: 'Cropped novo de inverno manga longa',
    description: 'Decotado na frente colado suplex.',
    links: [
      { product: 'Cropped Inverno Manga Longa', price: 'R$ 00,00', url: 'https://s.shopee.com.br/LfXIFO07L' }
    ]
  },
  {
    id: 338,
    image: 'img/corset_espartilho_marinho.jpg',
    title: 'Corset Espartilho Corselet Corpete Marinho de Renda',
    description: 'Alça Regulável Feminino Costas Abertas.',
    links: [
      { product: 'Corset Marinho Renda', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7V8hqp5VEg' }
    ]
  },
  {
    id: 339,
    image: 'img/kit_3_cropped_top.jpg',
    title: 'Hiper Kit 3 Cropped Top Feminino Canelado',
    description: 'Com 2 Alças.',
    links: [
      { product: 'Kit 3 Cropped Canelado', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1qUL6VXS2r' }
    ]
  },
  {
    id: 340,
    image: 'img/cropped_franzido_alca.jpg',
    title: 'Cropped lindíssima franzido e com alça',
    description: 'Cropped lindíssima franzido e com alça.',
    links: [
      { product: 'Cropped Franzido', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7fS84NzpM4' }
    ]
  },
  {
    id: 341,
    image: 'img/top_regata_decotado_renda.jpg',
    title: 'Top Feminino Regata Decotado De Renda',
    description: 'Com Alcinha E Regulagem.',
    links: [
      { product: 'Top Regata Renda', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7V8hs50Sh5' }
    ]
  },
  {
    id: 342,
    image: 'img/cropped_alcinha_bojo.jpg',
    title: 'Croped cropped feminino alcinha com bojo corset suplex',
    description: 'Croped feminino alcinha com bojo.',
    links: [
      { product: 'Cropped Alcinha Bojo', price: 'R$ 00,00', url: 'https://s.shopee.com.br/50RMtapU30' }
    ]
  },
  {
    id: 343,
    image: 'img/cropped_dama_noite_chantilly.jpg',
    title: 'Cropped Dama da Noite Chantilly',
    description: 'Cropped Dama da Noite Chantilly.',
    links: [
      { product: 'Cropped Dama da Noite', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5Akn5toqiR' }
    ]
  },
  {
    id: 344,
    image: 'img/cropped_corselet_morcego.jpg',
    title: 'CROPPED CORSELET MORCEGO COM BOJO',
    description: 'Tomara que caia.',
    links: [
      { product: 'Cropped Corselet Morcego', price: 'R$ 00,00', url: 'https://s.shopee.com.br/20nlKD28pb' }
    ]
  },
  {
    id: 345,
    image: 'img/body_alice_corselete.jpg',
    title: 'Body Feminino Alice Tomara Que Caia Morcego Corselete',
    description: 'Body Feminino Alice Tomara Que Caia.',
    links: [
      { product: 'Body Corselete Alice', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8V1F49dOds' }
    ]
  },
  {
    id: 346,
    image: 'img/cropped_escrita_angel.jpg',
    title: 'Cropped, Escrita ANGEL, Gola Alta',
    description: 'Blogueira Alternativa Feminina.',
    links: [
      { product: 'Cropped Angel Gola Alta', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8Khorqe1yr' }
    ]
  },
  {
    id: 347,
    image: 'img/kit_2_cropped_amarracao.jpg',
    title: 'Kit 2 Cropped de Amarração Decotado 7 em 1',
    description: 'Top Tomara que Cai Blusa Multiuso.',
    links: [
      { product: 'Kit 2 Cropped Amarração', price: 'R$ 00,00', url: 'https://s.shopee.com.br/804yTEflep' }
    ]
  },
  {
    id: 348,
    image: 'img/cropped_corselet_alca_grossa.jpg',
    title: 'Cropped corselet de alça grossa blogueira',
    description: 'Corset Bico V Corselete Com Bojo.',
    links: [
      { product: 'Cropped Corselet Alça Grossa', price: 'R$ 00,00', url: 'https://s.shopee.com.br/40YphwAqWB' }
    ]
  },
  {
    id: 349,
    image: 'img/kit_2_croped_top_corset.jpg',
    title: 'Kit 2 Croped Feminino Top Corset Corselet',
    description: 'Verão Malha Acetinada Premium Feminina.',
    links: [
      { product: 'Kit 2 Cropped Corset', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1LY4WQEPxv' }
    ]
  },
  {
    id: 350,
    image: 'img/corset_cropped_renda_acetinado.jpg',
    title: 'Corset Cropped De Renda Feminino Acetinado',
    description: 'Com Alça, Amarrar na costa / verão festa.',
    links: [
      { product: 'Corset Cropped Renda', price: 'R$ 00,00', url: 'https://s.shopee.com.br/2g3S73vctk?share_channel_code=1' }
    ]
  },
  {
    id: 351,
    image: 'img/corpete_corselet_branco.jpg',
    title: 'Corpete corselet feminino Cropped Corset gringa branco',
    description: 'Blusa Espartilho plus size preto Top acetinado.',
    links: [
      { product: 'Corpete Corselet Gringa', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5Akn6BdB94' }
    ]
  },
  {
    id: 352,
    image: 'img/cropped_top_renda_triangulo.jpg',
    title: 'Cropped Top Feminino Renda Triangulo',
    description: 'Golinha Manguinha Preto.',
    links: [
      { product: 'Cropped Renda Triângulo', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8fKfHyn7RL' }
    ]
  },
  {
    id: 353,
    image: 'img/kit_5_top_cropped_costas_nua.jpg',
    title: 'Kit 5 top cropped costas nua',
    description: 'Moda gringa melly.',
    links: [
      { product: 'Kit 5 Cropped Costas Nua', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8V1F5fnkmK' }
    ]
  },
  {
    id: 354,
    image: 'img/conjunto_mini_saia_cropedd.jpg',
    title: 'Conjunto Mini Saia Com Cropedd Assimétrico',
    description: 'Curto Colado Tendência Moda Feminina Gringa.',
    links: [
      { product: 'Conjunto Saia e Cropped', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1gAuxYkvWL' }
    ]
  },
  {
    id: 355,
    image: 'img/kit_3_cropped_tomara_que_caia.jpg',
    title: 'Kit 3 Cropped Top Tomara que Caia',
    description: 'Kit 3 Cropped Top Tomara que Caia.',
    links: [
      { product: 'Kit 3 Cropped TQC', price: 'R$ 00,00', url: 'https://s.shopee.com.br/2LQbkmiOAX' }
    ]
  },
  {
    id: 356,
    image: 'img/cropped_maya_manga_longa.jpg',
    title: 'Cropped Maya Manga Longa Feminina Com Bojo',
    description: 'Recortes Faixa Moda Blogueira Gringa.',
    links: [
      { product: 'Cropped Maya Manga Longa', price: 'R$ 00,00', url: 'https://s.shopee.com.br/qbny6dHQn' }
    ]
  },
  {
    id: 357,
    image: 'img/cropped_feminino_corset_renda.jpg',
    title: 'Cropped Feminino Corset Renda Corselet',
    description: 'Alça Regulagem Cropped Blusa.',
    links: [
      { product: 'Cropped Corset Renda', price: 'R$ 00,00', url: 'https://s.shopee.com.br/10vEAPce5q' }
    ]
  },
  {
    id: 358,
    image: 'img/corset_corselet_alcinha.jpg',
    title: 'Corset Corselet Cropped Alcinha Renda',
    description: 'Top Crop Sem Bojo Sexy.',
    links: [
      { product: 'Corset Cropped Alcinha', price: 'R$ 00,00', url: 'https://s.shopee.com.br/70CRJckYgz' }
    ]
  },
  {
    id: 359,
    image: 'img/kit_4_croppeds_variados.jpg',
    title: 'Kit 4 Croppeds Modelos Variados',
    description: 'Manga longa, Gola Alta, Alcinha e Regata Canelados.',
    links: [
      { product: 'Kit 4 Croppeds Variados', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6pt17JIC1y' }
    ]
  },
  {
    id: 360,
    image: 'img/cropped_top_vinil_alcinha.jpg',
    title: 'Cropped Top Vinil Alcinha Feminino',
    description: 'Decote Regulagem.',
    links: [
      { product: 'Cropped Vinil Alcinha', price: 'R$ 00,00', url: 'https://s.shopee.com.br/3fvzKQX71E?share_channel_code=1' }
    ]
  },
  {
    id: 361,
    image: 'img/body_manga_longa_veludo.jpg',
    title: 'Body manga longa veludo com gola em V',
    description: 'Body manga longa veludo com gola em V.',
    links: [
      { product: 'Body Manga Longa Veludo', price: 'R$ 00,00', url: 'https://s.shopee.com.br/70CRFu7PFd' } // [cite: 183]
    ]
  },
  {
    id: 362,
    image: 'img/body_manga_longa_pedrarias.jpg',
    title: 'Body manga longa veludo com gola em pedrarias',
    description: 'Decote em renda fechamento.',
    links: [
      { product: 'Body Pedrarias', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1BEeJHZzOf' } // [cite: 186]
    ]
  },
  {
    id: 363,
    image: 'img/body_tomara_que_caia_cavado.jpg',
    title: 'Body Tomara que Caia Cavado Suplex Bori Cavadão',
    description: 'Body Tomara que Caia Cavado Suplex Bori Cavadão.',
    links: [
      { product: 'Body Cavado Suplex', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7KpHfm1622' } // [cite: 218]
    ]
  },
  {
    id: 364,
    image: 'img/body_feminino_alcinha_anarruga.jpg',
    title: 'Body Feminino Alcinha com Forro Anarruga de Algodão',
    description: 'Bory Alça Fina.',
    links: [
      { product: 'Body Alcinha Anarruga', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8AOOfXefJq' } // [cite: 233]
    ]
  },
  {
    id: 365,
    image: 'img/body_tule_gola_alta.jpg',
    title: 'Body de Tule Gola Alta Moda Feminina Manga Longa',
    description: 'Transparente D\'ocê Modas.',
    links: [
      { product: 'Body Tule Gola Alta', price: 'R$ 00,00', url: 'https://s.shopee.com.br/4VV6Ir8wVE' } // [cite: 236]
    ]
  },
  {
    id: 366,
    image: 'img/body_espartilho_morcego.jpg',
    title: 'Body Espartilho Morcego Tomara que Caia Feminina',
    description: 'Body Espartilho Morcego Tomara que Caia Feminina.',
    links: [
      { product: 'Body Espartilho Morcego', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5Akn656P9Q' } // [cite: 240]
    ]
  },
  {
    id: 367,
    image: 'img/body_mais_saia_nina.jpg',
    title: 'Body mais saia / BODY e saia (NINA) 009',
    description: 'Conjunto body e saia.',
    links: [
      { product: 'Body e Saia Nina', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1LY4YwmCCJ' } // [cite: 372]
    ]
  },
  {
    id: 368,
    image: 'img/body_tule_karina.jpg',
    title: 'Body de tule karina, conjunto completo',
    description: 'Tendencia, moda balada.',
    links: [
      { product: 'Body Tule Karina', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1gAuxda6ju' } // [cite: 375]
    ]
  }
];

const listaSaias = [
  {
    id: 401,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/9UtmI5IH3G?share_channel_code=1' }
    ]
  },
  {
    id: 402,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/7AVrVvjvM0' }
    ]
  },
  {
    id: 403,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/2Vk1wWvtPJ?share_channel_code=1' }
    ]
  },
  {
    id: 404,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/8KhotMoO7J' }
    ]
  },
  {
    id: 405,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/1gAuxYkvWL' }
    ]
  },
  {
    id: 406,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/1LY4YwmCCJ' }
    ]
  },
  {
    id: 407,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/2Vk1x5hkpY' }
    ]
  },
  {
    id: 408,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/gINlndulk' }
    ]
  },
  {
    id: 409,
    image: 'img/saia_colegial_pregueada_preta.jpg',
    title: 'Saia Colegial Pregueada Preta Dividida Estilos Cosplay',
    description: 'Saia Colegial Pregueada Preta Dividida Estilos Cosplay Ghotica Punk Grunge Egirl Short.',
    links: [
      { product: 'Saia Colegial Pregueada', price: 'R$ 00,00', url: 'https://s.shopee.com.br/70CRCi8GH3' }
    ]
  },
  {
    id: 410,
    image: 'img/saia_cosplay_pregueada_com_listras.jpg',
    title: 'Saia cosplay pregueada com listras',
    description: 'Saia cosplay pregueada com listras.',
    links: [
      { product: 'Saia Cosplay Pregueada', price: 'R$ 00,00', url: 'https://s.shopee.com.br/9fDCNm2nk3' }
    ]
  },
  {
    id: 411,
    image: 'img/saia_vinil_ziper_lateral.jpg',
    title: 'Saia Vinil Zíper Lateral Vinílico Araiá Rodeio Festa Junina',
    description: 'Saia Vinil Zíper Lateral Vinílico Araiá Rodeio Festa Junina.',
    links: [
      { product: 'Saia Vinil Zíper', price: 'R$ 00,00', url: 'https://s.shopee.com.br/9zq2mO1X49' }
    ]
  },
  {
    id: 412,
    image: 'img/saia_feminina_em_camadas_de_tule.jpg',
    title: 'Saia Feminina Em Camadas De Tule Babados Malha Longa',
    description: 'Saia Feminina Em Camadas De Tule Babados Malha Longa.',
    links: [
      { product: 'Saia Tule Camadas', price: 'R$ 00,00', url: 'https://s.shopee.com.br/AUmJNIzd3G' }
    ]
  },
  {
    id: 413,
    image: 'img/short_tule_transparente_brilhante.jpg',
    title: 'Short TULE Transparente Brilhante Correntes e bolsos',
    description: 'Short TULE Transparente Brilhante Correntes e bolsos/com GLITER.',
    links: [
      { product: 'Short Tule Transparente', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5fh3ceCNE7' }
    ]
  },
  {
    id: 414,
    image: 'img/saia_de_malha_com_fenda.jpg',
    title: 'Saia de malha com fenda moda alternativa gótico goth',
    description: 'Saia de malha com fenda moda alternativa gótico goth Plus Size Witching Hour.',
    links: [
      { product: 'Saia Malha Fenda', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5VNdRJJZLw' }
    ]
  },
  {
    id: 415,
    image: 'img/shorts_de_malha_com_elastico.jpg',
    title: 'Shorts de malha com elastico Harness Moda alternativa',
    description: 'Shorts de malha com elastico Harness Moda alternativa Witching Hour Plus Size.',
    links: [
      { product: 'Shorts Malha Elástico', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5L4DF0KCgv' }
    ]
  },
  {
    id: 416,
    image: 'img/saia_longa_tule_2_fendas.jpg',
    title: 'Saia Longa Tule 2 Fendas Festa Chique Shorts Saia Cintura',
    description: 'Saia Longa Tule 2 Fendas Festa Chique Shorts Saia Cintura.',
    links: [
      { product: 'Saia Longa Tule', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6KwkRPxSH8' }
    ]
  },
  {
    id: 417,
    image: 'img/saia_com_ilhos_e_corrente.jpg',
    title: 'Saia com Ilhós e Corrente Removível',
    description: 'Saia com Ilhós e Corrente Removível.',
    links: [
      { product: 'Saia Ilhós Corrente', price: 'R$ 00,00', url: 'https://s.shopee.com.br/qbnufbG4d' }
    ]
  },
  {
    id: 418,
    image: 'img/cinto_couro_e_saia_de_correntes.jpg',
    title: 'Cinto Couro e Correntes / Saia de Correntes',
    description: 'Gótico Alternativo Aesthetic Egirl Punk.',
    links: [
      { product: 'Saia de Correntes', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1LY4VvI4XP' }
    ]
  },
  {
    id: 419,
    image: 'img/short_saia_alfaiataria.jpg',
    title: 'Short saia alfaiataria, moda feminina',
    description: 'Saia estilo colegial.',
    links: [
      { product: 'Short Saia Alfaiataria', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7plYGgzC17' }
    ]
  },
  {
    id: 420,
    image: 'img/saia_longa_para_festas_com_short.jpg',
    title: 'Saia Longa para Festas com Short em Tule com Brilho',
    description: 'Saia Longa para Festas com Short em Tule com Brilho.',
    links: [
      { product: 'Saia Longa Tule Brilho', price: 'R$ 00,00', url: 'https://s.shopee.com.br/50RMtsdoU3' }
    ]
  },
  {
    id: 421,
    image: 'img/mini_short_jennie_cinto.jpg',
    title: 'MINI SHORT JENNIE CINTO, COM DETALHE EM CORRENTE',
    description: 'GÓTICO.',
    links: [
      { product: 'Mini Short Jennie', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8zxVfPObuJ' }
    ]
  },
  {
    id: 422,
    image: 'img/shorts_saia_feminino_laco.jpg',
    title: 'Shorts Saia Feminino Laço Frontal Detalhe Assimetrico',
    description: 'Cintura Alta Ana Ruga Crepe Moda em Alta.',
    links: [
      { product: 'Shorts Saia Laço', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8KhotMoO7J' }
    ]
  },
  {
    id: 423,
    image: 'img/conjunto_mini_saia_cropped.jpg',
    title: 'Conjunto Mini Saia Com Cropedd Assimétrico Curto',
    description: 'Colado Tendência Moda Feminina Gringa.',
    links: [
      { product: 'Conjunto Mini Saia', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1gAuxYkvWL' }
    ]
  },
  {
    id: 424,
    image: 'img/body_mais_saia_nina.jpg',
    title: 'body mais saia / BODY e saia (NINA) 009',
    description: 'body mais saia / BODY e saia (NINA) 009.',
    links: [
      { product: 'Body e Saia Nina', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1LY4YwmCCJ' }
    ]
  },
  {
    id: 425,
    image: 'img/saia_curta_feminina_fenda.jpg',
    title: 'Saia Curta Feminina Com Fenda Suplex',
    description: 'Saia Curta Feminina Com Fenda Suplex.',
    links: [
      { product: 'Saia Curta Fenda', price: 'R$ 00,00', url: 'https://s.shopee.com.br/2Vk1x5hkpY' }
    ]
  },
  {
    id: 426,
    image: 'img/saia_longa_cetim_feminina.jpg',
    title: 'Saia Longa Cetim Feminina Cintura Alta com Zíper e Elástico',
    description: 'Look Elegante e Confortável.',
    links: [
      { product: 'Saia Longa Cetim', price: 'R$ 00,00', url: 'https://s.shopee.com.br/gINIndulk' }
    ]
  },
  {
    id: 427,
    image: 'img/saia_feminina_fendas_laterais.jpg',
    title: 'Saia Feminina com Fendas Laterais Cintura Alta Tribo Livre',
    description: 'Saia Feminina com Fendas Laterais Cintura Alta Tribo Livre.',
    links: [
      { product: 'Saia Fendas Laterais', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7AVrVvjvM0' }
    ]
  }
];

const listaCalcas = [
  {
    id: 501,
    image: '',
    title: 'Look com Top',
    description: 'Saia',
    links: [
      { product: 'Saia', price: 'R$ 42,90', url: 'https://s.shopee.com.br/8pe5UHmU6M' }
    ]
  },
  {
    id: 502,
    image: 'img/calca_legging_fuso.jpg',
    title: 'Calça legging fuso forrada Qualidade Top Shoope',
    description: 'Calça legging fuso forrada Qualidade Top Shoope.',
    links: [
      { product: 'Calça Legging Fuso', price: 'R$ 00,00', url: 'https://s.shopee.com.br/glNgXdbsE' } // [cite: 77]
    ]
  },
  {
    id: 503,
    image: 'img/calca_gancho_bolso.jpg',
    title: 'CALÇA GANCHO BOLSO ESTILOSO MODA BLOQUEIRA',
    description: 'CALÇA GANCHO BOLSO ESTILOSO MODA BLOQUEIRA.',
    links: [
      { product: 'Calça Gancho Bolso', price: 'R$ 00,00', url: 'https://s.shopee.com.br/qbnsqcyXH' } // [cite: 78]
    ]
  },
  {
    id: 504,
    image: 'img/kit_2_calca_parachute.jpg',
    title: 'KIT 2 Calça Parachute Cargo Feminina Drapeada Cintura Alta',
    description: 'Estilosa Alfaiataria tendência moda gringa.',
    links: [
      { product: 'Kit 2 Calça Parachute', price: 'R$ 00,00', url: 'https://s.shopee.com.br/qbnsxRLfg' } // [cite: 84]
    ]
  },
  {
    id: 505,
    image: 'img/calca_moletom_death_note.jpg',
    title: 'Calça Moletom Feminina Wide Leg death note manga terror',
    description: 'Pantalona Desposaja Larga Casual Flanelada Ajustavel.',
    links: [
      { product: 'Calça Moletom Death Note', price: 'R$ 00,00', url: 'https://s.shopee.com.br/1VrUgBOoJs' } // [cite: 90, 91]
    ]
  },
  {
    id: 506,
    image: 'img/calca_moletom_agua_viva.jpg',
    title: 'Calça Moletom Feminina Wide Leg Style agua viva',
    description: 'Desposaja Larga Casual Flanelada Ajustavel.',
    links: [
      { product: 'Calça Moletom Água Viva', price: 'R$ 00,00', url: 'https://s.shopee.com.br/AA9T09qbb7' } // [cite: 92]
    ]
  },
  {
    id: 507,
    image: 'img/calca_moletom_cruz_punk.jpg',
    title: 'Calça Moletom Feminina Wide Leg Style cruz punk',
    description: 'Pantalona Desposaja Larga Casual Flanelada Ajustavel.',
    links: [
      { product: 'Calça Moletom Cruz Punk', price: 'R$ 00,00', url: 'https://s.shopee.com.br/AKStCSpyGA' } // [cite: 93, 94]
    ]
  },
  {
    id: 508,
    image: 'img/calca_moletom_dark_street.jpg',
    title: 'Calça Moletom Feminina Wide Leg Style dark street',
    description: 'Pantalona Desposaja Larga Casual Flanelada Ajustavel.',
    links: [
      { product: 'Calça Moletom Dark Street', price: 'R$ 00,00', url: 'https://s.shopee.com.br/AUmJOlpKvD' } // [cite: 95, 96]
    ]
  },
  {
    id: 509,
    image: 'img/calca_moletom_snake_cobra.jpg',
    title: 'Calça Moletom Feminina Wide Leg Style snake cobra',
    description: 'Pantalona Desposaja Larga Casual Flanelada Ajustavel.',
    links: [
      { product: 'Calça Moletom Snake', price: 'R$ 00,00', url: 'https://s.shopee.com.br/9KaM0ctm10' } // [cite: 97, 98]
    ]
  },
  {
    id: 510,
    image: 'img/calca_moletom_dragao_guerreiro.jpg',
    title: 'Calça Moletom Feminina Wide Leg Style dragao guerreiro',
    description: 'Pantalona Desposaja Larga Casual Flanelada Ajustavel.',
    links: [
      { product: 'Calça Moletom Dragão', price: 'R$ 00,00', url: 'https://s.shopee.com.br/9UtmCvt8x3' } // [cite: 99, 100]
    ]
  },
  {
    id: 511,
    image: 'img/calca_xadrez_feminina_flanela.jpg',
    title: 'Calça Xadrez Feminina Flanela Cargo Preta Vermelha',
    description: 'Preta Branca Roxa Amarela Rosa.',
    links: [
      { product: 'Calça Xadrez Flanela', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6AdKF6y5c5' } // [cite: 126]
    ]
  },
  {
    id: 512,
    image: 'img/calca_estilosa_wide_leg_moletom.jpg',
    title: 'Calça Estilosa Wide Leg Moletom Tecido De Algodão Peluciado',
    description: 'Moda Unissex.',
    links: [
      { product: 'Calça Wide Leg Algodão', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6VGAdiwowB' } // [cite: 128]
    ]
  },
  {
    id: 513,
    image: 'img/calca_larga_moletom_oriental_1.jpg',
    title: 'Calça Larga Moletom Wide Estética Urbana Oriental Dragão Japonês',
    description: 'Asiático Lançamento.',
    links: [
      { product: 'Calça Moletom Oriental', price: 'R$ 00,00', url: 'https://s.shopee.com.br/4AsFrYOSFE' } // [cite: 132]
    ]
  },
  {
    id: 514,
    image: 'img/calca_larga_moletom_oriental_2.jpg',
    title: 'Calça Larga Moletom Wide Estética Urbana Oriental Dragão Japonês (Opção 2)',
    description: 'Asiático Lançamento.',
    links: [
      { product: 'Calça Moletom Oriental', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5fh3fLfhxp' } // [cite: 175]
    ]
  },
  {
    id: 515,
    image: 'img/calca_flare_cirre_cintura_alta.jpg',
    title: 'Calça Flare Cirrê Cintura Alta P, M, Ge GG',
    description: 'Slim, Midi e Plus | 36 ao 50.',
    links: [
      { product: 'Calça Flare Cirrê', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7KpHeW68Zf' } // [cite: 180, 181]
    ]
  },
  {
    id: 516,
    image: 'img/calca_modeladora_legging_power.jpg',
    title: 'Calça Modeladora Legging Power Feminino com Detalhe de Cintos',
    description: 'Lateral e Ziper Elegante.',
    links: [
      { product: 'Calça Legging Power', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8pe5UHmU6M' } // [cite: 358]
    ]
  }
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
    id: 601,
    image: 'img/bota_cunha_gotico.jpg',
    title: 'Tamanho Grande 43 Preto Estilo Gótico Fresco Do Punk',
    description: 'Motocicletas Botas Cunhas Salto Alto De Bezerro Mulheres Sapatos.',
    links: [
      { product: 'Bota Cunha Gótica', price: 'R$ 00,00', url: 'https://s.shopee.com.br/3VcZ2HLANK' }
    ]
  },
  {
    id: 602,
    image: 'img/papete_plataforma_fashionista.jpg',
    title: 'Papete Sandalia Feminina Plataforma Fashionista',
    description: 'Tiras Preto Fivela Blogueira Tratorada Sola Alta.',
    links: [
      { product: 'Papete Plataforma', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8AOOb7wssZ' }
    ]
  },
  {
    id: 603,
    image: 'img/sandalia_rasteirinha_strass.jpg',
    title: 'Meijile Sandália Feminina Rasteirinha sandálias rasteiras',
    description: 'Strass Fivela de sapato ajustável papete feminina260.',
    links: [
      { product: 'Sandália Rasteirinha Strass', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5q0ToxBjt8' }
    ]
  },
  {
    id: 604,
    image: 'img/papete_feminina_fivela.jpg',
    title: 'Papete Feminina Sandalia com Fivela e Detalhes Apliques',
    description: 'Papete Feminina Sandalia com Fivela e Detalhes Apliques.',
    links: [
      { product: 'Papete Fivela Apliques', price: 'R$ 00,00', url: 'https://s.shopee.com.br/7V8ho15OVU' }
    ]
  },
  {
    id: 605,
    image: 'img/sapato_mary_jane_tratorado.jpg',
    title: 'Sapato Feminino Mary Jane Tratorado com Fivela',
    description: 'Moda Inverno Tendência Grunge Chucky Ref: 177.',
    links: [
      { product: 'Mary Jane Tratorado', price: 'R$ 00,00', url: 'https://s.shopee.com.br/2g3S3HKEB7' }
    ]
  },
  {
    id: 606,
    image: 'img/sapato_mary_jane_macerata.jpg',
    title: 'Sapato Mary Jane Macerata Salto Grosso com Fivela',
    description: 'Vintage Estilo Britânico Boneca Lolita Ref: 178.',
    links: [
      { product: 'Mary Jane Macerata', price: 'R$ 00,00', url: 'https://s.shopee.com.br/3AzieCIKAE' }
    ]
  },
  {
    id: 607,
    image: 'img/coturno_feminino_brilho.jpg',
    title: 'Coturno Feminino Tratorado com Brilho Strass Inverno',
    description: 'Alliah Calçados.',
    links: [
      { product: 'Coturno Brilho Strass', price: 'R$ 00,00', url: 'https://s.shopee.com.br/6AdKEhHOL1' }
    ]
  },
  {
    id: 608,
    image: 'img/bota_chelsea_plataforma.jpg',
    title: 'Bota Chelsea Plataforma CHUNKY',
    description: 'Bota Chelsea Plataforma CHUNKY.',
    links: [
      { product: 'Bota Chelsea Chunky', price: 'R$ 00,00', url: 'https://s.shopee.com.br/4LBq3KON3g' }
    ]
  },
  {
    id: 609,
    image: 'img/coturno_tratorado_pedraria.jpg',
    title: 'Coturno Tratorado Pedraria Ziper Angel Napa Preto',
    description: 'Coturno Tratorado Pedraria Ziper Angel Napa Preto.',
    links: [
      { product: 'Coturno Pedraria Angel', price: 'R$ 00,00', url: 'https://s.shopee.com.br/12gtdPGnF' }
    ]
  },
  {
    id: 610,
    image: 'img/tenis_cloe_esportivo.jpg',
    title: 'Tênis Cloe Feminino Esportivo Caminhada Fitnes',
    description: 'GuGi Solado Antiderrapante Leve 621-GG.',
    links: [
      { product: 'Tênis Cloe Esportivo', price: 'R$ 00,00', url: 'https://s.shopee.com.br/9fDCQNyxRX' }
    ]
  },
  {
    id: 611,
    image: 'img/tenis_streetwear_jade.jpg',
    title: 'Tênis Streetwear Feminino Blogueira Jade Sneaker',
    description: 'Confortável Estiloso e Versátil.',
    links: [
      { product: 'Tênis Streetwear Jade', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8pe5Qr2880' }
    ]
  },
  {
    id: 612,
    image: 'img/tenis_cloe_esportivo_2.jpg',
    title: 'Tênis Cloe Feminino Esportivo Caminhada Fitnes (Opção 2)',
    description: 'GuGi Solado Antiderrapante Leve 621-GG.',
    links: [
      { product: 'Tênis Cloe Esportivo', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8V1F2HKBqq' }
    ]
  },
  {
    id: 613,
    image: 'img/tenis_streetwear_jade_2.jpg',
    title: 'Tênis Streetwear Feminino Blogueira Jade Sneaker (Opção 2)',
    description: 'Confortável Estiloso e Versátil.',
    links: [
      { product: 'Tênis Streetwear Jade', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8KhopyKpBp' }
    ]
  },
  {
    id: 614,
    image: 'img/tenis_dubuy_cano_baixo.jpg',
    title: 'Tenis Feminino Dubuy Cano Baixo Recorte Preto Sun 031FG',
    description: 'Tenis Feminino Dubuy Cano Baixo Recorte Preto Sun 031FG.',
    links: [
      { product: 'Tênis Dubuy Cano Baixo', price: 'R$ 00,00', url: 'https://s.shopee.com.br/8AOOdfLSWo' }
    ]
  },
  {
    id: 615,
    image: 'img/tenis_sneaker_dubuy_plataforma.jpg',
    title: 'Tenis Sneaker Dubuy Feminino Plataforma Branco Sun 029FG',
    description: 'Tenis Sneaker Dubuy Feminino Plataforma Branco Sun 029FG.',
    links: [
      { product: 'Tênis Sneaker Dubuy', price: 'R$ 00,00', url: 'https://s.shopee.com.br/804yRMM5rn' }
    ]
  },
  {
    id: 616,
    image: 'img/bota_over_improvizzo.jpg',
    title: 'Bota Feminina Over Improvizzo Tratorada The Knee',
    description: 'Promoção.',
    links: [
      { product: 'Bota Over The Knee', price: 'R$ 00,00', url: 'https://s.shopee.com.br/40Ypg9pLxP?share_channel_code=1' }
    ]
  },
  {
    id: 617,
    image: 'img/bota_strech_cano_curto.jpg',
    title: 'Bota strech cano curto salto alto',
    description: 'Bota strech cano curto salto alto.',
    links: [
      { product: 'Bota Strech Cano Curto', price: 'R$ 00,00', url: 'https://s.shopee.com.br/5q0Tref4cq' }
    ]
  },
  {
    id: 618,
    image: 'img/babuche_plataforma_styps.jpg',
    title: 'Babuche Sandália Plataforma Feminina Anti Derrapante',
    description: 'Styps Hooked.',
    links: [
      { product: 'Babuche Plataforma', price: 'R$ 00,00', url: 'https://s.shopee.com.br/20nlJeBsbz' }
    ]
  },
  {
    id: 619,
    image: 'img/sandalia_feminina_salto_9cm.jpg',
    title: 'Sandália Feminina Salto 9 Cm Palmilha Confortável',
    description: 'Sandália Feminina Salto 9 Cm Palmilha Confortável.',
    links: [
      { product: 'Sandália Salto 9cm', price: 'R$ 00,00', url: 'https://s.shopee.com.br/2g3S7amhDd' }
    ]
  },
  {
    id: 620,
    image: 'img/sandalia_feminina_salto_9cm_2.jpg',
    title: 'Sandália Feminina Salto 9 Cm Palmilha Confortável (Opção 2)',
    description: 'Sandália Feminina Salto 9 Cm Palmilha Confortável.',
    links: [
      { product: 'Sandália Salto 9cm', price: 'R$ 00,00', url: 'https://s.shopee.com.br/VyxXgxOQJ' }
    ]
  },
  {
    id: 621,
    image: 'img/bota tratorada.png', 
    title: 'Bota tratorada',
    description: 'Bota cano médio',
    links: [
      { product: 'Bota tratorada', price: 'R$ 44,95', url: 'https://s.shopee.com.br/2qMr9Eg1xS' }
    ]
  }

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