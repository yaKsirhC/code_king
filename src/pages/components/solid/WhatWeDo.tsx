import { For } from 'solid-js'
import whatWeDo from '../../../data/WhatWeDo.json'
import ThingWeDo from './ThingWeDo'

export default function WhatWeDo() {
  return (
	<section id='wwd' class='flex px-8 mb-16 flex-col gap-12'>
		<h1 class='text-center title max-w-none'>What we do</h1>
		<div class="cards p-8 grid gap-12 grid-rows-3 md:grid-cols-3 md:grid-rows-none justify-center">
			<For each={whatWeDo}>
				{item => <ThingWeDo title={item[0] as string} description={item[1] as string} />}
			</For>
		</div>
	</section>
  )
}
