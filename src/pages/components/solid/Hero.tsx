import { createEffect } from "solid-js";
import useAnimate from "./scrollHook";

export default function Hero() {
	let svg: HTMLElement | undefined;
	let div: HTMLElement | undefined;

	const [setEl, _] = useAnimate("active-scroll", svg as HTMLElement,);

	createEffect(() => {
		setEl?.(svg as any);
		setTimeout(() => {
			setEl?.(div as any);
		}, 0)
	})


	return (
		<section id="hero" class="hero flex gap-8 items-center justify-center">
			<div class="flex xl:flex-row flex-col gap-16 xl:gap-0 px-8">
				<div ref={div as HTMLDivElement} class="left xl:items-start items-center anim-fade-left flex gap-8 flex-col">
					<h1 class="title ">
						We will make your Ideas
						into Web and Native Apps
					</h1>
					<h2 class="text-gray-700 text-lg ">
						You won't have to worry about the burdens of managing a team. We cover the whole process and deliver what you asked for.
					</h2>
					<div class="anchors flex-wrap justify-center flex gap-4 ">
						<a href="https://calendly.com/code-king/plan" class="cursor-pointer border-lred border-2 font-semibold text-lred rounded-full px-4 py-2 hover:text-white hover:bg-lred">Schedule A Meeting</a>
						<a href="" class="px-4 py-2 hover:text-lred font-semibold text-ldarkblue">Get to know the Team</a>
					</div>
				</div>
				<div class="right pr-5">
					<img ref={svg as any} class="anim-fade-right" src="/responsive.svg" alt="why am i here? press ctrl+shift+c and go to network, reload, what's the error?" />
				</div>
			</div>
		</section>
	)
}
