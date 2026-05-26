import Link from 'next/link';

export default function MeusPedidos() {
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
        
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Filtros de Status</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center justify-between cursor-pointer text-azulClaro font-medium">
              <span>Em Andamento</span>
              <span className="bg-azulClaro/20 text-azulClaro px-2 py-0.5 rounded-full text-xs">2</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
              <span>Concluídos / Entregues</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs">8</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
              <span>Cancelados</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs">0</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* ==========================================
          CONTEÚDO PRINCIPAL
          ========================================== */}
      <main className="flex-1 overflow-y-auto h-screen p-6 md:p-8">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Cabeçalho */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Meus Pedidos e Projetos</h1>
            <p className="text-sm text-gray-500">Acompanhe o status das suas compras e o desenvolvimento dos seus sistemas.</p>
          </div>

          {/* ==========================================
              SEÇÃO 1: PROJETOS DE SOFTWARE/INFRA
              ========================================== */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="p-1.5 bg-purple-50 text-purple-500 rounded-lg">🚀</span> 
              Projetos em Andamento
            </h2>
            
            <div className="space-y-4">
              {/* Card de Projeto 1 */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-gray-800">Desenvolvimento de Landing Page</h3>
                      <span className="bg-blue-50 text-azulClaro text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Frontend</span>
                    </div>
                    <p className="text-xs text-gray-500">Pedido #PRJ-9021 • Contratado em 15/05/2026</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">Fase Atual:</p>
                    <p className="text-xs text-azulClaro font-semibold">Codificação (Next.js + Tailwind)</p>
                  </div>
                </div>
                
                {/* Barra de Progresso */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-600">Progresso do Projeto</span>
                    <span className="font-bold text-azulEscuro">65%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-azulClaro h-2.5 rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                    <span>Briefing e Design (Concluído)</span>
                    <span>Entrega Prevista: 30/05/2026</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              SEÇÃO 2: COMPRAS DA LOJA (EQUIPAMENTOS)
              ========================================== */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="p-1.5 bg-blue-50 text-azulClaro rounded-lg">📦</span> 
              Histórico de Compras (Loja)
            </h2>

            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                      <th className="px-6 py-4 font-medium">Pedido</th>
                      <th className="px-6 py-4 font-medium">Itens</th>
                      <th className="px-6 py-4 font-medium">Data</th>
                      <th className="px-6 py-4 font-medium">Valor Total</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    
                    {/* Linha 1 */}
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">#LOJA-442</td>
                      <td className="px-6 py-4">
                        <p className="font-medium">1x Roteador Wi-Fi 6 Gigabit</p>
                        <p className="text-xs text-gray-500">+ Configuração no local</p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">22 Mai 2026</td>
                      <td className="px-6 py-4 font-medium">R$ 459,90</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-100 text-amber-700 flex items-center w-max gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                          Em Separação
                        </span>
                      </td>
                    </tr>

                    {/* Linha 2 */}
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">#LOJA-310</td>
                      <td className="px-6 py-4">
                        <p className="font-medium">2x SSD NVMe 1TB</p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">10 Abr 2026</td>
                      <td className="px-6 py-4 font-medium">R$ 778,00</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                          Entregue
                        </span>
                      </td>
                    </tr>

                    {/* Linha 3 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">#LOJA-285</td>
                      <td className="px-6 py-4">
                        <p className="font-medium">1x Licença Antivírus Corporativo</p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">05 Mar 2026</td>
                      <td className="px-6 py-4 font-medium">R$ 119,90</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-blue-100 text-blue-700">
                          Ativo (Digital)
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}