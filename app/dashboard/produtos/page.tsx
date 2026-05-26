import Link from 'next/link';

export default function LojaProdutos() {
  return (
    <div className="min-h-screen bg-fundoCinza flex flex-col md:flex-row">
      
      {/* ==========================================
          MENU LATERAL (SIDEBAR SIMPLIFICADO)
          ========================================== */}
      <aside className="w-full md:w-64 bg-azulEscuro text-white p-6 flex flex-col border-r border-slate-800">
        <div>
          <div className="text-xl font-bold mb-8">
            HTECH <span className="text-azulClaro">T.I.</span>
          </div>
          <Link href="/dashboard" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Voltar ao Painel
          </Link>
        </div>
        
        {/* Filtros Simples na Lateral */}
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Categorias</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
              <span>Todos os Produtos</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs">12</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer text-azulClaro font-medium">
              <span>Equipamentos de Rede</span>
              <span className="bg-azulClaro/20 text-azulClaro px-2 py-0.5 rounded-full text-xs">4</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
              <span>Hardware & Peças</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs">5</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
              <span>Licenças de Software</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs">3</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* ==========================================
          CONTEÚDO PRINCIPAL (CATÁLOGO)
          ========================================== */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Cabeçalho da Loja */}
        <header className="bg-white p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Loja de Equipamentos</h1>
            <p className="text-sm text-gray-500">Adquira hardware e licenças com garantia HTECH.</p>
          </div>
          
          {/* Barra de Pesquisa e Carrinho */}
          <div className="flex items-center gap-4">
            <div className="relative w-full sm:w-64">
              <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" placeholder="Buscar produtos..." className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none" />
            </div>
            <button className="relative p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span className="absolute -top-2 -right-2 bg-azulClaro text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </header>

        {/* Grid de Produtos */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            
            {/* PRODUTO 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
              {/* Espaço da Imagem (Placeholder ilustrativo) */}
              <div className="h-48 bg-gray-50 border-b border-gray-100 flex items-center justify-center p-6 group-hover:bg-blue-50/50 transition-colors">
                <svg className="w-24 h-24 text-blue-300 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              {/* Informações */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">Roteador Wi-Fi 6 Gigabit Dual Band</h3>
                  <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide">Em Estoque</span>
                </div>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2">Alcance estendido e velocidade extrema para empresas. Suporta até 128 dispositivos simultâneos com estabilidade.</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-azulEscuro">R$ 459<span className="text-sm text-gray-500 font-normal">,90</span></span>
                  <button className="bg-azulClaro text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUTO 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
              <div className="h-48 bg-gray-50 border-b border-gray-100 flex items-center justify-center p-6 group-hover:bg-slate-100 transition-colors">
                <svg className="w-24 h-24 text-slate-300 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">SSD NVMe 1TB Alta Performance</h3>
                  <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide">Em Estoque</span>
                </div>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2">Dê uma nova vida ao seu computador. Velocidade de leitura de até 3500MB/s. Instalação inclusa para clientes locais.</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-azulEscuro">R$ 389<span className="text-sm text-gray-500 font-normal">,00</span></span>
                  <button className="bg-azulClaro text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUTO 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
              <div className="h-48 bg-gray-50 border-b border-gray-100 flex items-center justify-center p-6 group-hover:bg-purple-50 transition-colors">
                <svg className="w-24 h-24 text-purple-300 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">Licença Antivírus Corporativo (1 Ano)</h3>
                  <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide">Digital</span>
                </div>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2">Proteção avançada contra Ransomware e ameaças online. Licença válida para 1 dispositivo (PC ou Mac).</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-azulEscuro">R$ 119<span className="text-sm text-gray-500 font-normal">,90</span></span>
                  <button className="bg-azulEscuro text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
                    Assinar
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}