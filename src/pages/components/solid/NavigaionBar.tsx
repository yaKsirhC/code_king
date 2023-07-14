import { createSignal } from "solid-js";

export default function NavigaionBar() {
	let navOp: HTMLDivElement | undefined;
	const [is, setVis] = createSignal(false)

	function toggleNav() {
		setVis(pre => !pre)
	}

	return (
		<nav class="flex justify-between top-0 fixed w-full bg-white md:justify-center z-50 py-4 px-8">
			<div ref={navOp as any} class={"all absolute transition-all md:flex md:justify-center justify-between gap-8 top-full md:shadow-none md:items-center py-4 md:p-0 px-4 md:opacity-100  " + (is() ? "right-0 bg-white z-50 shadow-sm opacity-100 shadow-lblue" : "left-full opacity-0")}>
				<ul class="left-links flex-col md:flex-row flex gap-8">
					<li>
						<a tabIndex={1} href="#wwd">
							What We Do
						</a>
						<div style={{ transform: "rotateY(90deg)" }} class="active"></div>
					</li>
					<li>
						<a tabIndex={2} href="#proc">
							The Process
						</a>
						<div style={{ transform: "rotateY(90deg)" }} class="active"></div>
					</li>
				</ul>
				<a tabIndex={3} class="" href="#hero">
					<img class="w-28 md:m-0 my-20" src="/dblue_king.webp" alt="Code King" />
				</a>
				<ul class="flex gap-8 right-links flex-col md:flex-row">
					<li>
						<a tabIndex={4} href="#demos">
							Demonstrations
						</a>
						<div tabIndex={5} style={{ transform: "rotateY(90deg)" }} class="active"></div>
					</li>
					<li>
						<a href="#contact">
							Contact Us
						</a>
						<div tabIndex={6} style={{ transform: "rotateY(90deg)" }} class="active"></div>
					</li>
				</ul>
			</div>
			<a class="block md:hidden" href="#">
				<img class="w-28" src="/dblue_king.webp" alt="Code King" />
			</a>
			<button tabIndex={1} class="navbtn" onclick={toggleNav}>
				<svg class="ham block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#2b2551" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18" /></svg>
			</button>
		</nav>
	)
}
