import { Link } from 'react-router-dom'
import { ArrowRight, Target, TrendingDown, Shield, Users, CheckCircle } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Пошук постачальників",
      description: "Знаходимо найкращих постачальників для вашого бізнесу з гарантованою якістю та оптимальними цінами."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-orange-500" />,
      title: "Переговори та знижки",
      description: "Ведемо переговори з постачальниками та отримуємо максимальні знижки для вашої компанії."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Тендерні процедури",
      description: "Організовуємо та проводимо тендери, забезпечуючи прозорість та найкращі умови закупівель."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Аналітика закупівель",
      description: "Надаємо детальну аналітику витрат та рекомендації для оптимізації закупівельних процесів."
    }
  ]

  const benefits = [
    "Економія до 30% на закупівлях",
    "Професійне управління постачальниками",
    "Прозорі тендерні процедури",
    "Детальна аналітика та звітність",
    "Мінімізація ризиків постачання",
    "Індивідуальний підхід до кожного клієнта"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ми допомагаємо підприємствам{' '}
              <span className="text-orange-500">заощаджувати більше</span>,{' '}
              ніж раніше!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Професійні послуги закупівель для українських підприємств. 
              Оптимізуємо витрати, знаходимо кращих постачальників та забезпечуємо прозорість процесів.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Замовити консультацію
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Дізнатись більше
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наші послуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Повний спектр послуг для оптимізації ваших закупівель та постачання
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Чому обирають Axenty?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ми поєднуємо досвід, інновації та індивідуальний підхід, 
                щоб забезпечити максимальну ефективність ваших закупівель.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Готові почати заощаджувати?
              </h3>
              <p className="text-gray-600 mb-6">
                Отримайте безкоштовну консультацію та дізнайтесь, як ми можемо 
                оптимізувати ваші закупівлі вже сьогодні.
              </p>
              <Link
                to="/contact"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Замовити консультацію
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold mb-6">
            "Я завжди знаю, як заощадити більше"
          </blockquote>
          <p className="text-xl text-gray-300 mb-8">
            Наш досвід та експертиза допомагають клієнтам досягати значної економії 
            та підвищувати ефективність закупівельних процесів.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold"
          >
            Дізнатись більше про нас
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
