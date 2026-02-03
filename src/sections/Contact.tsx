import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { cn } from "../lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "El nombre es requerido"),
    company: z.string().min(2, "La empresa es requerida"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(10, "Teléfono inválido"),
    service: z.string().min(1, "Seleccione un servicio"),
    urgency: z.string().min(1, "Seleccione la urgencia"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941348-c0963915719f?auto=format&fit=crop&q=80&w=2600')] bg-cover bg-center opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            ¿Listo para optimizar su <span className="text-secondary">operación industrial?</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Contáctenos hoy mismo para una evaluación técnica sin compromiso. Nuestro equipo de ingenieros está listo para diseñar la solución que su planta necesita.
                        </p>

                        <div className="space-y-8 pt-4">
                            <div className="flex items-center gap-5 text-white">
                                <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Llámenos directamente</p>
                                    <p className="text-2xl font-bold font-mono tracking-tight">+58 424-435-5134 <br /> +58 414-407-6726</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 text-white">
                                <div className="w-14 h-14 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Envíenos un correo</p>
                                    <p className="text-2xl font-bold tracking-tight">info@corpjp.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 text-white">
                                <div className="w-14 h-14 rounded-full bg-slate-700/30 flex items-center justify-center text-slate-400 flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Visítenos</p>
                                    <p className="text-lg font-medium text-slate-200">Av. Miranda, Montalbán 2042, Carabobo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="bg-white/95 backdrop-blur shadow-2xl border-0 ring-1 ring-white/20">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-2xl text-slate-900">Solicitar Cotización</CardTitle>
                            <CardDescription>Complete el formulario y le responderemos en menos de 24h.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nombre Completo</Label>
                                        <Input id="name" placeholder="Juan Pérez" {...register("name")} className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""} />
                                        {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Empresa</Label>
                                        <Input id="company" placeholder="Nombre de su empresa" {...register("company")} className={errors.company ? "border-red-500 focus-visible:ring-red-500" : ""} />
                                        {errors.company && <p className="text-red-500 text-xs font-medium">{errors.company.message}</p>}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Corporativo</Label>
                                        <Input id="email" type="email" placeholder="juan@empresa.com" {...register("email")} className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""} />
                                        {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Teléfono</Label>
                                        <Input id="phone" placeholder="+58 412 1234567" {...register("phone")} className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""} />
                                        {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="service">Área de Interés</Label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                className={cn(
                                                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                                                    errors.service ? "border-red-500" : ""
                                                )}
                                                {...register("service")}
                                            >
                                                <option value="">Seleccione...</option>
                                                <option value="automatizacion">Automatización & Control</option>
                                                <option value="mantenimiento">Mantenimiento Industrial</option>
                                                <option value="civil">Obras Civiles</option>
                                                <option value="aguas">Aguas & Servicios</option>
                                                <option value="otros">Otros</option>
                                            </select>
                                        </div>
                                        {errors.service && <p className="text-red-500 text-xs font-medium">{errors.service.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="urgency">Urgencia</Label>
                                        <div className="relative">
                                            <select
                                                id="urgency"
                                                className={cn(
                                                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                                                    errors.urgency ? "border-red-500" : ""
                                                )}
                                                {...register("urgency")}
                                            >
                                                <option value="">Seleccione...</option>
                                                <option value="normal">Normal</option>
                                                <option value="alta">Alta</option>
                                                <option value="critica">Crítica (Parada de Planta)</option>
                                            </select>
                                        </div>
                                        {errors.urgency && <p className="text-red-500 text-xs font-medium">{errors.urgency.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Detalles del Requerimiento</Label>
                                    <Textarea id="message" placeholder="Describa brevemente su necesidad..." rows={4} {...register("message")} className={errors.message ? "border-red-500" : ""} />
                                    {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message.message}</p>}
                                </div>

                                <Button type="submit" className="w-full h-12 text-base bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg shadow-orange-600/20" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Solicitud <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                                {isSuccess && (
                                    <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm text-center font-bold flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                                        <CheckCircleIcon />
                                        ¡Mensaje enviado con éxito!
                                    </div>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

function CheckCircleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    )
}
