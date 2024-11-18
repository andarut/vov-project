import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Header } from "@/components/Header"

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Великая Отечественная война 1941-1945',
  description: 'Информационный портал о Великой Отечественной войне',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gray-100`}>
        <Header/>

        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">О проекте</h3>
                <p>Этот сайт посвящен сохранению памяти о Великой Отечественной войне и её героях.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Разделы</h3>
                <ul className="space-y-2">
                  <li><Link href="/documents" className="hover:text-red-500 transition-colors">Архив документов</Link></li>
                  <li><Link href="/museum" className="hover:text-red-500 transition-colors">Виртуальный музей</Link></li>
                  <li><Link href="/battles-map" className="hover:text-red-500 transition-colors">Карта сражений</Link></li>
                  <li><Link href="/memoirs" className="hover:text-red-500 transition-colors">Воспоминания ветеранов</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Контакты</h3>
                <p>Email: andreyarutiunian@gmail.com</p>
                <p>Телефон: +7 (964) 714-64-31</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 Сайт о Великой Отечественной войне. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}