import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('closed')) setIsOpen(true);
    }, 60000); // 1 хвилина[cite: 1]
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full relative">
        <button onClick={() => {setIsOpen(false); sessionStorage.setItem('closed', 'true')}} className="absolute top-4 right-4 text-2xl font-bold">&times;</button>
        <h2 className="text-2xl font-bold mb-4">Зворотній зв'язок</h2>
        <form action="https://formspree.io/f/ВАШ_ID" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Ім'я" required className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
          <input type="tel" name="phone" placeholder="Телефон" className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
          <textarea name="msg" placeholder="Повідомлення" className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold">Відправити</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;