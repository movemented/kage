import "./globals.css";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/partials/Header";
import { Footer } from "@/partials/Footer";

const APP_NAME = "Kanashimi";
const APP_DEFAULT_TITLE = "Kanashimi | Anime Streaming";
const APP_DESCRIPTION = "Stream your favourite anime with ease and no ads";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  manifest: "/manifest.json",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
};

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dracula" lang="en" className={roboto.className}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X9RZ58XPH1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X9RZ58XPH1');`}
      </Script>
      <Script id="clarity" strategy="afterInteractive">
        {`<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "l3pnvnd7wb");
</script>`}
      </Script>
      <body>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
