import { Cpu, Wrench, HardHat, Droplets, Wind, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t("services.pet_title"),
            icon: Wind,
            description: t("services.pet_desc"),
            highlight: true,
            details: [
                { title: t("services.pet_detail1_title"), text: t("services.pet_detail1_text") },
                { title: t("services.pet_detail2_title"), text: t("services.pet_detail2_text") },
                { title: t("services.pet_detail3_title"), text: t("services.pet_detail3_text") },
                { title: t("services.pet_detail4_title"), text: t("services.pet_detail4_text") }
            ]
        },
        {
            title: t("services.auto_title"),
            icon: Cpu,
            description: t("services.auto_desc"),
            highlight: false
        },
        {
            title: t("services.maint_title"),
            icon: Wrench,
            description: t("services.maint_desc"),
            highlight: false
        },
        {
            title: t("services.civil_title"),
            icon: HardHat,
            description: t("services.civil_desc"),
            highlight: false
        },
        {
            title: t("services.water_title"),
            icon: Droplets,
            description: t("services.water_desc"),
            highlight: false
        }
    ];

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">{t("services.label")}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 mt-2">{t("services.title")}</h2>
                    <p className="text-lg text-slate-600">
                        {t("services.description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`${service.highlight ? "md:col-span-2 lg:col-span-2 lg:row-span-2 h-full" : "h-full"}`}
                        >
                            <Card className={`h-full border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col ${service.highlight ? "bg-slate-900 border-slate-800 text-white" : "bg-white"}`}>
                                <CardHeader>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm ${service.highlight ? "bg-blue-600 text-white shadow-blue-900/50" : "bg-blue-50 text-blue-600"}`}>
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <CardTitle className={`text-2xl ${service.highlight ? "text-white" : "text-slate-900"}`}>{service.title}</CardTitle>
                                        {service.highlight && <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider w-fit border border-blue-500/30">{t("services.new_badge")}</span>}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className={`text-base leading-relaxed mb-6 ${service.highlight ? "text-slate-300" : "text-slate-600"}`}>
                                        {service.description}
                                    </CardDescription>

                                    {service.details && (
                                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                            {service.details.map((detail, idx) => (
                                                <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                                                    <h4 className="text-blue-400 font-bold text-sm mb-1 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4" /> {detail.title}
                                                    </h4>
                                                    <p className="text-slate-400 text-sm leading-snug">{detail.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
