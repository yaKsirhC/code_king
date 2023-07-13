export default function Footer() {
	return (
		<div class="flex sm:flex-row-reverse flex-col justify-between px-8 gap-8 py-8 bg-lblue text-white">
			<img src="/white_king.png" alt="Code King" class="w-64 h-fit self-center" />
			<div class="flex-col flex">
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
				<p class="max-w-none sm:mt-auto mt-8">
					© 2023 Copyright Code King. All Rights Reserved
				</p>
			</div>
		</div>
	)
}
