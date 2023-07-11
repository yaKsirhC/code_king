import { For } from 'solid-js';
import faqs from '../../../data/FAQs.json'
import QuestionAnswer from "./QuestionAnswer";

export default function FAQs() {
  return (
	<div class="faq-container px-4 items-center flex mb-32">
		<div class="zapier w-1/3"></div>
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
