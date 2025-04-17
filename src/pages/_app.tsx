import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<ToastContainer
				theme="dark"
				position="top-right"
				autoClose={3000}
				limit={1}
				pauseOnFocusLoss={false}
				pauseOnHover={false}
				closeOnClick={true}
			/>
			<DefaultSeo
				titleTemplate="Christian Harjuno - %s"
				defaultTitle="Christian Harjuno - Website"
				description="Students & Web Developer"
				canonical="https://tianharjuno.com"
				openGraph={{
					siteName: "Christian Harjuno",
					title: "Christian Harjuno",
					description:
						"Web Developer who is interested in automating things and simplifying process.",
					url: "https://tianharjuno.com",
					locale: "en_IE",
					type: "website",
					images: [{ url: "https://tianharjuno.com/thumbnail.jpg" }],
				}}
				twitter={{
					site: "https://tianharjuno.com",
					cardType: "summary",
				}}
			/>
			<Component {...pageProps} />
		</>
	);
};
export default appWithTranslation(App);
