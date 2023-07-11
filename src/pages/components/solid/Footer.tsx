export default function Footer() {
  return (
	<div class="flex flex-col items-center gap-8 py-8 bg-lblue text-white">
		<img src="/white_king.png" alt="Code King" class="w-64" />
		<div class="links flex flex-wrap gap-4">
			<a href="">
				Technologies
			</a>
			<a href="">
				FAQs
			</a>
			<a href="">
				Know the team
			</a>
			<a href="">
				Demonstrations
			</a>			
			<a href="">
				Contact Us
			</a>			
			<a href="">
				Code King
			</a>			
		</div>
		<div class="line h-0.5 bg-white w-4/5"></div>
		<div class="legal flex justify-between w-4/5">
			<p class="max-w-none">
				© 2023 Copyright Code King. All Rights Reserved
			</p>
			<div class="terms-privacy">
				<a href="" class="mr-4">Privacy Policy</a>
				<a href="">Terms of Use</a>
			</div>
		</div>
	</div>
  )
}
