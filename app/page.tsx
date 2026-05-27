'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from './supabase'; 

export default function Home() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setErro('');
    setCarregando(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    setCarregando(false);

    if (error) {
      setErro('E-mail ou senha incorretos.');
      return;
    }

    router.push('/dashboard');
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <a href="https://hiagotech.com.br" className="cursor-pointer">
            <h1 className="text-2xl font-bold text-slate-800">HTECH <span className="text-blue-600">T.I.</span></h1>
          </a>
          <p className="text-gray-500 mt-2">Welcome back to Customer Portal</p>
        </div>

        {erro && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center font-medium mb-4 border border-red-200">
            {erro}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900" 
              placeholder="voce@empresa.com.br" 
              required 
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            <input 
              type="password" 
              id="password" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={carregando}
            className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors shadow-md disabled:opacity-50">
            {carregando ? 'Verificando...' : 'Acessar Painel'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Ainda não tem conta? <a href="#" className="text-blue-600 font-semibold hover:underline">Solicite acesso</a>
        </div>

      </div>
    </div>
  );
}