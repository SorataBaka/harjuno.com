/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
	i18n: {
		...i18n,
		localeDetection: false,
	},
	reactStrictMode: true,
	compress: true,
	output: "standalone",
	env: {
		TURNSTILE_SITE_KEY: process.env.TURNSTILE_SITE_KEY,
	},
	images: {
		qualities: [75, 80],
	},
};

module.exports = nextConfig;
