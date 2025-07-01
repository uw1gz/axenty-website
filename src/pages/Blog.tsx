import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, TrendingUp, FileText, Target } from 'lucide-react'

const Blog = () => {
  // Placeholder blog posts for demonstration
  const featuredPosts = [
    {
      id: 1,
      title: "10 способів оптимізувати закупівлі у 2025 році",
      excerpt: "Дізнайтесь про найефективніші стратегії закупівель, які допоможуть вашому бізнесу заощаджувати більше коштів та підвищувати ефективність.",
      date: "15 червня 2025",
      author: "Команда Axenty",
      category: "Стратегії",
      readTime: "5 хв читання",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Як обрати надійного постачальника: покроковий гід",
      excerpt: "Практичні поради з вибору та оцінки постачальників, які стануть надійними партнерами для вашого бізнесу.",
      date: "12 червня 2025",
      author: "Команда Axenty",
      category: "Практичні поради",
      readTime: "7 хв читання",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Тенденції ринку закупівель в Україні",
      excerpt: "Аналіз поточного стану ринку закупівель в Україні та прогнози на майбутнє.",
      date: "10 червня 2025",
      author: "Команда Axenty",
      category: "Аналітика",
      readTime: "6 хв читання",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = [
    { name: "Стратегії", count: 15, icon: <Target className="h-5 w-5" /> },
    { name: "Практичні поради", count: 23, icon: <FileText className="h-5 w-5" /> },
    { name: "Аналітика", count: 8, icon: <TrendingUp className="h-5 w-5" /> },
    { name: "Кейси", count: 12, icon: <User className="h-5 w-5" /> }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-500">Блог</span> Axenty
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Експертні поради, аналітика та найкращі практики у сфері закупівель. 
              Ділимося знаннями, що допомагають бізнесу заощаджувати більше.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🚀 Блог скоро буде запущено!
          </h2>
          <p className="text-lg opacity-90">
            Ми готуємо цікавий контент про закупівлі, оптимізацію витрат та кращі практики індустрії. 
            Слідкуйте за оновленнями!
          </p>
        </div>
      </section>

      {/* Preview Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Що буде в нашому блозі
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ми плануємо публікувати статті та матеріали, які допоможуть вам стати експертом у закупівлях
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FileText className="h-16 w-16 mx-auto mb-2 opacity-50" />
                    <span className="text-sm">Зображення статті</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="text-orange-500 font-medium text-sm">
                      Скоро
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Категорії контенту
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ми плануємо охопити всі аспекти закупівель та постачання
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 text-center"
              >
                <div className="flex justify-center mb-4 text-orange-500">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.count} статей заплановано
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Теми, які ми висвітлюватимемо
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Експертні матеріали з усіх аспектів закупівель
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Стратегії закупівель</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Розробка закупівельної стратегії</li>
                <li>• Планування бюджету</li>
                <li>• Категорійне управління</li>
                <li>• Оптимізація процесів</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Управління постачальниками</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Пошук та оцінка постачальників</li>
                <li>• Управління відносинами</li>
                <li>• KPI та моніторинг</li>
                <li>• Управління ризиками</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Цифрові технології</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Автоматизація закупівель</li>
                <li>• E-procurement системи</li>
                <li>• Аналітика даних</li>
                <li>• ШІ у закупівлях</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Юридичні аспекти</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Контрактне право</li>
                <li>• Публічні закупівлі</li>
                <li>• Міжнародні договори</li>
                <li>• Вирішення спорів</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ESG та сталість</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Сталі закупівлі</li>
                <li>• Соціальна відповідальність</li>
                <li>• Екологічні стандарти</li>
                <li>• Етичні закупівлі</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Кейси та практика</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Успішні проекти</li>
                <li>• Помилки та уроки</li>
                <li>• Галузеві особливості</li>
                <li>• Міжнародний досвід</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Будьте першими, хто дізнається про нові статті
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Підпишіться на нашу розсилку та отримуйте найкращі матеріали 
            про закупівлі прямо на вашу електронну пошту.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваша електронна пошта"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
              Підписатися
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Ми надсилаємо листи не частіше одного разу на тиждень
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Потрібна консультація вже зараз?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Поки ми готуємо блог, ви можете отримати персональну консультацію 
            від наших експертів з будь-яких питань закупівель.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Замовити консультацію
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
