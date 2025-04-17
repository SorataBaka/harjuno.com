import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { LuStretchHorizontal } from "react-icons/lu";
import { useRouter } from "next/router";
export interface TemplateParameters {
	projectName: string;
	description: string;
	url: string;
	icon: "github" | "others";
}
const ProjectTemplate: FC<TemplateParameters> = ({
	projectName,
	description,
	url,
	icon,
}) => {
	const router = useRouter();
	return (
		<div
			className="bg-white/30 rounded-3xl w-full min-h-[100px] py-3 px-5 flex flex-row align-middle justify-between hover:cursor-pointer space-x-3 pointer-events-auto shadow-[0px_0px_100px_10px_rgba(255,255,255,0.2)] lg:min-h-[200px]"
			onClick={() => {
				router.push(url);
			}}
		>
			{icon === "github" ? (
				<AiFillGithub
					size={50}
					className="flex flex-col align-middle justify-center my-auto"
				/>
			) : (
				<LuStretchHorizontal
					size={50}
					className="flex flex-col align-middle justify-center my-auto"
				/>
			)}
			<div className="flex flex-col align-middle justify-center w-full space-y-3">
				<h2 className="font-mono font-bold text-xl">{projectName}</h2>
				<h3 className="font-mono">{description}</h3>
			</div>
		</div>
	);
};

export default ProjectTemplate;
