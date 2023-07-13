import { For } from 'solid-js';
import faqs from '../../../data/FAQs.json'
import QuestionAnswer from "./QuestionAnswer";
import useAnimate from './scrollHook';

export default function FAQs() {

  return (
	<section id='faq' class="faq-container px-4 justify-around flex-col gap-8 items-center flex ">
		<h1 class="title">
			FAQs
		</h1>
		<div class="questions flex flex-col gap-8 w-fit">
			<For each={faqs}>
				{item => (
					<QuestionAnswer question={item[0] as string} answer={item[1] as string} />
				)}
			</For>
		</div>
	</section>
  )
}
