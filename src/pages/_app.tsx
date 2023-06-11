import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo
				titleTemplate="Christian Harjuno - %s"
				defaultTitle="Christian Harjuno - Website"
				description="Web Developer who is interested in automating things and simplifying process."
				openGraph={{
					siteName: "Christian Harjuno",
					title: "Christian Harjuno",
					description:
						"Web Developer who is interested in automating things and simplifying process.",
					url: "https://tianharjuno.com",
					locale: "en_IE",
					type: "website",
				}}
				twitter={{
					site: "https://tianharjuno.com",
					cardType: "summary",
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}
