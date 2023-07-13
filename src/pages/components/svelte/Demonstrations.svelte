<script lang="ts">
	import demos from "../../../data/projects.json";
	// import CardElement from './CardElement.svelte';
	let cardIndex = 0;
</script>

<section id="demos" class="demo flex justify-evenly xl:items-start items-center xl:flex-row xl: flex-col-reverse xl:gap-16 gap-8">
	<div class="description">
		<div class="genres-cole grid place-content-center">
			<p class="xl:text-start text-center px-4 text-gray-700">
				{demos.at(cardIndex)?.genres}
			</p>
		</div>
		<div class="flex flex-col gap-4 flex-grow">
			<p class="sm:text-3xl text-lg px-4 xl:text-start text-center">
				{demos.at(cardIndex)?.paragraph}
			</p>
			<div class="btns my-auto p-t16 xl:self-end self-center flex gap-8">
				<button class="text-blue-500 sm:text-3xl text-lg hover:bg-blue-50 px-4"
					on:click={() => {
						cardIndex = (cardIndex - 1) % 4;
					}}>&larr;</button
				>
				<button class="text-blue-500 sm:text-3xl text-lg hover:bg-blue-50 px-4 py-2"
					on:click={() => {
						cardIndex = (cardIndex + 1) % 4;
					}}>&rarr;</button
				>
			</div>
		</div>
	</div>
	<a target="_blank" href={demos.at(cardIndex)?.credit} class="cool flex flex-col items-center">
		<img
			src={demos.at(cardIndex)?.media}
			alt={demos.at(cardIndex)?.media}
		/>
		<p class="text-gray-700 sm:text-xl text-xs mt-2 px-4 text-center sm:text-start">
			{demos.at(cardIndex)?.credit}
		</p>
	</a>
</section>

<style lang="css">
	p {
		max-width: 50ch;
		/* height: 150px; */
	}
	img {
		object-fit: contain;
		/* height: 400px; */
		width: 80vw;
		max-width: 600px;
	}
</style>
