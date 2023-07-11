<script lang="ts">
	export let genres: string[];
	export let paragraph: string;
	export let media: string;
	export let credit: string;
	export let className: string;
</script>

<style lang='css'>
	.template {
		transform: translateX(100%);
		display: flex;
		flex-direction: column;
	}

	.card {
		transition: right 1s,transform 1s, opacity 500ms;
		position: absolute;
		display: flex;
		flex-direction: column;
		float: left;
		width: max-content;
	}
	
	.vis {
		right: 50%;
		transform: translateX(50%);
		opacity: 1;
	}
	
	.hid {
		opacity: 0;
		right: -100%;
	}

	img {
		height: 40vh;
	}
</style>

<div class={className}>
	<ul>
		{#each genres as genre}
			<li>{genre}</li>
		{/each}
	</ul>
	<p>
		{paragraph}
	</p>
	<img src={media} alt={media}>
	<p>{credit}</p>
</div>