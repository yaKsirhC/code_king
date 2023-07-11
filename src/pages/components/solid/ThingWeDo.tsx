export default function ThingWeDo({title, description}: {title: string, description: string}) {
  return (
	<div class="bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
		<h1 class="text-lg font-semibold mb-2">
			{title}
		</h1>
		<p>
			{description}
		</p>
	</div>
  )
}
