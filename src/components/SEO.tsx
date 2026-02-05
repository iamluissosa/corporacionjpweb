import { Helmet } from 'react-helmet-async';

export const SEO = () => {
    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>Corporación JP | Servicios Industriales y Automatización en Venezuela</title>
            <meta name="description" content="Líderes en mantenimiento industrial, automatización (PLC/SCADA), obras civiles y outsourcing en Carabobo. Aliados de Protinal y Coca-Cola FEMSA." />
            <meta name="keywords" content="Mantenimiento Industrial Venezuela, Automatización Industrial Carabobo, PLC Siemens Allen Bradley, Bandas Transportadoras PET, Servicios Industriales Montalbán, Ingeniería Civil Industrial, Outsourcing de Personal Técnico" />
            <meta name="author" content="Corporación JP" />

            {/* Dublin Core / Other */}
            <meta name="publisher" content="Corporación JP" />
            <meta name="creator" content="Corporación JP" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.corpjp.com" />
            <meta property="og:title" content="Corporación JP - Soluciones Industriales Integrales" />
            <meta property="og:description" content="Ingeniería, Mantenimiento y Automatización de alto nivel. Garantizamos la continuidad operativa de tu planta." />
            <meta property="og:site_name" content="Corporación JP" />
            <meta property="og:locale" content="es_VE" />
            <meta property="og:image" content="https://www.corpjp.com/opengraph-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Ingenieros de Corporación JP en planta" />

            {/* Twitter (implicit support via Open Graph usually sufficient, but nice to have) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Corporación JP - Soluciones Industriales Integrales" />
            <meta name="twitter:description" content="Ingeniería, Mantenimiento y Automatización de alto nivel. Garantizamos la continuidad operativa de tu planta." />
            <meta name="twitter:image" content="https://www.corpjp.com/opengraph-image.png" />

            {/* Robots */}
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

            {/* Canonical */}
            <link rel="canonical" href="https://www.corpjp.com" />
        </Helmet>
    );
};
