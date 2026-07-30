
import { useTranslation } from "react-i18next";

export const Allies = () => {
    const { t } = useTranslation();

    const clients = [
        "Protinal", "Alpla", "Coca-Cola FEMSA", "Firestone", "Unilever", "Tubrica", "Alimentos Merú", "Embutidos Zeus"
    ];

    return (
        <section id="allies" className="py-12 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-slate-500 mb-8 tracking-widest uppercase">{t("allies.title")}</p>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
                    {clients.map((client) => (
                        <div key={client} className="text-xl md:text-2xl font-bold text-slate-300 hover:text-blue-700 transition-colors cursor-default select-none grayscale hover:grayscale-0">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
