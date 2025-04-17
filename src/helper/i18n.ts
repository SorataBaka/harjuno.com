import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";
const translation = async (locale: string, namespace: string[]) => {
	const props = {
		...(await serverSideTranslations(locale, namespace, { i18n }, [
			"en",
			"id",
			"jp",
		])),
	};
	return props;
};
export default translation;
