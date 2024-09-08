let currentLang = 'pl'; 
let translations = {};

async function loadTranslations(lang) {
    const response = await fetch(`/${lang}.json`);
    translations = await response.json();
}

async function changeLanguage(lang) {
    currentLang = lang;
    await loadTranslations(lang);
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
    
    document.documentElement.lang = lang;
}


document.addEventListener('DOMContentLoaded', async () => {
    await changeLanguage('pl'); 
    

    const languageToggle = document.createElement('button');
    languageToggle.textContent = 'EN';
    languageToggle.className = 'language-toggle';
    languageToggle.onclick = () => {
        const newLang = currentLang === 'pl' ? 'en' : 'pl';
        changeLanguage(newLang);
        languageToggle.textContent = newLang === 'pl' ? 'EN' : 'PL';
    };
    document.body.prepend(languageToggle);
});