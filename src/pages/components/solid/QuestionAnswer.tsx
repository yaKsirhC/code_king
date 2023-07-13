import { createEffect, createSignal } from "solid-js";

export default function QuestionAnswer({ question, answer }: { question: string, answer: string }) {
	const [show, setShow] = createSignal(false)
	let answerRef: HTMLDivElement | undefined;
	let hrRef: HTMLElement | undefined;

	createEffect(() => {
		if (show() === false) {
			(answerRef as HTMLDivElement).style.maxHeight = '0';
			// (answerRef as HTMLDivElement).style.opacity = '0';
			// (hrRef as HTMLElement).style.top = '0';

		} else {
			console.log(`${(answerRef as HTMLDivElement).offsetHeight}px`);
			(answerRef as HTMLDivElement).style.maxHeight = `200px`;
			// (answerRef as HTMLDivElement).style.opacity = '1';
			// (hrRef as HTMLElement).style.top = '100%';

		}
	})

	return (
		<div class="">
			<div onclick={() => setShow(pre => !pre)} class="question cursor-pointer">
				<h1 class="mb-2 text-xl font-medium">{question}</h1>
			</div>
			<div class="overflow-hidden relative">
				<div ref={answerRef as any} class="text-gray-800 answer">
					<h2 class="max-w-50ch">
						{answer}
					</h2>
				</div>
				<hr ref={hrRef as any} class="w-full h-0.5 bg-black absolute top-0" />
			</div>
		</div>
	)
}
