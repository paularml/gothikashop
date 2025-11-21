import React, { useState, useEffect } from 'react';
import { ExternalLink, ShoppingBag, Sparkles, ArrowLeft, Tag, Menu, X, ChevronDown, ChevronRight, Calculator } from 'lucide-react';
import { categories, featuredProducts, categoryProducts } from './data';

// --- Funções Auxiliares de Preço ---

// Converte string "R$ 89,90" para número 89.90
const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  // Remove "R$", remove pontos de milhar, troca vírgula decimal por ponto
  const cleanStr = priceStr.replace('R$', '').replace(/\./g, '').replace(',', '.').trim();
  return parseFloat(cleanStr) || 0;
};

// Formata número 89.90 para "R$ 89,90"
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// --- Componente Card de Produto ---
const ProductCard = ({ product }) => {
  // Calcula o total do look somando os preços dos links
  const totalPrice = product.links.reduce((acc, link) => acc + parsePrice(link.price), 0);

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ backgroundColor: '#201F26' }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Tag de Destaque (Topo) */}
        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-gray-200 backdrop-blur-sm border border-[#7E2338]">
          <Sparkles className="w-3 h-3 inline mr-1 text-[#8E1B2C]" />
          Destaque
        </div>

        {/* --- NOVO: Total do Look (Base da Imagem) --- */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-3 px-4 flex items-end justify-between">
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                Total do Look
            </div>
            <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-gray-500" />
                <span className="text-xl font-bold text-[#ff4d6d] drop-shadow-md">
                    {formatCurrency(totalPrice)}
                </span>
            </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-1 leading-tight" style={{ color: '#e5e5e5' }}>
          {product.title}
        </h3>
        <p className="text-sm mb-4 font-light opacity-80" style={{ color: '#d1d5db' }}>
          {product.description}
        </p>
        
        <div className="mt-auto space-y-3">
          {product.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-3 rounded-md transition-all duration-200 hover:brightness-110 active:scale-95 group/btn"
              style={{ 
                backgroundColor: '#8E1B2C', 
                color: '#fff',
                border: '1px solid #7E2338'
              }}
            >
              <div className="flex flex-col items-start">
                <span className="text-xs uppercase tracking-wider opacity-90 font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {link.product}
                </span>
                <span className="text-lg font-bold text-white drop-shadow-md">{link.price}</span>
              </div>
              <div className="bg-black/20 p-2 rounded-full group-hover/btn:bg-black/40 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function GothicShop() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSubcategory, setCurrentSubcategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategoryMobile, setExpandedCategoryMobile] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Fecha o menu mobile se a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubcategoryClick = (subcategoryId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('products');
    setCurrentSubcategory(subcategoryId);
    setIsMobileMenuOpen(false);
    setHoveredCategory(null);
  };

  const handleDirectCategoryClick = (categoryId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSubcategory(categoryId);
    setCurrentPage('category'); 
    setIsMobileMenuOpen(false);
    setHoveredCategory(null);
  };

  const goBack = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileCategory = (categoryId) => {
    if (expandedCategoryMobile === categoryId) {
      setExpandedCategoryMobile(null);
    } else {
      setExpandedCategoryMobile(categoryId);
    }
  };

  // --- Renderização do Conteúdo Principal (Home) ---
  const renderHome = () => (
    <main className="w-full animate-fade-in">
       {/* Hero Section */}
       <section 
        className="relative py-20 md:py-32 px-4 w-full overflow-hidden flex items-center justify-center"
        style={{ 
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('img/image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 text-center max-w-3xl mx-auto">
  <h2 
    className="text-5xl md:text-7xl mb-6 text-white tracking-wider drop-shadow-lg"
    style={{ fontFamily: "'Cinzel', serif" }} 
  >
    EXPRESSE SUA <br/>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E1B2C] to-[#ff4d6d]">
      ESCURIDÃO
    </span>
  </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed"
    style={{ fontFamily: "'Cinzel', cursive" }}>
            Moda trevosa selecionada peça por peça.
          </p>
          <button 
            onClick={() => {
                const destaqueElement = document.getElementById('destaques-home');
                destaqueElement?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-[#8E1B2C] text-white font-bold rounded hover:bg-[#a01e32] transition-all shadow-[0_0_20px_rgba(142,27,44,0.5)]"
          >
            Ver Destaques
          </button>
        </div>
      </section>

      {/* Featured Products Grid */}
      <div id="destaques-home" className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-[#8E1B2C]"></div>
          <h2 className="text-3xl font-bold text-center text-[#e5e5e5]">
            Super Gothika
          </h2>
          <div className="h-px w-12 bg-[#8E1B2C]"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );

  // --- Renderização da Lista de Produtos ---
  const renderProducts = () => {
    let products = [];
    
    if (categories[currentSubcategory] && !categories[currentSubcategory].subcategories) {
       if (currentSubcategory === 'destaques') products = featuredProducts;
       else if (categoryProducts[currentSubcategory]) products = categoryProducts[currentSubcategory];
    } else {
       products = categoryProducts[currentSubcategory] || [];
    }

    let pageTitle = "";
    let foundLabel = false;
    Object.values(categories).forEach(cat => {
        if (cat.subcategories) {
            const sub = cat.subcategories.find(s => s.id === currentSubcategory);
            if (sub) {
                pageTitle = sub.label;
                foundLabel = true;
            }
        }
    });
    if (!foundLabel && categories[currentSubcategory]) {
        pageTitle = categories[currentSubcategory].label;
    }

    return (
      <main className="w-full py-12 px-4 min-h-[60vh] animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={goBack}
            className="flex items-center gap-2 mb-8 py-2 px-4 rounded hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Início
          </button>

          <h2 className="text-4xl font-bold mb-12 text-center text-[#e5e5e5]">
            {pageTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-[#201F26] rounded-lg border border-[#7E2338] border-dashed">
                <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-[#8D7E83] opacity-50" />
                <p className="text-xl text-gray-400">
                  Em breve novos produtos nesta categoria
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className="min-h-screen w-full bg-black text-gray-200 flex flex-col font-sans">
      
      {/* --- HEADER --- */}
      <header className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-md z-50 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            <button 
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
            >
                <Menu className="w-7 h-7" />
            </button>

            <button 
              onClick={() => {
                setCurrentPage('home');
                setCurrentSubcategory(null);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <Sparkles className="w-6 h-6 text-[#8E1B2C] group-hover:rotate-12 transition-transform" />
              <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
                GOTHIKA<span className="text-[#8E1B2C]">SHOP</span>
              </h1>
            </button>

            <nav className="hidden md:flex h-full items-center gap-1 ml-8">
                {Object.entries(categories).map(([id, cat]) => (
                    <div 
                        key={id}
                        className="relative h-full flex items-center group"
                        onMouseEnter={() => setHoveredCategory(id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <button 
                            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#8E1B2C] transition-colors flex items-center gap-1 uppercase tracking-wide"
                            onClick={() => {
                                if (!cat.subcategories) handleDirectCategoryClick(id);
                            }}
                        >
                            {cat.label}
                            {cat.subcategories && <ChevronDown className="w-4 h-4 opacity-70" />}
                        </button>

                        {cat.subcategories && hoveredCategory === id && (
                            <div className="absolute top-full left-0 w-56 pt-2 animate-fade-in-up">
                                <div className="bg-[#201F26] border border-[#7E2338] rounded shadow-2xl overflow-hidden">
                                    {cat.subcategories.map((sub) => (
                                        <button
                                            key={sub.id}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSubcategoryClick(sub.id);
                                            }}
                                            className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-[#8E1B2C] hover:text-white transition-colors border-b border-gray-800 last:border-0 flex items-center justify-between group/item"
                                        >
                                            {sub.label}
                                            <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <div className="w-10 flex justify-end">
                <ShoppingBag className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* --- MENU MOBILE --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            <div className="absolute left-0 top-0 h-full w-[80%] max-w-xs bg-[#1a1a1a] border-r border-[#7E2338] shadow-2xl overflow-y-auto transition-transform duration-300">
                <div className="p-5 border-b border-gray-800 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <button onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="w-6 h-6 text-gray-400" />
                    </button>
                </div>

                <div className="py-2">
                    {Object.entries(categories).map(([id, cat]) => (
                        <div key={id} className="border-b border-gray-800 last:border-0">
                            {cat.subcategories ? (
                                <>
                                    <button 
                                        onClick={() => toggleMobileCategory(id)}
                                        className="w-full flex items-center justify-between p-4 text-left text-gray-200 hover:bg-[#252525]"
                                    >
                                        <span className="font-semibold text-lg">{cat.label}</span>
                                        <ChevronDown className={`w-5 h-5 transition-transform ${expandedCategoryMobile === id ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    {expandedCategoryMobile === id && (
                                        <div className="bg-[#0f0f0f] py-2 px-4 space-y-1">
                                            {cat.subcategories.map(sub => (
                                                <button
                                                    key={sub.id}
                                                    onClick={() => handleSubcategoryClick(sub.id)}
                                                    className="w-full text-left py-3 px-2 text-gray-400 hover:text-[#8E1B2C] flex items-center gap-2"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#8E1B2C]"></div>
                                                    {sub.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <button 
                                    onClick={() => handleDirectCategoryClick(id)}
                                    className="w-full flex items-center justify-between p-4 text-left text-gray-200 hover:bg-[#252525]"
                                >
                                    <span className="font-semibold text-lg">{cat.label}</span>
                                    <ChevronRight className="w-5 h-5 text-gray-500" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}

      <div className="flex-grow w-full">
        {currentPage === 'home' && renderHome()}
        {(currentPage === 'products' || currentPage === 'category') && renderProducts()}
      </div>

      <footer className="border-t border-gray-800 py-6 px-4 bg-[#0f0f0f] w-full mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-1 font-medium">
            © 2025 Gothic Style Shop
          </p>
          <p className="text-[10px] text-gray-600 max-w-md mx-auto uppercase tracking-wider">
            Links de afiliado - Apoie nosso trabalho sem custo extra.
          </p>
        </div>
      </footer>
    </div>
  );
}