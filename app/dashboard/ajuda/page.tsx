import Link from 'next/link';

export default function CentralAjuda() {
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
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Canais de Atendimento</h3>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <span className="text-azulClaro mt-0.5">📞</span>
              <div>
                <p className="font-semibold text-white">Suporte Emergencial</p>
                <p className="text-xs">(85) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-azulClaro mt-0.5">✉️</span>
              <div>
                <p className="font-semibold text-white">E-mail Corporativo</p>
                <p className="text-xs">suporte@htech.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pt-4 border-t border-slate-700/50">
              <span className="text-green-400 mt-0.5">🕒</span>
              <div>
                <p className="font-semibold text-white">Horário Comercial</p>
                <p className="text-xs">Seg a Sex, 08h às 18h</p>
              </div>
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
            <h1 className="text-2xl font-bold text-gray-800">Central de Ajuda e Suporte</h1>
            <p className="text-sm text-gray-500">Abra um chamado técnico ou acompanhe o status das suas solicitações.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* COLUNA ESQUERDA: FORMULÁRIO DE NOVO CHAMADO */}
            <section className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h2 className="text-base font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">Novo Chamado</h2>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Categoria do Problema</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro outline-none text-gray-700 bg-white">
                      <option>Problema com Internet / Rede</option>
                      <option>Equipamento com defeito (Hardware)</option>
                      <option>Dúvida sobre Sistema / Software</option>
                      <option>Faturas e Financeiro</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Assunto Breve</label>
                    <input type="text" placeholder="Ex: Computador não liga" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro outline-none text-gray-700" />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Descrição Detalhada</label>
                    <textarea rows={4} placeholder="Explique o que está acontecendo..." className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-azulClaro outline-none text-gray-700 resize-none"></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Nível de Urgência</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1.5 text-xs text-gray-600 cursor-pointer">
                        <input type="radio" name="urgencia" defaultChecked className="text-azulClaro focus:ring-azulClaro" /> Normal
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-red-500 font-semibold cursor-pointer">
                        <input type="radio" name="urgencia" className="text-red-500 focus:ring-red-500" /> Alta (Parou tudo)
                      </label>
                    </div>
                  </div>

                  <button type="button" className="w-full bg-azulClaro text-white text-sm font-bold py-2.5 rounded-lg hover:bg-blue-600 transition-colors shadow-sm mt-2">
                    Abrir Chamado
                  </button>
                </form>
              </div>
            </section>

            {/* COLUNA DIREITA: HISTÓRICO DE CHAMADOS */}
            <section className="lg:col-span-2">
              <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="p-1.5 bg-teal-50 text-teal-500 rounded-lg">🎫</span> 
                Meus Chamados Recentes
              </h2>

              <div className="space-y-4">
                
                {/* Chamado 1 (Aberto / Urgente) */}
                <div className="bg-white rounded-xl border border-red-100 p-5 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-red-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-gray-400">#TK-1089</span>
                        <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Alta Urgência</span>
                      </div>
                      <h3 className="font-bold text-gray-800">Servidor principal fora do ar</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-100 text-amber-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      Em Análise
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">Ninguém no escritório está conseguindo acessar as pastas da rede desde as 08h da manhã. Precisamos de urgência.</p>
                  <div className="flex justify-between items-center text-[11px] text-gray-400 border-t border-gray-50 pt-3">
                    <span>Aberto hoje às 08:15</span>
                    <button className="text-azulClaro font-semibold hover:underline">Ver interações (1)</button>
                  </div>
                </div>

                {/* Chamado 2 (Resolvido) */}
                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-gray-400">#TK-1045</span>
                        <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Normal</span>
                      </div>
                      <h3 className="font-bold text-gray-800 line-through text-gray-500">Instalação de impressora nova</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                      Resolvido
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2">Compramos uma impressora nova para o setor financeiro e precisamos instalar na rede.</p>
                  <div className="flex justify-between items-center text-[11px] text-gray-400 border-t border-gray-50 pt-3">
                    <span>Aberto em 20 Mai 2026</span>
                    <button className="text-gray-500 font-semibold hover:text-azulClaro transition-colors">Ver histórico</button>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </main>

    </div>
  );
}