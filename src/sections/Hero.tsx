import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-slate-950 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020176-8c01d0c41094?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        {t("hero.badge")}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        {t("hero.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t("hero.title_highlight")}</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                        {t("hero.description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="text-base font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-blue-900/50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t("hero.cta_primary")} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-base border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t("hero.cta_secondary")}
                        </Button>
                    </div>

                    <div className="flex items-center gap-6 pt-4 text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-4 h-4" /> {t("hero.iso")}</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-4 h-4" /> {t("hero.support")}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 bg-slate-900/50 backdrop-blur-sm">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
                            alt="Industrial Worker"
                            className="w-full h-auto object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                        />

                        {/* Floating Badges */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-8 left-8 bg-slate-950/90 border border-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-xl backdrop-blur-md"
                        >
                            <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-semibold">{t("hero.status")}</p>
                                <p className="text-white font-bold">{t("hero.certified")}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-8 right-8 bg-blue-600/90 p-4 rounded-xl shadow-xl backdrop-blur-md text-white"
                        >
                            <p className="text-xs opacity-80 uppercase font-semibold">{t("hero.efficiency")}</p>
                            <p className="text-2xl font-bold">98.5%</p>
                        </motion.div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl"></div>
                </motion.div>
            </div>
        </section>
    );
};
