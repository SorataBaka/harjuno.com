import Image from "next/image";
import { NextSeo } from "next-seo";
import ProjectTemplate, { TemplateParameters } from "@/components/showcase";
import { useRef } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useRouter } from "next/router";
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

export default function Home() {
	const nextpageref = useRef<null | HTMLDivElement>(null);
	const contactref = useRef<null | HTMLDivElement>(null);
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
				<section className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10">
					<Image
						alt="Profile Picture"
						src={"/profile-picture.JPG"}
						width={250}
						height={250}
						className="rounded-full mx-auto shadow-[0px_0px_900px_30px_rgba(255,255,255,0.3)]"
					/>
					<h1 className="font-mono text-white text-center text-3xl mt-5 font-bold">
						Christian Harjuno
					</h1>
					<p className="font-mono text-white text-center mt-5 text-xl">
						Student & Web Developer
					</p>
					<button
						className="text-white mt-10 w-1/2 border mx-auto rounded-2xl p-4 font-mono"
						onClick={() => {
							nextpageref.current?.scrollIntoView({
								behavior: "smooth",
								block: "start",
								inline: "start",
							});
						}}
					>
						Read More
					</button>
				</section>
				<section
					className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10 text-white"
					ref={nextpageref}
				>
					<h2 className="font-mono text-3xl text-center font-bold">
						Who am i?
					</h2>
					<p className="font-mono text-xl text-center mt-5 ">
						Amateur Web Developer attending Kushiro Kosen as a <br /> Japanese
						Government scholarship student. <br /> <br />
						Currently active developing frontend and backend applications using
						NodeJS. <br /> <br />I love to automate small insignificant tasks to
						make things more streamline and efficient. <br /> <br />
						Always actively learning new things and experimenting to expand my
						knowledge in programming.
					</p>
				</section>
				<section className="bg-gray-950 min-h-screen w-full flex flex-col align-middle justify-center p-10 text-white">
					<h2 className="font-mono text-3xl text-center mb-5 font-bold">
						Tools
					</h2>
					<div className="grid grid-cols-2">
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
					<h2 className="font-mono text-3xl text-center mb-5 font-bold">
						Projects
					</h2>
					<div className="flex flex-col w-full space-y-5">
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
					<h2 className="font-mono text-3xl text-center mb-5 font-bold">
						Socials
					</h2>
					<div className="grid grid-cols-2">
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
							onClick={() => {
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
					<h2 className="font-mono text-3xl text-center mb-5 font-bold">
						Contact Me
					</h2>
					<form
						action="mailto:mail@tianharjuno.com"
						className="space-y-3 shadow-[0px_0px_100px_1px_rgba(255,255,255,0.1)]"
						method="get"
						encType="text/plain"
					>
						<input
							type="email"
							placeholder="Email"
							className="w-full bg-transparent text-white p-2 border rounded-lg"
						/>
						<input
							type="text"
							placeholder="Name"
							className="w-full bg-transparent text-white p-2 border rounded-lg"
						/>
						<input
							type="text"
							placeholder="Subject"
							className="w-full bg-transparent text-white p-2 border rounded-lg"
						/>
						<textarea
							placeholder="Message"
							cols={30}
							rows={10}
							className="w-full bg-transparent text-white p-2 border rounded-lg"
						/>
						<input
							type="submit"
							className="text-white mt-10 w-full border mx-auto rounded-xl p-3 m-auto font-mono"
							value={"Send"}
						/>
					</form>
				</section>
			</main>
		</>
	);
}
