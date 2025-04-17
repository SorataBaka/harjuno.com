import { NextApiRequest, NextApiResponse } from "next";
import HTTPError from "@/lib/builder/httperror";
import contact from "@/lib/obj/contact";
import emailjs from "@emailjs/nodejs";
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method?.toUpperCase() !== "POST")
			throw new HTTPError({
				code: 400,
				data: null,
				message: "REQUESTMETHODERROR",
				status: false,
			});
		const { error, value } = contact.validate(req.body);
		if (error !== undefined)
			throw new HTTPError({
				code: 400,
				data: error,
				message: "BADREQUEST",
				status: false,
			});

		const cfFormData = new FormData();
		cfFormData.append("secret", process.env.TURNSTILE_SECRET_KEY as string);
		cfFormData.append("response", value.token);
		cfFormData.append("remoteip", req.headers["x-forwarded-for"] as string);
		const verifyToken = await fetch(
			"https://challenges.cloudflare.com/turnstile/v0/siteverify",
			{
				method: "POST",
				body: cfFormData,
			}
		);
		const verifyTokenResult = await verifyToken.json();
		if (!verifyTokenResult.success)
			throw new HTTPError({
				code: 403,
				data: null,
				message: "FORBIDDEN",
				status: false,
			});
		const mailbodyrequest = {
			from: value.name,
			subject: value.subject,
			email: value.email,
			message: value.message,
		};
		const sentemail = await emailjs
			.send(
				process.env.MAIL_SERVICE_ID as string,
				process.env.MAIL_TEMPLATE_ID as string,
				mailbodyrequest,
				{
					publicKey: process.env.MAIL_USER_ID as string,
					privateKey: process.env.MAIL_ACCESS_TOKEN as string,
				}
			)
			.catch((e) => e);
		if (sentemail.status !== 200)
			throw new HTTPError({
				code: sentemail?.status || 500,
				data: null,
				message: sentemail.text,
				status: false,
			});

		return res.status(200).json({
			code: 200,
			status: true,
			message: "OK",
			data: sentemail,
		});
	} catch (e: any) {
		return res.status(500).json({
			code: e.code,
			status: e.status,
			message: e.message,
			data: e.data,
		});
	}
}
