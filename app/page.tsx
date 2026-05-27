'use client'; // Esta linha avisa ao Next.js que esta página tem interatividade no navegador

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // Função que será executada ao clicar em "Acessar Painel"
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento padrão da página
    
    // Aqui no futuro entrará a verificação de senha no banco de dados.
    // Por enquanto, vamos apenas redirecionar o usuário:
    router.push('/dashboard');
  };

  return (
    <div className="bg-fundoCinza min-h-screen flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <a href="hiagotech.com.br" className="cursor-pointer">
  <h1 className="text-2xl font-bold text-slate-800">HTECH <span className="text-blue-600">T.I.</span></h1>
</a>
          <p className="text-gray-500">Bem-vindo ao Portal do Cliente</p>
        </div>

        {/* Adicionamos o evento onSubmit no formulário */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none transition-all" 
              placeholder="voce@empresa.com.br" 
              required 
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <a href="#" className="text-sm text-azulClaro hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azulClaro focus:border-azulClaro outline-none transition-all" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-azulEscuro text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors shadow-md">
            Acessar Painel
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Ainda não tem conta? <a href="#" className="text-azulClaro font-semibold hover:underline">Solicite acesso</a>
        </div>

      </div>
    </div>
  );
}