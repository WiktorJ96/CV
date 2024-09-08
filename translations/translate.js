let currentLang = localStorage.getItem('language') || 'pl';
let translations = {};

function getPageName() {
    return document.body.getAttribute('data-page') || 'default';
}

async function loadTranslations(lang) {
    const pageName = getPageName();
    try {
        const response = await fetch(`/translations/${pageName}-${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        translations = await response.json();
    } catch (error) {
        console.error(`Could not load translations for page ${pageName} and language ${lang}:`, error);
    }
}

async function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    await loadTranslations(lang);
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[key];
            } else {
                element.innerHTML = translations[key];
            }
        }
    });
    
    document.documentElement.lang = lang;
    updateLanguageToggle();
}

function updateLanguageToggle() {
    const plButton = document.getElementById('lang-pl');
    const enButton = document.getElementById('lang-en');
    
    if (plButton && enButton) {
        plButton.classList.toggle('active', currentLang === 'pl');
        enButton.classList.toggle('active', currentLang === 'en');
    }

    const languageToggle = document.querySelector('.language-toggle');
    if (languageToggle) {
        languageToggle.textContent = currentLang === 'pl' ? 'EN' : 'PL';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await changeLanguage(currentLang);
    
    const plButton = document.getElementById('lang-pl');
    const enButton = document.getElementById('lang-en');
    
    if (plButton && enButton) {
        plButton.onclick = () => changeLanguage('pl');
        enButton.onclick = () => changeLanguage('en');
    } else {

        const languageToggle = document.createElement('button');
        languageToggle.textContent = currentLang === 'pl' ? 'EN' : 'PL';
        languageToggle.className = 'language-toggle';
        languageToggle.onclick = () => {
            const newLang = currentLang === 'pl' ? 'en' : 'pl';
            changeLanguage(newLang);
        };
        document.body.prepend(languageToggle);
    }
});