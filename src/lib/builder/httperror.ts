export interface HttpErrorParam {
	message: string;
	code: number;
	status: boolean;
	data: null | any;
}
export default class HTTPError extends Error {
	message: string;
	code: number;
	status: boolean;
	data: any | null;
	constructor(param: HttpErrorParam) {
		super(param.message || "INTERNALSERVERERROR");
		this.message = param.message || "INTERNALSERVERERROR";
		this.code = param.code ? param.code : 500;
		this.status = param.status ? param.status : false;
		this.data = param.data ? param.data : null;
	}
}
