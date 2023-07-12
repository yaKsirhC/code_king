import { createEffect, createSignal } from "solid-js";

export default function useAnimate(classNameDe: string, def?: HTMLElement){
	const [element, setElement] = createSignal<HTMLElement | string | undefined>(def)
	const [className, setClassname] = createSignal<string>(classNameDe)

	function addObserver(el: HTMLElement, className: string) {
		let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add(...(className.split(' ')))
					observer.unobserve(entry.target)
				}
			})
		})
		observer.observe(el)
	}

	createEffect(() => {
		if(element()){
			console.log('ran')
			if(typeof element() === "string") {
				const queryEl = document.querySelectorAll(element() as string)
				queryEl.forEach(el => addObserver(el as HTMLElement, className()))
				return
			}
			addObserver(element() as HTMLElement, className())
		}
	})

	return [setElement, setClassname];
}