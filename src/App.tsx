import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Building2,
  Code2,
  Bot,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Boxes,
} from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { History } from "./pages/History";

function HomePage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center mb-12">
            <div className="flex items-center">
              <Boxes className="w-12 h-12 text-white mr-3" strokeWidth={1.5} />
              <span className="text-2xl font-bold text-white">FSoluções</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                FSoluções
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transformando ideias em soluções digitais inovadoras para o seu
                negócio
              </p>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors"
              >
                Fale Conosco <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                alt="Modern office workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Code2 className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Desenvolvimento de Software
              </h3>
              <p className="text-gray-600">
                Criamos soluções personalizadas para atender às necessidades
                específicas do seu negócio.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Consultoria Empresarial
              </h3>
              <p className="text-gray-600">
                Oferecemos orientação estratégica para otimizar seus processos e
                aumentar a eficiência.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Bot className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">RPAs</h3>
              <p className="text-gray-600">
                Realizamos integrações entre plataformas via API e RPAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Nossa equipe"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sobre a FSoluções
              </h2>
              <p className="text-gray-600 mb-6">
                Há mais de uma década, a FSoluções tem sido referência em
                soluções tecnológicas inovadoras. Nossa equipe de especialistas
                está comprometida em entregar resultados excepcionais e
                impulsionar o sucesso dos nossos clientes.
              </p>
              <button
                onClick={() => navigate("/historia")}
                className="text-blue-600 font-semibold flex items-center hover:text-blue-700"
              >
                Conheça nossa história <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Entre em Contato
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Telefone</h3>
                <p className="text-gray-600">(21) 99169-4254</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">felipe@pisomtecnologia.com.br</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-gray-600">
                  Est. Adhemar Bebiano 257, Del Castilho - Rio de Janeiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/historia" element={<History />} />
    </Routes>
  );
}

export default App;
