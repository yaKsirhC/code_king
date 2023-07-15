<script lang="ts">
	import demos from "../../../data/projects.json";
	// import CardElement from './CardElement.svelte';
	let cardIndex = 0;
</script>

<section
	id="demos"
	class="demo flex justify-evenly xl:items-start items-center xl:flex-row xl: flex-col-reverse xl:gap-16 gap-8"
>
	<div class="description grid">
		<div class="flex flex-col gap-4 flex-grow">
			<p
				class="xl:text-start sm:text-center max-w-none px-4 text-gray-700"
			>
				{demos.at(cardIndex)?.genres}
			</p>
			<p class="sm:text-3xl text-lg px-4 xl:text-start text-center">
				{demos.at(cardIndex)?.paragraph}
			</p>
		</div>
		<div class="btns my-auto p-t16 xl:justify-self-end justify-self-center flex gap-8">
			<button
				class="text-blue-500 sm:text-3xl text-lg hover:bg-blue-50 px-4"
				on:click={() => {
					cardIndex = (cardIndex - 1) % 4;
				}}>&larr;</button
			>
			<button
				class="text-blue-500 sm:text-3xl text-lg hover:bg-blue-50 px-4 py-2"
				on:click={() => {
					cardIndex = (cardIndex + 1) % 4;
				}}>&rarr;</button
			>
		</div>
	</div>
	<a
		target="_blank"
		href={demos.at(cardIndex)?.credit}
		class="cool flex flex-col items-center"
	>
		<img
			src={demos.at(cardIndex)?.media}
			alt={demos.at(cardIndex)?.media}
		/>
		<p
			class="text-gray-700 sm:text-xl text-xs mt-2 px-4 text-center sm:text-start"
		>
			{demos.at(cardIndex)?.credit}
		</p>
	</a>
</section>

<style lang="css">
	.description {
		grid-template-rows: 400px max-content;
	}
	img {
		object-fit: contain;
		/* height: 400px; */
		width: 80vw;
		max-width: 600px;
		max-height: 800px;
	}
</style>
