import Image from "next/image";
import { NextSeo } from "next-seo";
import ProjectTemplate, { TemplateParameters } from "@/components/showcase";
import { useRef, FC, useState, useEffect } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useRouter } from "next/router";
import translation from "@/helper/i18n";
import { useTranslation } from "next-i18next";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import {
	SiTypescript,
	SiNextdotjs,
	SiMongodb,
	SiRedis,
	SiRailway,
	SiVercel,
	SiExpress,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import {
	FaNodeJs,
	FaDocker,
	FaGitAlt,
	FaUbuntu,
	FaReact,
	FaDigitalOcean,
} from "react-icons/fa";

interface Props {
	locale: string;
}
const Home: FC<Props> = ({ locale }) => {
	const { t } = useTranslation(["index"]);
	const topsectionref = useRef<null | HTMLDivElement>(null);
	const nextpageref = useRef<null | HTMLDivElement>(null);
	const contactref = useRef<null | HTMLDivElement>(null);
	const [isIntersecting, setIsIntersecting] = useState(true);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting);
		});
		observer.observe(topsectionref.current as HTMLDivElement);
		return () => observer.disconnect();
	}, []);
	const router = useRouter();
	const icons = [
		SiTypescript,
		SiNextdotjs,
		SiMongodb,
		SiRedis,
		SiRailway,
		SiVercel,
		SiExpress,
		TbBrandVscode,
		AiFillGithub,
		IoLogoJavascript,
		FaNodeJs,
		FaDocker,
		FaGitAlt,
		FaUbuntu,
		FaReact,
		FaDigitalOcean,
	];
	const socials = [
		{
			Logo: BsGithub,
			link: "https://www.github.com/SorataBaka",
		},
		{
			Logo: BsInstagram,
			link: "https://www.instagram.com/tian.harjuno/",
		},
		{
			Logo: BsLinkedin,
			link: "https://www.linkedin.com/in/christian-harjuno",
		},
	];
	const projects: TemplateParameters[] = [
		{
			description: "Indonesia Covid-19 statistics GraphQL Endpoint",
			projectName: "CovidGraphQL",
			url: "https://github.com/SorataBaka/CovidGraphQL",
			icon: "github",
		},
		{
			description: "Server management tool for Sashimi Discord Server",
			projectName: "Akame-bot",
			url: "https://github.com/SorataBaka/Akame-V2",
			icon: "github",
		},
		{
			description:
				"Google Calendar Import tool for Bina Nusantara University schedule",
			projectName: "Binus-Calendar-Manager",
			url: "https://github.com/SorataBaka/Binus-Calendar-Manager",
			icon: "github",
		},
		{
			description: "Pomodoro Timer with customizable time rules",
			projectName: "better-pomodoro",
			url: "https://github.com/SorataBaka/better-pomodoro",
			icon: "github",
		},
		{
			description: "Anonymous Confession page for JASSO Language School",
			projectName: "JASSOFess",
			url: "https://github.com/SorataBaka/JASSOFessFE",
			icon: "github",
		},
		{
			description: "AI Powered medical insurance compatibility finder",
			projectName: "Insurancelia",
			url: "https://devpost.com/software/insurancelia",
			icon: "others",
		},
		{
			description: "Co-founder of Indonesia based software house",
			projectName: "Nusantara Wing Labs",
			url: "https://nwl.works/en",
			icon: "others",
		},
	];
	return (
		<>
			<NextSeo title="Homepage" />
			<main className="flex flex-col min-w-full">
				{!isIntersecting && (
					<BsFillArrowUpCircleFill
						size={45}
						className="fixed bg-slate-400 bg-opacity-40 shadow-[0px_0px_100px_10px_rgba(0,0,0,1)] rounded-full bottom-5 right-5 border-white border hover:cursor-pointer "
						onClick={(e) => {
							e.preventDefault();
							topsectionref.current?.scrollIntoView({
								behavior: "smooth",
								block: "start",
								inline: "start",
							});
						}}
					/>
				)}
				{isIntersecting && (
					<select
						name="Language"
						id="lang"
						className="w-min h-10 rounded-full align-middle bg-transparent text-white font-mono self-start text-2xl border-none outline-none fixed right-5 top-5"
						value={locale.toLowerCase()}
						onChange={(e) => {
							router.replace("/", {}, { locale: e.target.value });
						}}
					>
						<option
							className="bg-black font-mono border-none outline-none"
							value="en"
						>
							EN
						</option>
						<option
							value="id"
							className="bg-black font-mono border-none outline-none"
						>
							ID
						</option>
						<option
							value="jp"
							className="bg-black font-mono border-none outline-none"
						>
							JP
						</option>
					</select>
				)}
				<section
					className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10"
					ref={topsectionref}
				>
					<Image
						alt="Profile Picture"
						priority={true}
						src={"/profile-picture.JPG"}
						width={250}
						height={250}
						className="rounded-full mx-auto shadow-[0px_0px_900px_30px_rgba(255,255,255,0.3)]"
					/>
					<h1 className="font-mono text-white text-center text-3xl mt-5 font-bold lg:text-5xl">
						{t("name.h1")}
					</h1>
					<p className="font-mono text-white text-center mt-5 text-xl lg:text-3xl">
						{t("shortdesc.p")}
					</p>
					<button
						className="text-white mt-10 w-1/2 border mx-auto rounded-2xl p-4 font-mono"
						onClick={(e) => {
							e.preventDefault();
							nextpageref.current?.scrollIntoView({
								behavior: "smooth",
								block: "start",
								inline: "start",
							});
						}}
					>
						{t("readmore.button")}
					</button>
				</section>
				<section
					className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10 text-white"
					ref={nextpageref}
				>
					<h2 className="font-mono text-3xl text-center mb-10 font-bold lg:text-5xl">
						{t("whoami.h2")}
					</h2>
					<p className="font-mono text-xl text-center mt-5 lg:text-3xl">
						{t("whoami.p")}
					</p>
				</section>
				<section className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10 text-white">
					<h2 className="font-mono text-3xl text-center mb-10 font-bold lg:text-5xl">
						{t("tools.h2")}
					</h2>
					<div className="grid grid-cols-2 lg:grid-cols-8">
						{icons.map((Icon, index) => {
							return (
								<Icon
									size={100}
									key={index}
									className="mx-auto my-5 shadow-[0px_0px_1000px_10px_rgba(255,255,255,0.2)] bg-transparent"
								/>
							);
						})}
					</div>
				</section>
				<section className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10 text-white">
					<h2 className="font-mono text-3xl text-center mb-10 font-bold lg:text-5xl">
						{t("projects.h2")}
					</h2>
					<div className="flex flex-col w-full space-y-5 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-10">
						{projects.map((project, index) => {
							return (
								<ProjectTemplate
									description={project.description}
									icon={project.icon}
									projectName={project.projectName}
									url={project.url}
									key={index}
								/>
							);
						})}
					</div>
				</section>
				<section className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10 text-white">
					<h2 className="font-mono text-3xl text-center mb-10 font-bold lg:text-5xl">
						{t("socials.h2")}
					</h2>
					<div className="grid grid-cols-2 lg:grid-cols-4">
						{socials.map((Social, index) => {
							return (
								<Social.Logo
									size={70}
									key={index}
									className="mx-auto my-10 hover:cursor-pointer shadow-[0px_0px_100px_10px_rgba(255,255,255,0.3)]"
									onClick={() => {
										router.push(Social.link);
									}}
								/>
							);
						})}
						<FiMail
							size={70}
							className="mx-auto my-10 hover:cursor-pointer shadow-[0px_0px_100px_10px_rgba(255,255,255,0.3)]"
							onClick={(e) => {
								e.preventDefault();
								contactref.current?.scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "start",
								});
							}}
						/>
					</div>
				</section>
				<section
					className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10 text-white"
					ref={contactref}
				>
					<h2 className="font-mono text-3xl text-center mb-10 font-bold lg:text-5xl">
						{t("contactme.h2")}
					</h2>
					<form
						action="mailto:mail@tianharjuno.com"
						className="space-y-3 shadow-[0px_0px_100px_1px_rgba(255,255,255,0.1)] md:w-1/2 md:mx-auto"
						method="get"
						encType="text/plain"
					>
						<input
							type="email"
							placeholder={t("contactme.email") as string}
							className="w-full bg-transparent text-white p-2 border rounded-lg"
						/>
						<input
							type="text"
							placeholder={t("contactme.name") as string}
							className="w-full bg-transparent text-white p-2 border rounded-lg"
						/>
						<input
							type="text"
							placeholder={t("contactme.subject") as string}
							className="w-full bg-transparent text-white p-2 border rounded-lg"
						/>
						<textarea
							placeholder={t("contactme.message") as string}
							cols={30}
							rows={10}
							className="w-full bg-transparent text-white p-2 border rounded-lg"
						/>
						<input
							type="submit"
							className="text-white mt-10 w-full border mx-auto rounded-xl p-3 m-auto font-mono"
							value={t("contactme.submit") as string}
						/>
					</form>
				</section>
			</main>
		</>
	);
};
export default Home;
export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await translation(locale, ["index"])),
			locale,
		},
	};
}
