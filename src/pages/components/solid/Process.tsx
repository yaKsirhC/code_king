import useAnimate from "./scrollHook"

export default function Process() {
	const [selectEl, setClass] = useAnimate("active-scroll anim-fade-right")

	selectEl?.(".list-decimal li:nth-child(odd) img, .list-decimal li:nth-child(odd) h2")
	setTimeout(() => {
		setClass?.("active-scroll anim-fade-left")
		selectEl?.(".list-decimal li:nth-child(even) img, .list-decimal li:nth-child(even) h2")
	},0)

	return (
		<section id="proc" class=" flex p-16 flex-col gap-16 mb-16">
				<h1 class="title self-center">The Process</h1>
				<h2 class="mb-4 text-center self-center process-p">
					There are 4 major Steps with how we build projects and little is done by you except
					describing, critiquing and giving suggestions. Here is a breakdown of all the steps:
				</h2>
				<ul class="list-decimal flex-grow flex gap-40 flex-col">
					<li>
						<h2>
							<span>
								Planning.
							</span>
							We will talk about project details, requirements and decide the Budget and duration.
						</h2>
						<img src="/process/prep.svg" alt="Planning" />
					</li>
					<li>
						<h2>
							<span>
								Designing.
							</span>
							Our team will make a prototype of how the App will look on a popular software called Figma. You will interact and decide if the prototype matches your expectations.
						</h2>
						<img src="/process/design.svg" alt="Design" />
					</li>
					<li>
						<h2>
							<span>
								Coding.
							</span>
							It's exactly what it sounds like. We will code the App. In case you want to check the code, we will give you permission to access the GitHub Repository.
						</h2>
							<img src="/process/code.svg" alt="Coding" />
					</li>
					<li>
						<h2>
							<span>
								Preview.
							</span>
							After we finish coding, we will host the app in a dummy environment. You will be able to interact and decide if everything is ready.
						</h2>
						<img src="/process/preview.svg" alt="Preview" />
					</li>
					<li>
						<h2 class="">
							<span>
								Delivery or Deployment.
							</span>
							Either we will deploy the app ourselves and  you will be given the app deployed, or you will be handed the project to follow the deployment yourself. We will not charge additional fees for the deployment.
						</h2>
						<img src="/process/deliver.svg" alt="Delivery or Deployment" />
					</li>
				</ul>
		</section>
	)
}
