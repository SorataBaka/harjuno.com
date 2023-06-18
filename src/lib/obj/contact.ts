import joi from "joi";
export default joi.object({
	email: joi.string().email().required(),
	name: joi.string().min(3).max(30).required(),
	subject: joi.string().min(5).max(20).required(),
	message: joi.string().min(10).max(400).required(),
	token: joi.string().required(),
});
