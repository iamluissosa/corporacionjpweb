import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <a href="#" className="inline-block group">
                            <span className="text-2xl font-bold tracking-tighter text-white group-hover:opacity-90 transition-opacity">
                                {t("brand_prefix", { defaultValue: "Corporacion" })} <span className="text-primary">{t("brand_suffix", { defaultValue: "JP" })}</span>
                            </span>
                        </a>
                        <p className="max-w-md text-sm leading-relaxed text-slate-400">
                            {t("footer.description")}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">{t("footer.quick_links")}</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#hero" className="hover:text-primary transition-colors">{t("navbar.home")}</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">{t("about.title")}</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">{t("navbar.services")}</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors">{t("navbar.projects")}</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">{t("navbar.contact")}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">{t("footer.contact_title")}</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>Av. Miranda, Montalbán 2042, Carabobo, Venezuela</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <span className="hover:text-white transition-colors cursor-pointer">+58 424-435-5134 / +58 414-407-6726 / +58 249-798-7679</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                <span className="hover:text-white transition-colors cursor-pointer">info@corpjp.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
                    <p>© 2026 {t("brand_prefix")} {t("brand_suffix")}. {t("footer.rights")}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
                        <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
