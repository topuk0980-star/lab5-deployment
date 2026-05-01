import { useState, useEffect } from 'react';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  // Ініціалізація: беремо тему з пам'яті або ставимо світлу за замовчуванням
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // ГАРАНТОВАНА зміна теми для Tailwind
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Запам'ятовуємо вибір
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
      {/* Навігація */}
      <header className="p-4 border-b dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-800 shadow-sm">
        <h1 className="text-xl font-bold tracking-tight">Портфоліо Розробника</h1>
        <button 
          onClick={toggleTheme}
          className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-transform active:scale-95 shadow-lg font-medium"
        >
          {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
        </button>
      </header>

      <main className="container mx-auto py-12 px-6 max-w-4xl">
        {/* РЕЗЮМЕ */}
        <section className="space-y-8">
          <header className="text-center">
            <h1 className="text-5xl font-black mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Олександр Студент
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">Full-stack Developer & Cybersecurity Enthusiast</p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-indigo-500">Технічні навички</h2>
              <ul className="list-disc list-inside space-y-2 opacity-80">
                <li>Frontend: React, Vite, Tailwind CSS</li>
                <li>Backend: Node.js, Python (AES алгоритми)</li>
                <li>Security: Nmap, Kali Linux, Wireshark</li>
                <li>Infrastructure: VirtualBox</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-purple-500">Освіта</h2>
              <p className="font-bold">НУЛП</p>
              <p className="text-sm opacity-70">Спеціальність: Кібербезпека</p>
              <p className="mt-4 italic">"Працюю над впровадженням криптографічних інструментів на базі AES."</p>
            </div>
          </div>

          <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Проєкти</h2>
            <p className="leading-relaxed">
              Займаюся розробкою автентифікаційних інструментів з використанням алгоритму AES (Варіант 6). 
              Маю досвід у налаштуванні захищених локальних мереж та проведенні аудиту безпеки за допомогою Nessus.
            </p>
          </div>
        </section>

        {/* Завдання з коментарями для 7 варіанту */}
        <div className="mt-16 border-t dark:border-gray-700 pt-10">
           <Reviews />
        </div>
      </main>

      <ContactForm /> {/* Модалка через хвилину */}
      <Footer /> {/* Системна інфа */}
    </div>
  );
}

export default App;