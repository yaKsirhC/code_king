<script lang="ts">
	import demos from "../../../data/projects.json";
	// import CardElement from './CardElement.svelte';
	let cardIndex = 0;
</script>

<section class="demo flex justify-evenly xl:items-start items-center xl:flex-row flex-col-reverse xl:gap-16 gap-8">
	<div class="description">
		<div class="genres-cole">
			<p class="xl:text-start text-center px-4 text-gray-700">
				{demos.at(cardIndex)?.genres}
			</p>
		</div>
		<div class="flex flex-col gap-4 flex-grow">
			<p class="text-3xl px-4 xl:text-start text-center">
				{demos.at(cardIndex)?.paragraph}
			</p>
			<div class="btns my-auto p-t16 xl:self-end self-center flex gap-8">
				<button class="text-blue-500 text-3xl hover:bg-blue-50 px-4"
					on:click={() => {
						cardIndex = (cardIndex - 1) % 4;
					}}>&larr;</button
				>
				<button class="text-blue-500 text-3xl hover:bg-blue-50 px-4 py-2"
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
			class=""
		/>
		<p class="text-gray-700 text-sm mt-2 px-4 text-center">
			{demos.at(cardIndex)?.credit}
		</p>
	</a>
</section>

<style lang="css">
	p {
		font-size: 1.2rem;
		max-width: 50ch;
		/* height: 150px; */
	}
	img {
		object-fit: contain;
		/* height: 400px; */
		width: 40vw;
		max-width: 80%;
		min-width: 200px;
	}
</style>
