import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="Axenty" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Ми допомагаємо підприємствам заощаджувати більше, ніж раніше, 
              завдяки професійному підходу до закупівель та постачання.
            </p>
            <p className="text-orange-400 font-medium">
              "Я завжди знаю, як заощадити більше"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Послуги
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контактна інформація</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <span className="text-gray-300">axenty.pro@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-400" />
                <span className="text-gray-300">+380 (73) 599-69-69</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-orange-400" />
                <span className="text-gray-300">Київ, Україна</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Axenty. Всі права захищені.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Розумний підбір. Живий підхід.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
