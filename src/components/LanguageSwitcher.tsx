import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors bg-white/10 px-3 py-1.5 rounded-full border border-white/20"
        >
            <Globe size={16} />
            <span className="text-sm font-medium uppercase">{i18n.language === 'es' || i18n.language.startsWith('es') ? 'ES' : 'EN'}</span>
        </button>
    );
};
