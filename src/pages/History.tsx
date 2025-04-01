import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Boxes,
  Trophy,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

export function History() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Boxes className="w-10 h-10 text-white mr-3" strokeWidth={1.5} />
              <span className="text-xl font-bold text-white">FSoluções</span>
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-white flex items-center hover:text-blue-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Nossa História
        </h1>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Lightbulb className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                O Início (2017)
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A FSoluções nasceu da visão de transformar a maneira como as
                empresas lidam com tecnologia. Começamos como uma pequena
                consultoria, mas com grandes ambições de criar soluções
                inovadoras que realmente fizessem a diferença no mercado.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Trophy className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Crescimento e Reconhecimento (2018-2020)
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nos primeiros anos, conquistamos a confiança de grandes empresas
                através de nossa dedicação à excelência e compromisso com
                resultados. Nossa expertise em desenvolvimento de software e
                automação de processos nos permitiu expandir rapidamente,
                tornando-nos referência no mercado.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Expansão e Inovação (2020-2024)
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Com o crescimento da demanda por transformação digital,
                expandimos nossa equipe e portfólio de serviços. Investimos
                fortemente em RPAs e integrações via API, ajudando empresas a
                automatizar processos e aumentar sua eficiência operacional.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Target className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Presente e Futuro
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Hoje, a FSoluções é reconhecida como uma das principais empresas
                de tecnologia do Rio de Janeiro. Continuamos investindo em
                inovação e no desenvolvimento de soluções que ajudam nossos
                clientes a enfrentar os desafios do mundo digital. Nossa missão
                permanece a mesma: transformar ideias em soluções digitais
                inovadoras que impulsionam o sucesso dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Boxes className="w-8 h-8 text-white mr-2" strokeWidth={1.5} />
            <span className="text-xl font-bold">FSoluções</span>
          </div>
          <p>© 2025 FSoluções. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
