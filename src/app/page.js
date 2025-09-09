import Image from "next/image";

export default function Home() {
	return (
		<div className="w-full lg:w-[75%] h-screen m-auto flex flex-col">
			<div className="flex items-center justify-center w-full h-auto lg:pt-12 pt-14 lg:mt-7">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/9_ZkiKbA5lU?si=eso1nJL98HxheV-P"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					className=" aspect-video lg:w-[75%] h-auto rounded-2xl"
				></iframe>
			</div>
			<div className="flex lg:flex-row flex-col lg:mt-50 mt-14 items-center justify-center">
				<a href="https://apps.apple.com/us/app/lowes-home-improvement/id457954781">
					<Image
						src={"/apple.webp"}
						alt="Apple Store"
						width={100}
						height={30}
						className=" aspect-auto w-[300px] lg:mt-auto"
					/>
				</a>

				<a href="https://play.google.com/store/apps/details?id=com.lowes.android&hl=en_US&pli=1">
					<Image
						src={"/google.webp"}
						alt="Play Store"
						width={100}
						height={30}
						className=" aspect-auto w-[285px] mt-16 lg:ml-15 lg:mt-auto"
					/>
				</a>
			</div>
		</div>
	);
}
