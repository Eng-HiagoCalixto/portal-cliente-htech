import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-fundoCinza flex">
      
      {/* ==========================================
          MENU LATERAL (SIDEBAR)
          ========================================== */}
      <aside className="w-64 bg-azulEscuro text-white flex flex-col hidden md:flex border-r border-slate-800">
        <div className="p-6 text-2xl font-bold border-b border-slate-700">
          HTECH <span className="text-azulClaro">T.I.</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 bg-slate-800/50 py-3 px-4 rounded-lg font-medium text-white border-l-4 border-azulClaro">
            🏠 Início
          </Link>
          <Link href="/dashboard/perfil" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
            ⚙️ Meu Perfil
          </Link>
          <Link href="/dashboard/servicos" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
            💻 Serviços Especializados
          </Link>
          <Link href="/dashboard/produtos" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
            🛒 Loja de Produtos
          </Link>
          <Link href="/dashboard/pedidos" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
            📦 Meus Pedidos
          </Link>
          <Link href="/dashboard/financeiro" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
            💳 Faturas e Cobranças
          </Link>
          <Link href="/dashboard/ajuda" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
            ❓ Central de Ajuda
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <Link href="/" className="flex items-center gap-3 py-2 px-4 text-slate-400 hover:text-red-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Sair do Sistema
          </Link>
        </div>
      </aside>

      {/* ==========================================
          CONTEÚDO PRINCIPAL
          ========================================== */}
      <main className="flex-1 flex flex-col">
        
        {/* Cabeçalho superior */}
        <header className="bg-white h-20 px-8 flex items-center justify-between border-b border-gray-200">
          <div>
            <span className="text-gray-500 text-sm">Olá, bem-vindo de volta!</span>
            <h1 className="text-xl font-bold text-gray-800">Painel do Cliente</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">Hiago Silva</p>
              <p className="text-xs text-gray-500">ID: #4092</p>
            </div>
            
            {/* O avatar agora é um Link funcional para a página de perfil */}
            <Link href="/dashboard/perfil" title="Acessar Meu Perfil">
              <div className="w-10 h-10 bg-gradient-to-r from-azulClaro to-azulEscuro rounded-full flex items-center justify-center text-white font-bold shadow-md cursor-pointer hover:opacity-80 transition-opacity">
                H
              </div>
            </Link>
          </div>
        </header>

        {/* Área Central com os Botões de Atalho */}
        <div className="p-8 overflow-y-auto max-w-6xl w-full mx-auto">
          
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">O que você deseja fazer hoje?</h2>
            <p className="text-sm text-gray-500">Selecione uma das áreas abaixo para gerenciar seus serviços ou realizar compras.</p>
          </div>

          {/* Grid de Botões/Cards Principais transformados em Links de roteamento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* CARD 1: ÁREA DE PRODUTOS */}
            <Link href="/dashboard/produtos" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col text-left transition-all duration-300 hover:shadow-md hover:-translate-y-1 group block">
              <div className="p-3 bg-blue-50 text-azulClaro rounded-xl mb-4 group-hover:bg-azulClaro group-hover:text-white transition-colors w-max">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">Loja de Produtos</h3>
              <p className="text-xs text-gray-500 flex-1">Adquira computadores, roteadores e licenças de software direto com nossa equipe.</p>
              <span className="text-xs text-azulClaro font-semibold mt-4 flex items-center gap-1 group-hover:underline">Acessar Loja →</span>
            </Link>

            {/* CARD 2: SERVIÇOS ESPECIALIZADOS */}
            <Link href="/dashboard/servicos" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col text-left transition-all duration-300 hover:shadow-md hover:-translate-y-1 group block">
              <div className="p-3 bg-purple-50 text-purple-500 rounded-xl mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors w-max">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">Serviços Especializados</h3>
              <p className="text-xs text-gray-500 flex-1">Contrate soluções de desenvolvimento Frontend, Backend ou suporte de infraestrutura.</p>
              <span className="text-xs text-purple-500 font-semibold mt-4 flex items-center gap-1 group-hover:underline">Ver Serviços →</span>
            </Link>

            {/* CARD 3: MEUS PEDIDOS */}
            <Link href="/dashboard/pedidos" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col text-left transition-all duration-300 hover:shadow-md hover:-translate-y-1 group block">
              <div className="p-3 bg-green-50 text-green-500 rounded-xl mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors w-max">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">Meus Pedidos</h3>
              <p className="text-xs text-gray-500 flex-1">Acompanhe o andamento das suas compras, projetos ativos ou ordens de serviço em execução.</p>
              <span className="text-xs text-green-500 font-semibold mt-4 flex items-center gap-1 group-hover:underline">Ver Histórico →</span>
            </Link>

            {/* CARD 4: FATURAS */}
            <Link href="/dashboard/financeiro" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col text-left transition-all duration-300 hover:shadow-md hover:-translate-y-1 group block">
              <div className="p-3 bg-amber-50 text-amber-500 rounded-xl mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors w-max">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">Faturas e Financeiro</h3>
              <p className="text-xs text-gray-500 flex-1">Acesse boletos, segundas vias de faturas, comprovantes e histórico de pagamentos.</p>
              <span className="text-xs text-amber-500 font-semibold mt-4 flex items-center gap-1 group-hover:underline">Gerenciar Faturas →</span>
            </Link>

            {/* CARD 5: ABA DE AJUDA */}
            <Link href="/dashboard/ajuda" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col text-left transition-all duration-300 hover:shadow-md hover:-translate-y-1 group block">
              <div className="p-3 bg-teal-50 text-teal-500 rounded-xl mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors w-max">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">Central de Ajuda</h3>
              <p className="text-xs text-gray-500 flex-1">Abra chamados de suporte técnico, tire dúvidas e fale diretamente com nossos especialistas.</p>
              <span className="text-xs text-teal-500 font-semibold mt-4 flex items-center gap-1 group-hover:underline">Abrir Suporte →</span>
            </Link>

          </div>

        </div>
      </main>

    </div>
  );
}