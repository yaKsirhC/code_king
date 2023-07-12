import { For } from 'solid-js';
import faqs from '../../../data/FAQs.json'
import QuestionAnswer from "./QuestionAnswer";
import useAnimate from './scrollHook';

export default function FAQs() {

  return (
	<div class="faq-container px-4 justify-around flex-wrap-reverse items-center flex ">
		<div class="questions flex flex-col gap-8 w-fit">
			<For each={faqs}>
				{item => (
					<QuestionAnswer question={item[0] as string} answer={item[1] as string} />
				)}
			</For>
		</div>
	</div>
  )
}
