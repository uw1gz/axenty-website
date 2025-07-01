import { Link } from 'react-router-dom'
import { Users, Award, Target, TrendingUp, ArrowRight } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="h-12 w-12 text-orange-500" />,
      title: "Результативність",
      description: "Ми зосереджені на досягненні конкретних результатів - економії коштів та підвищенні ефективності закупівель."
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: "Партнерство",
      description: "Ми працюємо як ваша команда, розуміючи специфіку бізнесу та потреби кожного клієнта."
    },
    {
      icon: <Award className="h-12 w-12 text-orange-500" />,
      title: "Експертиза",
      description: "Глибокі знання ринку постачальників та сучасних практик закупівель в Україні та світі."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-orange-500" />,
      title: "Інновації",
      description: "Використовуємо найсучасніші методи та технології для оптимізації закупівельних процесів."
    }
  ]

  const stats = [
    { number: "500+", label: "Успішних проектів" },
    { number: "30%", label: "Середня економія" },
    { number: "50+", label: "Довірених клієнтів" },
    { number: "5", label: "Років досвіду" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Про <span className="text-orange-500">Axenty</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ми - команда експертів, які допомагають українським підприємствам 
              оптимізувати витрати та підвищувати ефективність закупівель.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Наша місія
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ми створили Axenty з простою, але амбітною метою - революціонізувати 
                підхід до закупівель в Україні. Наша місія полягає в тому, щоб кожне 
                підприємство могло досягати максимальної економії та ефективності 
                в процесах постачання.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Ми віримо, що правильний підхід до закупівель може стати конкурентною 
                перевагою для будь-якого бізнесу. Тому ми поєднуємо глибокі знання 
                ринку з інноваційними методами та індивідуальним підходом до кожного клієнта.
              </p>
              <blockquote className="text-2xl font-bold text-orange-500 italic">
                "Розумний підбір. Живий підхід."
              </blockquote>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Наші принципи</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <strong className="text-gray-900">Прозорість:</strong>
                    <span className="text-gray-600 ml-1">Відкритість у всіх процесах та рішеннях</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <strong className="text-gray-900">Результативність:</strong>
                    <span className="text-gray-600 ml-1">Фокус на досягненні конкретних результатів</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <strong className="text-gray-900">Інновації:</strong>
                    <span className="text-gray-600 ml-1">Постійне впровадження кращих практик</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <strong className="text-gray-900">Партнерство:</strong>
                    <span className="text-gray-600 ml-1">Довгострокові відносини з клієнтами</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наші цінності
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ці принципи керують нашою роботою та визначають наш підхід до кожного проекту
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Наші досягнення
            </h2>
            <p className="text-xl opacity-90">
              Цифри, які говорять про нашу ефективність
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Експертна команда
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Досвідчені фахівці з глибоким розумінням українського ринку та міжнародних практик
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Команда експертів з закупівель
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Наша команда складається з досвідчених фахівців з багаторічним досвідом 
                у сфері закупівель, постачання та управління ланцюгами поставок. 
                Ми працювали з компаніями різних розмірів - від малих підприємств до 
                великих корпорацій.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                  <div className="text-gray-600">Років сукупного досвіду</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
                  <div className="text-gray-600">Галузей експертизи</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                  <div className="text-gray-600">Сертифікацій та навчань</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готові почати співпрацю?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Дізнайтесь, як ми можемо допомогти вашому бізнесу заощаджувати більше 
            та підвищувати ефективність закупівель.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Замовити консультацію
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
