// components/GoogleTranslate.jsx
import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (window.google?.translate?.TranslateElement) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it,pt,ru,zh-CN,ja,ko',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
      
      // Add styling after widget renders
      setTimeout(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          select.classList.add('mini-select');
        }
      }, 500);
    };

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div id="google_translate_element" className="
      inline-block 
      h-7 w-24 
      overflow-hidden
      border border-gray-300 dark:border-gray-800
      rounded-md
      bg-white dark:bg-gray-800
    " >
    </div>
  );
};

export default GoogleTranslate;