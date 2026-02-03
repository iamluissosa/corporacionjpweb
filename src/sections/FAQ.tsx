import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";

export const FAQ = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2>
                    <p className="text-slate-600">Resolvemos sus dudas sobre nuestros procesos y alcance operativo.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="bg-white border border-slate-200 text-left px-4 rounded-lg shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-blue-200 data-[state=open]:border-blue-300">
                        <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-700 hover:no-underline">¿Cuál es su alcance geográfico?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                            Nuestra sede principal se encuentra en Montalbán, Carabobo, pero contamos con la capacidad logística y técnica para atender proyectos industriales en todo el territorio nacional, con énfasis en la región central (Carabobo, Aragua) y occidente.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="bg-white border border-slate-200 text-left px-4 rounded-lg shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-blue-200 data-[state=open]:border-blue-300">
                        <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-700 hover:no-underline">¿Atienden emergencias o paradas de planta?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                            Sí. Entendemos la criticidad de la continuidad operativa industrial. Ofrecemos soporte prioritario y equipos de guardia especializados para paradas de planta programadas o emergencias técnicas imprevistas, asegurando una respuesta rápida y efectiva para minimizar tiempos muertos.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="bg-white border border-slate-200 text-left px-4 rounded-lg shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-blue-200 data-[state=open]:border-blue-300">
                        <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-700 hover:no-underline">¿Suministran personal especializado (Outsourcing)?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                            Absolutamente. Ofrecemos servicios de outsourcing con personal técnico certificado en diversas áreas (electricidad, mecánica, instrumentación, soldadura), garantizando que su empresa cuente con el talento idóneo para sus operaciones temporales o permanentes, bajo nuestra supervisión administrativa y técnica.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};
