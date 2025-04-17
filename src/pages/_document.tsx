import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Footer from "@/components/footer";
export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-LHC78WB0W7"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LHC78WB0W7');
          `}
				</Script>
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
