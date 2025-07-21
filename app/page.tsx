import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  User,
  Target,
  Dumbbell,
  Heart,
  Smartphone,
  MessageCircle,
  Star,
  CreditCard,
  Banknote,
  Repeat,
  CheckCircle,
  Quote,
} from "lucide-react"
import Link from "next/link"
import { TransformationCard } from "@/components/transformation-card"

export default function YagoNicacioLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#00D4AA]">Yago Nicácio</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-[#00D4AA] transition-colors">
              Início
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-[#00D4AA] transition-colors">
              Sobre
            </Link>
            <Link href="#transformacoes" className="text-gray-700 hover:text-[#00D4AA] transition-colors">
              Transformações
            </Link>
            <Link href="#servicos" className="text-gray-700 hover:text-[#00D4AA] transition-colors">
              Serviços
            </Link>
            <Link href="#depoimentos" className="text-gray-700 hover:text-[#00D4AA] transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-[#00D4AA] transition-colors">
              Contato
            </Link>
          </nav>
        </div>
      </header>

{/* Hero Section */}
<section id="inicio" className="bg-slate-900 text-white pt-24 pb-20">
  <div className="max-w-7xl mx-auto px-6 sm:px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Texto */}
      <div className="text-center lg:text-left space-y-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Corrija sua Postura<br />e Transforme Seu Corpo em <span className="text-[#00D4AA]">8 Semanas</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Mais de 500 pessoas em 7 países já passaram pela minha consultoria e transformaram não apenas seus
          corpos, mas suas vidas. Especialista em correção postural, vou te ajudar a eliminar dores e conquistar o
          corpo dos seus sonhos.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button
            className="bg-[#00D4AA] hover:bg-[#00B894] text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            👉 Quero Começar Minha Transformação
          </button>
        </div>
      </div>

      {/* Imagem */}
      <div className="flex justify-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 w-full max-w-sm">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NIC%C3%81CIO%20CREW%20LOGO%2001-B6fzLRmcBHEfJed9ZCNGsTgTWDVWZk.png"
            alt="Nicácio Crew Logo"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Sobre o Yago */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Coluna Esquerda - Avatar */}
            <div className="flex justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 bg-[#00D4AA]/10 rounded-full flex items-center justify-center">
               <div className="w-60 h-60 md:w-72 md:h-72 bg-[#E6FCF8] rounded-full flex items-center justify-center">
  <img
  src="/yago.jpg"
  alt="Yago Nicácio"
  className="w-full h-full object-cover rounded-full"
/>
</div>

              </div>
            </div>

            {/* Coluna Direita - Conteúdo */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Sobre o Yago</h2>

              <div className="space-y-4">
                <p className="text-base text-gray-700 leading-relaxed">
                  Sou o Yago Nicácio, Personal Trainer com foco em correção postural, emagrecimento e hipertrofia com
                  segurança.
                </p>

                <p className="text-base text-gray-700 leading-relaxed">
                  Desde 2021, já ajudei mais de{" "}
                  <span className="text-[#00D4AA] font-semibold">500 alunos em 7 países</span> a melhorarem a postura,
                  reduzirem dores e alcançarem resultados consistentes — sem fórmulas mágicas, só com técnica e
                  acompanhamento de verdade.
                </p>

                <p className="text-base text-gray-700 leading-relaxed mt-6">
                  Meu diferencial? Um plano de treino 100% personalizado, com avaliação postural detalhada e
                  acompanhamento contínuo, seja online ou presencial.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-[#00D4AA] text-white font-semibold text-sm px-4 py-2 rounded-full">
                  +500 Alunos
                </span>
                <span className="bg-slate-100 text-[#00D4AA] text-sm px-4 py-2 rounded-full">Correção Postural</span>
                <span className="bg-slate-100 text-[#00D4AA] text-sm px-4 py-2 rounded-full">Hipertrofia</span>
                <span className="bg-slate-100 text-[#00D4AA] text-sm px-4 py-2 rounded-full">Emagrecimento</span>
                <span className="bg-slate-100 text-[#00D4AA] text-sm px-4 py-2 rounded-full">Prevenção de Lesões</span>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Transformações Reais */}
<section id="transformacoes" className="py-24 md:py-32 bg-[#F7F9FC]">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Transformações Reais</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Arraste a linha para o lado e confira resultados comprovados dos meus alunos em apenas 8 semanas de consultoria
      </p>
    </div>

    {/* Scroll horizontal no mobile, grid no desktop */}
    <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible">
      {[
        {
          before: '/kamila-antes.jpg',
          after: '/kamila-depois.jpg',
          name: '',
          age: 0,
          objective: '',
          testimonial: '',
          result: '',
        },
        {
          before: '/luca-antes.jpg',
          after: '/luca-depois.jpg',
          name: '',
          age: 0,
          objective: '',
          testimonial: '',
          result: '',
        },
        {
          before: '/thales-antes.jpg',
          after: '/thales-depois.jpg',
          name: '',
          age: 0,
          objective: '',
          testimonial: '',
          result: '',
        },
        {
          before: '/eliza-antes.jpg',
          after: '/eliza-depois.jpg',
          name: '',
          age: 0,
          objective: '',
          testimonial: '',
          result: '',
        },
      ].map((card, index) => (
        <div key={index} className="min-w-[300px] md:min-w-0 flex-shrink-0">
          <TransformationCard
            name={card.name}
            age={card.age}
            objective={card.objective}
            testimonial={card.testimonial}
            result={card.result}
            before={card.before}
            after={card.after}
          />
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <button className="bg-[#00D4AA] hover:bg-[#00B894] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 max-w-xs sm:max-w-sm w-full sm:w-auto">
        Quero Resultados Como Esses
      </button>
    </div>
  </div>
</section>



      {/* Serviços */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Serviços</h2>
            <p className="text-gray-600 mt-2">Escolha a modalidade que melhor se adapta ao seu estilo de vida</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
            {/* Consultoria Presencial */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full">
              <div className="bg-[#00D4AA] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Consultoria Presencial</h3>
              </div>
              <div className="px-6 py-2">
                <p className="text-[#00D4AA] font-semibold text-lg">Treino ao Seu Lado</p>
              </div>
              <div className="px-6 pb-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      Se você busca um acompanhamento técnico de perto, essa é a sua escolha. Em um único encontro,
                      analisamos sua postura, medimos sua composição corporal, corrigimos padrões de movimento e
                      montamos seu treino de 8 semanas na hora, junto com você.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      E o melhor: executo o treino com você na academia, corrigindo cada detalhe para garantir resultado
                      e segurança.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Avaliação postural e funcional completa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Treino montado e executado junto com você</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Aplicativo com vídeos de todos os exercícios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Feedback semanal + reavaliação após 30 dias</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    className="bg-[#00D4AA] hover:bg-[#00B894] text-white py-3 px-6 rounded shadow transition-colors font-bold leading-7"
                  >
                    Quero Começar Agora
                  </button>
                </div>
              </div>
            </div>

            {/* Consultoria Online */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full">
              <div className="bg-[#00D4AA] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Consultoria Online</h3>
              </div>
              <div className="px-6 py-2">
                <p className="text-[#00D4AA] font-semibold text-lg">Praticidade com Resultados Reais</p>
              </div>
              <div className="px-6 pb-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      Mesmo à distância, você terá um acompanhamento técnico de verdade. Com base em fotos e anamnese
                      detalhada, montamos um plano de 8 semanas totalmente ajustado ao seu corpo e rotina.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Você recebe tudo em um app com vídeos de execução, envia vídeos da sua última série e recebe
                      correções personalizadas toda semana.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Avaliação postural online por fotos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Treino de 8 semanas com vídeos explicativos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Feedback semanal e ajustes sob demanda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Avaliação mensal para acompanhar sua evolução</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center mb-0 mt-6">
                  <button
                    type="button"
                    className="bg-[#00D4AA] hover:bg-[#00B894] text-white rounded shadow transition-colors font-bold px-6 py-3 mx-0"
                  >
                    Quero Começar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Diferenciais</h2>
            <p className="text-gray-600 mt-2 text-base">O que torna minha metodologia única e eficiente</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Foco em correção postural",
                desc: "Especialização total em correção postural e prevenção de lesões para um treino seguro e eficiente.",
              },
              {
                icon: Smartphone,
                title: "App exclusivo",
                desc: "Aplicativo com vídeos e acompanhamento técnico real para você não ter dúvidas na execução.",
              },
              {
                icon: Heart,
                title: "Redução de dores",
                desc: "Melhora significativa no desempenho e redução de dores em poucas semanas de treino.",
              },
              {
                icon: Dumbbell,
                title: "Treino com lógica",
                desc: "Planejamento baseado em ciência e evidências, não em achismos ou modismos passageiros.",
              },
              {
                icon: MessageCircle,
                title: "Feedbacks constantes",
                desc: "Acompanhamento semanal e reavaliações constantes para ajustar seu treino conforme evolui.",
              },
              {
                icon: User,
                title: "Atendimento personalizado",
                desc: "Cada plano é único e desenvolvido especificamente para suas necessidades e objetivos.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
                <item.icon className="w-12 h-12 text-[#00D4AA] mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mt-4">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formas de Pagamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Formas de Pagamento</h2>
            <p className="text-xl text-gray-600">Facilidade e segurança para você</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Banknote, title: "PIX", desc: "Pagamento instantâneo" },
              { icon: CreditCard, title: "Cartão de Crédito", desc: "Parcelamento disponível" },
              { icon: CreditCard, title: "Cartão de Débito", desc: "Débito à vista" },
              { icon: Repeat, title: "Crédito Recorrente", desc: "Cobrança automática" },
            ].map((payment, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <payment.icon className="w-12 h-12 text-[#00D4AA] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{payment.title}</h3>
                  <p className="text-sm text-gray-600">{payment.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Depoimentos</h2>
            <p className="text-xl text-gray-600">O que nossos alunos dizem</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendes",
                age: 35,
                testimonial:
                  "O Yago mudou minha vida! Eliminei as dores nas costas que me incomodavam há anos. Profissional excepcional!",
                rating: 5,
              },
              {
                name: "Fernanda Lima",
                age: 29,
                testimonial:
                  "Consultoria online incrível! Mesmo à distância, senti como se ele estivesse do meu lado. Resultados surpreendentes!",
                rating: 5,
              },
              {
                name: "Roberto Silva",
                age: 42,
                testimonial:
                  "Metodologia única! Nunca imaginei que poderia treinar sem dor. O Yago é um verdadeiro especialista em postura.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-[#00D4AA] mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00D4AA] to-[#00B894] rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.age} anos</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Sua Dor Não É Normal.
            <br />
            Sua Postura Pode Ser Corrigida.
          </h2>
          <p className="text-white text-center text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Se você sente que está travado, sem evoluir ou sempre com alguma dor, o problema não é falta de treino – é
            falta de diagnóstico.
          </p>
          <p className="text-white text-center text-base md:text-lg mt-4 max-w-2xl mx-auto mb-8">
            Entre agora para minha consultoria e comece a treinar com técnica, clareza e resultado.
          </p>
          <Button size="lg" className="bg-[#00D4AA] hover:bg-[#00B894] text-white px-8 py-4 rounded-full text-lg">
            Quero Começar Minha Transformação
          </Button>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-16 bg-[#00D4AA]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-white">Entre em contato</h2>
              <p className="text-xl text-teal-100">Vamos começar sua transformação hoje mesmo</p>
            </div>
            <Card className="bg-white">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                      <Input placeholder="Seu nome completo" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                      <Input placeholder="(11) 99999-9999" className="rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Serviço de interesse</label>
                    <Select>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presencial">Consultoria Presencial</SelectItem>
                        <SelectItem value="online">Consultoria Online</SelectItem>
                        <SelectItem value="ambos">Quero saber mais sobre ambos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <Textarea
                      placeholder="Conte-me sobre seus objetivos e principais dificuldades..."
                      className="rounded-lg min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-[#00D4AA] hover:bg-[#00B894] text-white py-4 rounded-full text-lg font-semibold">
                    📲 Quero Fazer Minha Avaliação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-[#00D4AA] mb-4">Yago Nicácio</div>
          <p className="text-gray-400 mb-4">Personal Trainer - Especialista em Correção Postural</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>© 2025 Yago Nicácio. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
