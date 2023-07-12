export default function NavigaionBar() {
  return (
	<nav class="flex top-0 fixed w-full bg-white justify-center z-50 gap-8 items-center py-4 px-2">
		<ul class="left-links flex gap-8">
			<li>
				<a href="">
					What We Do
				</a>
				<div style={{transform: "rotateY(90deg)"}} class="active"></div>
			</li>
			<li>
				<a href="">
					The Process
				</a>
				<div style={{transform: "rotateY(90deg)"}} class="active"></div>
			</li>
		</ul>
		<a href="#">
			<img class="w-28 " src="/dblue_king.png" alt="Code King" />
		</a>
		<ul class="flex gap-8 right-links">
			<li>
				<a href="">
					Demonstrations
				</a>
				<div style={{transform: "rotateY(90deg)"}} class="active"></div>
			</li>
			<li>
				<a href="">
					Contact Us
				</a>
				<div style={{transform: "rotateY(90deg)"}} class="active"></div>
			</li>

		</ul>
	</nav>
  )
}
