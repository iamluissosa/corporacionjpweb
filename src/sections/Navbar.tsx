import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export const Navbar = () => {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("navbar.home"), href: "#hero" },
        { name: t("navbar.services"), href: "#services" },
        { name: t("navbar.allies"), href: "#allies" },
        // { name: t("navbar.projects"), href: "#projects" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <img
                        src={t("logo")}
                        alt={t("brand_name")}
                        className="h-10 w-auto object-contain"
                    />
                    <span className="text-2xl font-bold tracking-tighter text-white group-hover:opacity-80 transition-opacity">
                        {t("brand_prefix")} <span className="text-primary">{t("brand_suffix")}</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full">
                            {link.name}
                        </a>
                    ))}
                    <div className="ml-4">
                        <LanguageSwitcher />
                    </div>
                </nav>

                {/* CTA Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="secondary" className="gap-2 font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-600/20">
                        <Phone className="w-4 h-4" />
                        {t("navbar.contact")}
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <LanguageSwitcher />
                    <button className="text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-300 hover:text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button variant="secondary" className="w-full gap-2 mt-2 h-12 text-lg">
                                <Phone className="w-4 h-4" /> {t("navbar.contact")}
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
