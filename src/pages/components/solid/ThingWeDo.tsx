import { createEffect } from "solid-js";
import useAnimate from "./scrollHook";

export default function ThingWeDo({title, description}: {title: string, description: string}) {
	let div: HTMLElement | undefined;
	const [setEl, _] = useAnimate("active-scroll", div as HTMLElement);
	createEffect(() => {
		setEl?.(div as any)
	})
	
  return (
	<article ref={div as any} class="bg-gray-50 p-4 w-fit anim-fade-right twd rounded-xl shadow-gray-400 shadow-md">
		<header class="text-lg font-semibold mb-2">
			{title}
		</header>
		<p>
			{description}
		</p>
	</article>
  )
}
