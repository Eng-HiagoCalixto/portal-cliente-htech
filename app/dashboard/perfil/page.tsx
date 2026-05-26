export default function Perfil() {
  return (
    <div className="min-h-screen bg-fundoCinza flex flex-col md:flex-row">
      
      {/* Menu Lateral Simplificado para as subpáginas */}
      <aside className="w-full md:w-64 bg-azulEscuro text-white p-6 flex flex-col justify-between">
        <div>
          <div className="text-xl font-bold mb-8">HTECH <span className="text-azulClaro">T.I.</span></div>
          <a href="/dashboard" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white mb-4 transition-colors">
            ← Voltar ao Início
          </a>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Cabeçalho do Perfil */}
          <div className="bg-gradient-to-r from-azulEscuro to-slate-800 p-6 text-white flex flex-col sm:flex-row items-center gap-4 border-b">
            <div className="w-20 h-20 bg-azulClaro rounded-full flex items-center justify-center text-3xl font-bold shadow-md">
              HS
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold">Hiago Silva</h1>
              <p className="text-xs text-slate-300">Cliente desde: Janeiro de 2026 • Plano Ativo: <span className="text-green-400 font-semibold">Premium</span></p>
            </div>
          </div>

          {/* Abas de Configuração (Formulários) */}
          <div className="p-6 md:p-8 space-y-8">
            
            {/* Seção 1: Dados Pessoais / Corporativos */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Dados do Cadastro</h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Nome Completo / Razão Social</label>
                  <input type="text" defaultValue="Hiago Silva" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none text-gray-700" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">CPF / CNPJ</label>
                  <input type="text" defaultValue="000.000.000-00" disabled className="w-full px-4 py-2.5 border border-gray-100 bg-gray-50 rounded-lg text-sm text-gray-400 cursor-not-allowed outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">E-mail de Contato</label>
                  <input type="email" defaultValue="hiago@empresa.com.br" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none text-gray-700" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Telefone / WhatsApp</label>
                  <input type="text" defaultValue="(85) 98888-8888" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none text-gray-700" />
                </div>
                <div className="sm:col-span-2 text-right">
                  <button type="button" className="bg-azulClaro text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
                    Salvar Alterações
                  </button>
                </div>
              </form>
            </div>

            {/* Seção 2: Segurança (Alterar Senha) */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Segurança da Conta</h2>
              <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Senha Atual</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none text-gray-700" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Nova Senha</label>
                  <input type="password" placeholder="Mínimo 8 caracteres" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none text-gray-700" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Confirmar Nova Senha</label>
                  <input type="password" placeholder="Repita a nova senha" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none text-gray-700" />
                </div>
                <div className="sm:col-span-3 text-right">
                  <button type="button" className="bg-azulEscuro text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
                    Atualizar Senha
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}