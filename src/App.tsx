import React from 'react';
import { Building2, Code2, Headphones, ChevronRight, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                FSoluções
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transformando ideias em soluções digitais inovadoras para o seu negócio
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors">
                Fale Conosco <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800"
                alt="Team working"
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
              <h3 className="text-xl font-semibold mb-4">Desenvolvimento de Software</h3>
              <p className="text-gray-600">
                Criamos soluções personalizadas para atender às necessidades específicas do seu negócio.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Consultoria Empresarial</h3>
              <p className="text-gray-600">
                Oferecemos orientação estratégica para otimizar seus processos e aumentar a eficiência.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Headphones className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Suporte Técnico</h3>
              <p className="text-gray-600">
                Suporte especializado 24/7 para manter seus sistemas funcionando perfeitamente.
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
                alt="Nossa equipe"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sobre a FSoluções
              </h2>
              <p className="text-gray-600 mb-6">
                Há mais de uma década, a FSoluções tem sido referência em soluções tecnológicas inovadoras. 
                Nossa equipe de especialistas está comprometida em entregar resultados excepcionais e 
                impulsionar o sucesso dos nossos clientes.
              </p>
              <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
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
                <p className="text-gray-600">(11) 4444-5555</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contato@fsolucoes.com.br</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-gray-600">Av. Paulista, 1000 - São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 FSoluções. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;