import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("faq.title")}</h2>
                    <p className="text-slate-600">{t("faq.subtitle")}</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="bg-white border border-slate-200 text-left px-4 rounded-lg shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-blue-200 data-[state=open]:border-blue-300">
                        <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-700 hover:no-underline">{t("faq.q1")}</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                            {t("faq.a1")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="bg-white border border-slate-200 text-left px-4 rounded-lg shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-blue-200 data-[state=open]:border-blue-300">
                        <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-700 hover:no-underline">{t("faq.q2")}</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                            {t("faq.a2")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="bg-white border border-slate-200 text-left px-4 rounded-lg shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-blue-200 data-[state=open]:border-blue-300">
                        <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-700 hover:no-underline">{t("faq.q3")}</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                            {t("faq.a3")}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};
