import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    procurementScope: '',
    message: '',
    preferredContact: 'email'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const companySizes = [
    { value: 'micro', label: 'Мікро (до 10 співробітників)' },
    { value: 'small', label: 'Мала (10-50 співробітників)' },
    { value: 'medium', label: 'Середня (50-250 співробітників)' },
    { value: 'large', label: 'Велика (понад 250 співробітників)' }
  ]

  const industries = [
    'Виробництво',
    'IT та телекомунікації',
    'Будівництво',
    'Енергетика',
    'Транспорт та логістика',
    'Роздрібна торгівля',
    'Фармацевтика',
    'Сільське господарство',
    'Фінанси та банківництво',
    'Освіта',
    'Охорона здоров\'я',
    'Інше'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Дякуємо за звернення!
          </h2>
          <p className="text-gray-600 mb-6">
            Ми отримали вашу заявку на консультацію. Наш експерт зв'яжеться з вами 
            протягом робочого дня для обговорення деталей співпраці.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Відправити ще одну заявку
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-500">Контакти</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готові почати оптимізувати ваші закупівлі? Зв'яжіться з нами для безкоштовної консультації 
              та дізнайтесь, як ми можемо допомогти вашому бізнесу заощаджувати більше.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Замовити консультацію
                </h2>
                <p className="text-gray-600 mb-8">
                  Заповніть форму нижче, і наш експерт зв'яжеться з вами для обговорення 
                  можливостей оптимізації ваших закупівель.
                </p>

                <form
  		  name="contact"
  		  method="POST"
  		  data-netlify="true"
  		  netlify-honeypot="bot-field"
		  action="/success"
  		  className="space-y-6"
>
  		  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Назва компанії *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="ТОВ &quot;Ваша компанія&quot;"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                        Контактна особа *
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Іван Іванов"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                        Розмір компанії *
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        required
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Оберіть розмір компанії</option>
                        {companySizes.map((size) => (
                          <option key={size.value} value={size.value}>
                            {size.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                        Галузь
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Оберіть галузь</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="procurementScope" className="block text-sm font-medium text-gray-700 mb-2">
                      Сфера закупівель *
                    </label>
                    <textarea
                      id="procurementScope"
                      name="procurementScope"
                      required
                      rows={4}
                      value={formData.procurementScope}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Опишіть, які товари/послуги ви закуповуєте, обсяги закупівель, поточні виклики..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Додаткова інформація
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Розкажіть більше про ваші потреби або запитання..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Зручний спосіб зв'язку
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Телефон</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Відправляємо...
                      </>
                    ) : (
                      <>
                        Відправити заявку
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Контактна інформація
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">axenty.pro@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Телефон</p>
                        <p className="text-gray-600">+380 (73) 599-69-69</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Адреса</p>
                        <p className="text-gray-600">Київ, Україна</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-orange-500 mr-2" />
                    Час роботи
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Понеділок - П'ятниця</span>
                      <span className="font-medium text-gray-900">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Субота - Неділя</span>
                      <span className="font-medium text-gray-900">Вихідні</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Ми відповідаємо на запити протягом одного робочого дня
                  </p>
                </div>

                {/* Quick Response */}
                <div className="bg-gray-900 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">
                    Швидка відповідь
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Потрібна термінова консультація? Телефонуйте прямо зараз!
                  </p>
                  <a
                    href="tel:+380XXXXXXXXX"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-center py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Подзвонити зараз
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часті запитання
            </h2>
            <p className="text-xl text-gray-600">
              Відповіді на найпоширеніші запитання про наші послуги
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Скільки коштує консультація?
              </h3>
              <p className="text-gray-600">
                Перша консультація абсолютно безкоштовна. Ми обговоримо ваші потреби, 
                проаналізуємо поточні процеси та запропонуємо варіанти співпраці.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Як швидко ви зможете почати роботу?
              </h3>
              <p className="text-gray-600">
                Зазвичай ми можемо розпочати співпрацю протягом тижня після підписання договору. 
                Термінові проекти розглядаються в індивідуальному порядку.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                З якими галузями ви працюєте?
              </h3>
              <p className="text-gray-600">
                Ми маємо досвід роботи з підприємствами різних галузей: від виробництва 
                до IT, від будівництва до фармацевтики. Наш підхід адаптується під специфіку кожної галузі.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Які гарантії ви надаєте?
              </h3>
              <p className="text-gray-600">
                Ми гарантуємо досягнення узгоджених з клієнтом результатів. Якщо ми не зможемо 
                забезпечити обіцяну економію, ви платите тільки за фактично виконану роботу.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
