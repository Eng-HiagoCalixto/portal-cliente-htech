import Link from 'next/link';

export default function Financeiro() {
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
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Resumo Financeiro</h3>
          <div className="space-y-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
            <div>
              <p className="text-[11px] text-slate-400">Total em Aberto</p>
              <p className="text-lg font-bold text-white">R$ 0,00</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Próximo Vencimento</p>
              <p className="text-xs font-semibold text-green-400">Tudo em dia!</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ==========================================
          CONTEÚDO PRINCIPAL
          ========================================== */}
      <main className="flex-1 overflow-y-auto h-screen p-6 md:p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Cabeçalho */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Faturas e Financeiro</h1>
            <p className="text-sm text-gray-500">Gerencie seus pagamentos, acesse segundas vias e confira seu histórico financeiro.</p>
          </div>

          {/* ==========================================
              COBRANÇAS EM ABERTO / PENDENTES
              ========================================== */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="p-1.5 bg-red-50 text-red-500 rounded-lg">⚠️</span> 
              Aguardando Pagamento
            </h2>
            
            {/* Exemplo de nenhuma fatura pendente (Cenário ideal do cliente) */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                ✓
              </div>
              <h3 className="font-bold text-gray-800 text-sm">Parabéns! Nenhuma fatura pendente.</h3>
              <p className="text-xs text-gray-400 mt-1">Todos os seus serviços contratados com a HTECH estão com os pagamentos em dia.</p>
            </div>
          </section>

          {/* ==========================================
              HISTÓRICO DE FATURAS PAGAS
              ========================================== */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="p-1.5 bg-green-50 text-green-500 rounded-lg">📋</span> 
              Histórico de Pagamentos
            </h2>

            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                      <th className="px-6 py-4 font-medium">Fatura ID</th>
                      <th className="px-6 py-4 font-medium">Referente a</th>
                      <th className="px-6 py-4 font-medium">Vencimento</th>
                      <th className="px-6 py-4 font-medium">Valor</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    
                    {/* Fatura 1 */}
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">#FAT-1052</td>
                      <td className="px-6 py-4">
                        <p className="font-medium">Mensalidade HTECH Premium</p>
                        <p className="text-xs text-gray-500">Suporte Técnico Corporativo</p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">10 Mai 2026</td>
                      <td className="px-6 py-4 font-medium">R$ 599,00</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                          Pago via PIX
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-xs text-azulClaro font-semibold hover:underline bg-blue-50 hover:bg-blue-100/70 px-3 py-1.5 rounded-lg transition-colors">
                          Recibo (PDF)
                        </button>
                      </td>
                    </tr>

                    {/* Fatura 2 */}
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">#FAT-0985</td>
                      <td className="px-6 py-4">
                        <p className="font-medium">Compra de Equipamento</p>
                        <p className="text-xs text-gray-500">1x Roteador Wi-Fi 6 Gigabit</p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">22 Abr 2026</td>
                      <td className="px-6 py-4 font-medium">R$ 459,90</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                          Pago
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-xs text-azulClaro font-semibold hover:underline bg-blue-50 hover:bg-blue-100/70 px-3 py-1.5 rounded-lg transition-colors">
                          Recibo (PDF)
                        </button>
                      </td>
                    </tr>

                    {/* Fatura 3 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">#FAT-0814</td>
                      <td className="px-6 py-4">
                        <p className="font-medium">Sinal de Projeto Software</p>
                        <p className="text-xs text-gray-500">Desenvolvimento de Landing Page</p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">15 Mar 2026</td>
                      <td className="px-6 py-4 font-medium">R$ 600,00</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                          Pago
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-xs text-azulClaro font-semibold hover:underline bg-blue-50 hover:bg-blue-100/70 px-3 py-1.5 rounded-lg transition-colors">
                          Recibo (PDF)
                        </button>
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