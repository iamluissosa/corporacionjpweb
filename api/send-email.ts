import { Resend } from 'resend';

// Inicializar Resend con la API Key configurada en las variables de entorno de Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

// Handler compatible con entornos Node.js en Vercel
export default async function handler(req: any, res: any) {
    // 1. Configurar CORS para permitir peticiones desde el mismo dominio
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 2. Manejar peticiones OPTIONS (Preflight)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // 3. Validar método POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // 4. Extraer datos del cuerpo de la petición
    const { name, email, company, phone, service, urgency, message } = req.body;

    // 5. Validaciones básicas
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    try {
        // 6. Enviar el correo usando Resend SDK
        const data = await resend.emails.send({
            from: 'Corporacion JP Web <web@corpjp.com>', // Remitente diferenciado
            to: ['info@corpjp.com'], // Destinatario final
            replyTo: email, // Permitir responder directamente al cliente
            subject: `Nueva Solicitud: ${service} - ${company || name}`,
            // Plantilla HTML profesional
            html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; background-color: #f9fafb; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <div style="background-color: #0f172a; padding: 24px; text-align: center;">
                    <h2 style="margin: 0; color: #ffffff; font-size: 24px;">Nuevo Contacto Web</h2>
                    <p style="margin: 4px 0 0; color: #94a3b8; font-size: 14px;">Corporación JP</p>
                </div>
                
                <div style="padding: 32px;">
                    <div style="margin-bottom: 24px;">
                        <h3 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Información del Cliente</h3>
                        <p style="margin: 8px 0;"><strong>Nombre:</strong> ${name}</p>
                        <p style="margin: 8px 0;"><strong>Empresa:</strong> ${company || 'No especificada'}</p>
                        <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
                        <p style="margin: 8px 0;"><strong>Teléfono:</strong> <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></p>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <h3 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Detalles del Requerimiento</h3>
                        <p style="margin: 8px 0;"><strong>Servicio de Interés:</strong> ${service}</p>
                        <p style="margin: 8px 0;"><strong>Nivel de Urgencia:</strong> 
                            <span style="
                                display: inline-block;
                                padding: 4px 12px;
                                border-radius: 9999px;
                                font-size: 12px;
                                font-weight: bold;
                                text-transform: uppercase;
                                background-color: ${urgency === 'critica' ? '#fee2e2' : urgency === 'alta' ? '#fef9c3' : '#dcfce7'};
                                color: ${urgency === 'critica' ? '#991b1b' : urgency === 'alta' ? '#854d0e' : '#166534'};
                            ">
                                ${urgency}
                            </span>
                        </p>
                    </div>

                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <strong style="color: #475569; display: block; margin-bottom: 8px;">Mensaje:</strong>
                        <div style="white-space: pre-wrap; color: #334155;">${message}</div>
                    </div>
                </div>

                <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e5e7eb;">
                    Este mensaje fue enviado automáticamente desde el formulario de contacto de <strong>corpjp.com</strong>.
                </div>
            </div>
        </body>
        </html>
      `
        });

        if (data.error) {
            console.error('Error enviando email:', data.error);
            return res.status(400).json({ error: data.error });
        }

        return res.status(200).json({ success: true, id: data.data?.id });
    } catch (error: any) {
        console.error('Error del servidor:', error);
        return res.status(500).json({ error: error.message });
    }
}
