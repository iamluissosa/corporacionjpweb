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
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Schema needs to be re-created or use translation keys if we want validation messages translated dynamically.
    // For simplicity, we keep validation messages static or we can inject them if needed. 
    // Here I will use hardcoded strings for validation for now or use t() inside if I move schema inside component (not best practice for performance but simple)
    // To do it properly, we should use a function to generate schema or use t inside the schema definition if it's inside the component render or use a hook.
    // Let's put it inside for simplicity of translation access.

    const formSchema = z.object({
        name: z.string().min(2, t("contact.err_name")),
        company: z.string().min(2, t("contact.err_company")),
        email: z.string().email(t("contact.err_email")),
        phone: z.string().min(10, t("contact.err_phone")),
        service: z.string().min(1, t("contact.err_service")),
        urgency: z.string().min(1, t("contact.err_urgency")),
        message: z.string().min(10, t("contact.err_msg_short")),
    });

    type FormValues = z.infer<typeof formSchema>;

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Validar que la respuesta sea JSON (si es HTML, significa que falló el enrutamiento de Vercel)
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                console.error("Respuesta no válida de la API (posible HTML):", response.status, response.statusText);
                throw new Error("Error de conexión: El servidor devolvió una respuesta inesperada (HTML).");
            }

            const result = await response.json();

            if (!response.ok) {
                // Mostrar el error exacto que devuelve la API (ej. "Sender prohibited")
                throw new Error(result.error || result.message || 'Error al enviar el mensaje');
            }

            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error: any) {
            console.error(error);
            // Alertar con el mensaje técnico para facilitar la depuración
            alert(`Hubo un error enviando el mensaje: ${error.message || "Intente de nuevo."}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941348-c0963915719f?auto=format&fit=crop&q=80&w=2600')] bg-cover bg-center opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {t("contact.title_start")} <span className="text-secondary">{t("contact.title_highlight")}</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            {t("contact.description")}
                        </p>

                        <div className="space-y-8 pt-4">
                            <div className="flex items-center gap-5 text-white">
                                <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{t("contact.call_label")}</p>
                                    <p className="text-2xl font-bold font-mono tracking-tight">+58 424-435-5134 <br /> +58 414-407-6726 <br /> +58 249-798-7679</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 text-white">
                                <div className="w-14 h-14 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{t("contact.email_label")}</p>
                                    <p className="text-2xl font-bold tracking-tight">info@corpjp.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 text-white">
                                <div className="w-14 h-14 rounded-full bg-slate-700/30 flex items-center justify-center text-slate-400 flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{t("contact.visit_label")}</p>
                                    <p className="text-lg font-medium text-slate-200">Av. Miranda, Montalbán 2042, Carabobo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="bg-white/95 backdrop-blur shadow-2xl border-0 ring-1 ring-white/20">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-2xl text-slate-900">{t("contact.form_title")}</CardTitle>
                            <CardDescription>{t("contact.form_desc")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{t("contact.label_name")}</Label>
                                        <Input id="name" placeholder={t("contact.ph_name")} {...register("name")} className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""} />
                                        {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">{t("contact.label_company")}</Label>
                                        <Input id="company" placeholder={t("contact.ph_company")} {...register("company")} className={errors.company ? "border-red-500 focus-visible:ring-red-500" : ""} />
                                        {errors.company && <p className="text-red-500 text-xs font-medium">{errors.company.message}</p>}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{t("contact.label_email")}</Label>
                                        <Input id="email" type="email" placeholder={t("contact.ph_email")} {...register("email")} className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""} />
                                        {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">{t("contact.label_phone")}</Label>
                                        <Input id="phone" placeholder={t("contact.ph_phone")} {...register("phone")} className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""} />
                                        {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="service">{t("contact.label_service")}</Label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                className={cn(
                                                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                                                    errors.service ? "border-red-500" : ""
                                                )}
                                                {...register("service")}
                                            >
                                                <option value="">{t("contact.opt_select")}</option>
                                                <option value="automatizacion">{t("contact.opt_auto")}</option>
                                                <option value="mantenimiento">{t("contact.opt_maint")}</option>
                                                <option value="civil">{t("contact.opt_civil")}</option>
                                                <option value="aguas">{t("contact.opt_water")}</option>
                                                <option value="otros">{t("contact.opt_other")}</option>
                                            </select>
                                        </div>
                                        {errors.service && <p className="text-red-500 text-xs font-medium">{errors.service.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="urgency">{t("contact.label_urgency")}</Label>
                                        <div className="relative">
                                            <select
                                                id="urgency"
                                                className={cn(
                                                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                                                    errors.urgency ? "border-red-500" : ""
                                                )}
                                                {...register("urgency")}
                                            >
                                                <option value="">{t("contact.opt_select")}</option>
                                                <option value="normal">{t("contact.opt_normal")}</option>
                                                <option value="alta">{t("contact.opt_high")}</option>
                                                <option value="critica">{t("contact.opt_critical")}</option>
                                            </select>
                                        </div>
                                        {errors.urgency && <p className="text-red-500 text-xs font-medium">{errors.urgency.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">{t("contact.label_details")}</Label>
                                    <Textarea id="message" placeholder={t("contact.ph_details")} rows={4} {...register("message")} className={errors.message ? "border-red-500" : ""} />
                                    {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message.message}</p>}
                                </div>

                                <Button type="submit" className="w-full h-12 text-base bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg shadow-orange-600/20" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("contact.btn_sending")}
                                        </>
                                    ) : (
                                        <>
                                            {t("contact.btn_submit")} <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                                {isSuccess && (
                                    <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm text-center font-bold flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                                        <CheckCircleIcon />
                                        {t("contact.success_msg")}
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
