import { Cpu, Wrench, HardHat, Droplets, Wind, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

const services = [
    {
        title: "Mantenimiento de Bandas Aéreas PET",
        icon: Wind,
        description: "Servicio preventivo especializado para garantizar la asepsia y eficiencia en líneas de transporte aéreo de botellas.",
        highlight: true,
        details: [
            { title: "Limpieza y Lubricación", text: "Remoción de agentes contaminantes sin dañar la banda." },
            { title: "Inspección de Componentes", text: "Revisión de guías de cuello, laterales y sistemas de soplado." },
            { title: "Ajustes Automáticos", text: "Calibración de actuadores eléctricos y pistones neumáticos." },
            { title: "Lubricación Técnica", text: "Engrasado de precisión cada 750 horas para evitar desgaste." }
        ]
    },
    {
        title: "Automatización & Control",
        icon: Cpu,
        description: "Implementación y programación de PLC (Siemens, Allen-Bradley), sistemas SCADA integrados y Variadores de Frecuencia para control preciso.",
        highlight: false
    },
    {
        title: "Mantenimiento Industrial",
        icon: Wrench,
        description: "Planes de mantenimiento preventivo y correctivo para cintas transportadoras, calderas industriales y sistemas neumáticos complejos.",
        highlight: false
    },
    {
        title: "Obras Civiles",
        icon: HardHat,
        description: "Ejecución de galpones industriales, movimiento de tierras, cimentaciones y sistemas de iluminación técnica profesional.",
        highlight: false
    },
    {
        title: "Aguas & Servicios",
        icon: Droplets,
        description: "Diseño, instalación y mantenimiento de plantas de tratamiento de aguas, así como perforación y gestión de pozos profundos.",
        highlight: false
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Nuestras Soluciones</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 mt-2">Capacidades Técnicas</h2>
                    <p className="text-lg text-slate-600">
                        Abarcamos todas las áreas críticas de su planta con un enfoque multidisciplinario, tecnología de punta y personal certificado.
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
                                        {service.highlight && <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider w-fit border border-blue-500/30">Nuevo Servicio</span>}
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
