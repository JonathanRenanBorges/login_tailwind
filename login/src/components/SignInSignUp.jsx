import React, { useState } from "react";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-linear-135
    from-[#070c38] via-[#070c38] to-[#080c39]  p-8 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-[10%] left-[15%] w-72 h-72
            rounded-full bg-radial from-[#f77a28]/50 to-transparent blur-3xl
            animate-pulse-slow animation-delay-2000"
        ></div>
        <div
          className="absolute bottom-[20%] right-[10%] w-72 h-72
            rounded-full bg-radial from-[#f77a28]/50  to-transparent blur-3xl
            animate-pulse-slow animation-delay-2000"
        ></div>
      </div>
      <div
        className="@container max-w-md w-full p-8 bg-[#050825]/30 
        rounded-2xl shadow-[#080c39] backdrop-blur-xl border
        border-[#060a2f]/50 relative animate-fade-in"
      >
        <div
          className="absolute inset-0 bg-gradient-t-br from-[#050825]/20
            to-transparent rounded-2xl"
        ></div>
        <div className="relative">
          <img
            src="./src/images/logo.jpg"
            alt="Logo"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h2
            className="text-3xl font-extrabold text-[#f77a28] text-center
                mb-2 tracking-tight"
          >
            {isSignUp ? "Criar Conta" : "Bem-vindo de volta!"}
          </h2>
          <p className="text-blue-200 text-center mb-8">
            {isSignUp
              ? "Entre para nossa comunidade hoje"
              : "Entre na sua conta"}
          </p>
          <form className="mt-8 space-y-5 perspective-1000">
            {isSignUp && (
              <>
                <div className="group">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="
                        w-full p-4 bg-[#d8d4d4] rounded-xl border 
                        border-blue-950/50 text-black
                        placeholder-[gray] outline-none focus:ring-2 
                        focus:ring-[#f77a28]/50 focus:border-transparent 
                        transition-all"
                  />
                </div>
                <div className="group">
                  <input
                    type="number"
                    placeholder="Telefone"
                    className="
                w-full p-4 bg-[#d8d4d4] rounded-xl border 
                        border-blue-950/50 text-black
                        placeholder-[gray] outline-none focus:ring-2 
                        focus:ring-[#f77a28]/50 focus:border-transparent 
                        transition-all"
                  />
                </div>
              </>
            )}

            <div className="group">
              <input
                type="email"
                placeholder="Email"
                className="
                        w-full p-4 bg-[#d8d4d4] rounded-xl border 
                        border-blue-950/50 text-black
                        placeholder-[gray] outline-none focus:ring-2 
                        focus:ring-[#f77a28]/50 focus:border-transparent 
                        transition-all"
              />
            </div>

            <div className="group">
              <input
                type="password"
                placeholder="Senha"
                className="
                        w-full p-4 bg-[#d8d4d4] rounded-xl border 
                        border-blue-950/50 text-black
                        placeholder-[gray] outline-none focus:ring-2 
                        focus:ring-[#f77a28]/50 focus:border-transparent 
                        transition-all"
              />
            </div>

            <button
              className="group w-full p-4 bg-gradient-to-r from-[#f77a28] 
                    to-[#f77b28d3] text-blue-200 rounded-xl font-bold shadow-lg
                    hover:shadow-[#f77b28d3]/40 overflow-hidden transform transform-style-3d
                    hover:-translate-y-.5 hover:scale-105 hover:translate-z-20 
                    transition-all duration-300"
            >
              <span className="relative z-10 pointer-events-none cursor-pointer">
                {isSignUp ? "Criar Conta" : "Entrar"}
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r
                        from-[#f77a28] to-[#f77b28d3] opacity-0 group-hover:opacity-100 
                        transition-opacity pointer-events-none"
              ></span>
            </button>
          </form>
          <p className="mt-8 text-blue-200/80 text-center">
            {isSignUp ? "Já tem uma conta?" : "Não tem uma conta ainda?"}
            <span
              className="text-[#f77a28] font-bold cursor-pointer hover:text-[#f77b28b6]
                ml-1 transition-colors"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Entrar" : "Criar"}
            </span>
          </p>
          <div className="mt-3 pt-6 border-t border-blue-800/30">
            <p className="text-blue-200/70 text-center text-sm mb-4">
              Ou continue com
            </p>
            <div className="flex justify-center space-x-6">
              <button
                className="p-3 bg-[#070c38] rounded-lg hover:bg-[#080c39]
                    transition-colors text-[#d8d4d4] hover:text-[#f77a28]"
              >
                <i className="bx bxl-google text-2xl"></i>
              </button>
              <button
                className="p-3 bg-[#070c38] rounded-lg hover:bg-[#080c39]
                    transition-colors text-[#d8d4d4] hover:text-[#f77a28]"
              >
                <i className="bx bxl-linkedin text-2xl"></i>
              </button>
              <button
                className="p-3 bg-[#070c38] rounded-lg hover:bg-[#080c39]
                    transition-colors text-[#d8d4d4] hover:text-[#f77a28]"
              >
                <i className="bx bxl-facebook text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
