import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Éfeso One — Inteligência que integra, simplifica e evolui",
  description: "Soluções práticas de IA: automações, chatbots, análise de dados e integrações.",
  themeColor: "#0f0f10",
  openGraph: {
    title: "Éfeso One",
    description: "Automatize processos, atenda melhor e tome decisões com IA.",
    type: "website",
    url: "https://efeso1.com.br",
  },
  metadataBase: new URL("https://efeso1.com.br"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <Script id="ga4">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        )}
        {process.env.NEXT_PUBLIC_PIXEL_ID && (
          <Script id="meta-pixel">{`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_PIXEL_ID}');
            fbq('track', 'PageView');
          `}</Script>
        )}
        {process.env.NEXT_PUBLIC_PIXEL_ID && (
          <noscript>
            {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_PIXEL_ID}&ev=PageView&noscript=1" />`}
          </noscript>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
