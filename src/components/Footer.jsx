import { useEffect, useState } from 'react';

const Footer = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const data = {
      os: navigator.platform,
      browser: navigator.userAgent.split(' ').pop()
    };
    localStorage.setItem('sys_info', JSON.stringify(data));
    setInfo(data);
  }, []);

  return (
    <footer className="p-8 border-t dark:border-gray-700 text-center text-xs text-gray-500">
      <p>Система: {info.os} | Браузер: {info.browser}</p>
      <p className="mt-2">© 2026 Лабораторна робота №4</p>
    </footer>
  );
};

export default Footer;