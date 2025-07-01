import { Link } from 'react-router-dom'
import { Search, Handshake, FileText, BarChart3, Shield, Clock, DollarSign, Users, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  const mainServices = [
    {
      icon: <Search className="h-12 w-12 text-orange-500" />,
      title: "Пошук та відбір постачальників",
      description: "Комплексний пошук та оцінка потенційних постачальників для вашого бізнесу",
      features: [
        "Аналіз ринку постачальників",
        "Перевірка репутації та надійності",
        "Оцінка фінансової стабільності",
        "Технічна експертиза продукції",
        "Створення бази даних постачальників"
      ]
    },
    {
      icon: <Handshake className="h-12 w-12 text-orange-500" />,
      title: "Переговори та укладання угод",
      description: "Професійне ведення переговорів для отримання найкращих умов співпраці",
      features: [
        "Підготовка переговорної стратегії",
        "Ведення переговорів з постачальниками",
        "Отримання максимальних знижок",
        "Узгодження термінів та умов поставок",
        "Супровід укладання контрактів"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-orange-500" />,
      title: "Тендерні процедури",
      description: "Організація та проведення прозорих тендерних процедур",
      features: [
        "Розробка тендерної документації",
        "Організація тендерного процесу",
        "Оцінка та порівняння пропозицій",
        "Забезпечення прозорості процедур",
        "Юридичний супровід тендерів"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-500" />,
      title: "Аналітика та оптимізація",
      description: "Детальний аналіз закупівельних процесів та рекомендації з оптимізації",
      features: [
        "Аналіз витрат на закупівлі",
        "Виявлення можливостей економії",
        "Оптимізація закупівельних процесів",
        "Розробка KPI та метрик",
        "Регулярні звіти та рекомендації"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Управління ризиками",
      description: "Мінімізація ризиків у ланцюгах постачань"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Оптимізація термінів",
      description: "Скорочення часу закупівельних процедур"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-orange-500" />,
      title: "Контроль бюджету",
      description: "Ефективне управління закупівельним бюджетом"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Навчання команди",
      description: "Підвищення кваліфікації ваших співробітників"
    }
  ]

  const benefits = [
    "Економія до 30% від закупівельного бюджету",
    "Скорочення часу на закупівлі на 50%",
    "Підвищення якості постачальників",
    "Зменшення ризиків порушення поставок",
    "Прозорість всіх процедур",
    "Професійна експертиза на кожному етапі"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наші <span className="text-orange-500">послуги</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Повний спектр послуг для оптимізації ваших закупівель - 
              від пошуку постачальників до аналітики та звітності
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Основні послуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексні рішення для всіх ваших потреб у сфері закупівель
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4 mb-6">
                  {service.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Додаткові послуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Спеціалізовані рішення для підвищення ефективності закупівель
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Переваги співпраці з нами
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Наш досвід та експертиза дозволяють досягати значних результатів 
                у оптимізації закупівель для підприємств різних галузей.
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
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Процес співпраці
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Аналіз потреб</h4>
                    <p className="text-gray-600 text-sm">Детальне вивчення ваших потреб та поточних процесів</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Розробка стратегії</h4>
                    <p className="text-gray-600 text-sm">Створення індивідуального плану оптимізації</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Впровадження</h4>
                    <p className="text-gray-600 text-sm">Реалізація плану з постійним моніторингом результатів</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Результат</h4>
                    <p className="text-gray-600 text-sm">Досягнення встановлених цілей та подальша підтримка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Галузі, з якими ми працюємо
            </h2>
            <p className="text-xl text-gray-300">
              Маємо досвід роботи з підприємствами різних галузей
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Виробництво",
              "IT та телеком",
              "Будівництво",
              "Енергетика",
              "Транспорт",
              "Роздрібна торгівля",
              "Фармацевтика",
              "Сільське господарство",
              "Фінанси",
              "Освіта",
              "Охорона здоров'я",
              "Логістика"
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готові оптимізувати ваші закупівлі?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Отримайте безкоштовну консультацію та дізнайтесь, як ми можемо 
            допомогти вашому бізнесу заощаджувати більше.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Замовити консультацію
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Дізнатись більше про нас
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
