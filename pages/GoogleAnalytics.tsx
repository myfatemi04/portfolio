import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* https://nextjs.org/docs/messages/next-script-for-ga */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ER95VRWQ8L"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
	
		gtag('config', 'G-ER95VRWQ8L');`}
      </Script>
    </>
  );
}
