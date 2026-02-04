import { CheckCircle2, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative order-2 md:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                            <img
                                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070"
                                alt="Factory Plant"
                                className="w-full h-full object-cover min-h-[400px]"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs z-20">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <MapPin className="text-blue-700 w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("about.location_title")}</p>
                                    <p className="font-bold text-slate-900 text-lg">{t("about.location")}</p>
                                </div>
                            </div>
                        </div>
                        {/* Dot pattern decoration */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:8px_8px] z-0"></div>
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                {t("about.title")}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t("about.description")}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-1 gap-4">
                            {[
                                t("about.check1"),
                                t("about.check2"),
                                t("about.check3"),
                                t("about.check4")
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                    <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
