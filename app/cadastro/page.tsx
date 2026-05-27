'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../supabase';

export default function Cadastro() {
  const router = useRouter();
  
  // Estados do formulário
  const [tipoPerfil, setTipoPerfil] = useState<'PF' | 'PJ'>('PF');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [documento, setDocumento] = useState(''); // CPF ou CNPJ
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');
    setCarregando(true);

    // 1. Cadastra o usuário no sistema de Autenticação do Supabase
    const { data, error: authError } = await supabase.auth.signUp({
      email: email,
      password: senha,
      options: {
        // Guardamos o Nome, Tipo (PF/PJ) e o CPF/CNPJ nos metadados do usuário
        data: {
          full_name: nome,
          tipo_perfil: tipoPerfil,
          documento: documento,
        }
      }
    });

    setCarregando(false);

    if (authError) {
      setErro(authError.message === 'User already registered' 
        ? 'Este e-mail já está cadastrado.' 
        : 'Erro ao criar conta. Tente novamente.');
      return;
    }

    setSucesso('Conta solicitada com sucesso! Redirecionando...');
    
    // Aguarda 2 segundos e joga o usuário para o painel ou tela de aviso
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">HTECH <span className="text-blue-600">T.I.</span></h1>
          <p className="text-gray-500 mt-2">Solicitar Acesso ao Portal</p>
        </div>

        {/* Chave Seletora: PF ou PJ */}
        <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
          <button
            type="button"
            onClick={() => { setTipoPerfil('PF'); setDocumento(''); }}
            className={`w-1/2 py-2 text-sm font-semibold rounded-md transition-all ${tipoPerfil === 'PF' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-slate-800'}`}
          >
            Pessoa Física (PF)
          </button>
          <button
            type="button"
            onClick={() => { setTipoPerfil('PJ'); setDocumento(''); }}
            className={`w-1/2 py-2 text-sm font-semibold rounded-md transition-all ${tipoPerfil === 'PJ' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-slate-800'}`}
          >
            Empresa (PJ)
          </button>
        </div>

        {erro && <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center font-medium mb-4 border border-red-200">{erro}</div>}
        {sucesso && <div className="bg-green-50 text-green-600 text-sm p-3 rounded-lg text-center font-medium mb-4 border border-green-200">{sucesso}</div>}

        <form onSubmit={handleCadastro} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {tipoPerfil === 'PF' ? 'Nome Completo' : 'Razão Social / Nome da Empresa'}
            </label>
            <input 
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900" 
              placeholder={tipoPerfil === 'PF' ? 'Seu nome' : 'Sua Empresa LTDA'} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {tipoPerfil === 'PF' ? 'CPF' : 'CNPJ'}
            </label>
            <input 
              type="text" 
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900" 
              placeholder={tipoPerfil === 'PF' ? '000.000.000-00' : '00.000.000/0001-00'} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900" 
              placeholder="cliente@email.com.br" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha de Acesso</label>
            <input 
              type="password" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={carregando}
            className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors shadow-md disabled:opacity-50 mt-2">
            {carregando ? 'Processando...' : tipoPerfil === 'PF' ? 'Criar Minha Conta' : 'Solicitar Acesso PJ'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Já tem conta? <a href="/" className="text-blue-600 font-semibold hover:underline">Fazer Login</a>
        </div>

      </div>
    </div>
  );
}