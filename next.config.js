/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
	i18n,
	reactStrictMode: true,
	compress: true,
	poweredByHeader: false,
	output: "standalone",
	env: {
		TURNSTILE_SITE_KEY: process.env.TURNSTILE_SITE_KEY,
	},
};

module.exports = nextConfig;
