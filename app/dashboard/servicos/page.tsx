import Link from 'next/link';

export default function ServicosEspecializados() {
  return (
    <div className="min-h-screen bg-fundoCinza flex flex-col md:flex-row">
      
      {/* ==========================================
          MENU LATERAL (SIDEBAR SIMPLIFICADO)
          ========================================== */}
      <aside className="w-full md:w-64 bg-azulEscuro text-white p-6 flex flex-col border-r border-slate-800">
        <div>
          <div className="text-xl font-bold mb-8">
            HTTECH <span className="text-azulClaro">T.I.</span>
          </div>
          <Link href="/dashboard" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Voltar ao Painel
          </Link>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Navegação Rápida</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="#planos" className="hover:text-azulClaro transition-colors block">📦 Planos Mensais</a></li>
            <li><a href="#demanda" className="hover:text-purple-400 transition-colors block">💻 Projetos Sob Demanda</a></li>
          </ul>
        </div>
      </aside>

      {/* ==========================================
          CONTEÚDO PRINCIPAL
          ========================================== */}
      <main className="flex-1 overflow-y-auto h-screen p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Cabeçalho */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Serviços Especializados</h1>
            <p className="text-sm text-gray-500">Soluções completas em infraestrutura de rede, suporte técnico e desenvolvimento de software.</p>
          </div>

          {/* ==========================================
              SEÇÃO 1: PLANOS MENAIS (SUDECORRENTE)
              ========================================== */}
          <section id="planos" className="scroll-mt-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="p-1.5 bg-blue-50 text-azulClaro rounded-lg">🛡️</span> 
                Planos de Suporte Mensal (PME)
              </h2>
              <p className="text-xs text-gray-400 mt-1">Garanta tranquilidade para sua empresa com suporte técnico preventivo e corretivo ilimitado.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PLANO 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">HTECH Start</h3>
                      <p className="text-xs text-gray-500">Ideal para escritórios e comércios locais</p>
                    </div>
                    <span className="bg-blue-50 text-azulClaro text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Até 5 Computadores</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-600 mb-6">
                    <li className="flex items-center gap-2">✓ Suporte remoto ilimitado</li>
                    <li className="flex items-center gap-2">✓ Visita presencial corretiva (se necessário)</li>
                    <li className="flex items-center gap-2">✓ Configuração de rede e Wi-Fi inclusa</li>
                    <li className="flex items-center gap-2">✓ Backup em nuvem monitorado</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-sm text-gray-400 font-normal">A partir de</span>
                    <p className="text-2xl font-extrabold text-azulEscuro">R$ 299<span className="text-xs text-gray-500 font-normal">/mês</span></p>
                  </div>
                  <button className="bg-azulEscuro text-white text-xs font-bold py-2.5 px-4 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
                    Solicitar Proposta
                  </button>
                </div>
              </div>

              {/* PLANO 2 */}
              <div className="bg-white rounded-2xl border-2 border-azulClaro p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-azulClaro text-white text-[9px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                  Mais Contratado
                </div>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">HTECH Premium</h3>
                      <p className="text-xs text-gray-500">Para empresas que não podem parar</p>
                    </div>
                    <span className="bg-blue-100 text-azulClaro text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Até 15 Computadores</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-600 mb-6">
                    <li className="flex items-center gap-2 font-medium text-azulEscuro">✓ Tudo do plano Start +</li>
                    <li className="flex items-center gap-2">✓ Atendimento prioritário em até 2 horas</li>
                    <li className="flex items-center gap-2">✓ Manutenção preventiva mensal (limpeza física)</li>
                    <li className="flex items-center gap-2">✓ Monitoramento de segurança em tempo real</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-sm text-gray-400 font-normal">A partir de</span>
                    <p className="text-2xl font-extrabold text-azulClaro">R$ 599<span className="text-xs text-gray-400 font-normal">/mês</span></p>
                  </div>
                  <button className="bg-azulClaro text-white text-xs font-bold py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
                    Contratar Plano
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              SEÇÃO 2: PROJETOS SOB DEMANDA
              ========================================== */}
          <section id="demanda" className="scroll-mt-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="p-1.5 bg-purple-50 text-purple-500 rounded-lg">💻</span> 
                Projetos Sob Demanda (Frontend & Backend)
              </h2>
              <p className="text-xs text-gray-400 mt-1">Desenvolvimento de software sob medida e projetos estruturados de redes corporativas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* SERVIÇO 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mb-4 font-bold">🗂️</div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Criação de Sites & Landing Pages</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-4">Desenvolvimento frontend moderno com Tailwind CSS e Next.js. Sites rápidos, otimizados para o Google e focados em vendas.</p>
                </div>
                <button className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold py-2 rounded-lg hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all">
                  Solicitar Orçamento
                </button>
              </div>

              {/* SERVIÇO 2 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mb-4 font-bold">⚙️</div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Sistemas & APIs (Backend)</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-4">Desenvolvimento de regras de negócio, integração com bancos de dados (SQL/NoSQL) e criação de APIs seguras em Node.js.</p>
                </div>
                <button className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold py-2 rounded-lg hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all">
                  Solicitar Orçamento
                </button>
              </div>

              {/* SERVIÇO 3 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mb-4 font-bold">🌐</div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Infraestrutura & Redes</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-4">Montagem de racks, cabeamento estruturado Cat6, instalação de roteadores corporativos e segurança de redes locais.</p>
                </div>
                <button className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold py-2 rounded-lg hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all">
                  Falar com Especialista
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}