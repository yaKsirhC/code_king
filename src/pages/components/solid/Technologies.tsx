import useAnimate from "./scrollHook"

export default function Technologies() {

	const [selectEl, _] = useAnimate("active-scroll anim-fade-right")

	selectEl?.(".tech-block" as any)

	return (
		<section id="techs" class="flex flex-col items-center gap-8 mb-16">
			<div class="titles">
				<h1 class="title mb-2 text-center">Our Supported Techs and Frameworks</h1>
				<p class="text-gray-700 max-w-none text-center text-xl">25 Frameworks and other Technologies Supported</p>
			</div>
			<div class="technologies-box">
				<div class="front tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
					<h1>JS/TS Front-end Frameworks</h1>
					<div class="skills">
						<div class="tech flex">
							<img src="/logos/react.svg" alt="React.js" />
							<p>Reactjs</p>
						</div>
						<div class="tech flex">
							<img src="/logos/solidjs.svg" alt="Solid.js" />
							<p>Solidjs</p>
						</div>
						<div class="tech flex">
							<img src="/logos/vuejs.svg" alt="Vue.js" />
							<p>Vuejs</p>
						</div>
						<div class="tech flex">
							<img src="/logos/nuxtjs.svg" alt="Nuxt.js" />
							<p>Nuxtjs</p>
						</div>
						<div class="tech flex">
							<img src="/logos/nextjs.svg" alt="Next.js" />
							<p>Nextjs</p>
						</div>
					</div>
				</div>
				<div class="dbms tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
					<h1>Database Management Systems ( DBMS )</h1>
					<div class="skills">
						<div class="flex tech">
							<img src="/logos/postgresql.svg" alt="PostgreSQL" />
							<p>Postgresql</p>
						</div>
						<div class="flex tech">
							<img src="/logos/mysql.svg" alt="MySQL" />
							<p>MySQL</p>
						</div>
						<div class="flex tech">
							<img src="/logos/mongodb.svg" alt="MongoDB" />
							<p>MongoDB</p>
						</div>
						<div class="flex tech">
							<img src="/logos/redis.svg" alt="Redis" />
							<p>Redis</p>
						</div>
					</div>
				</div>
				<div class="other tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
					<h1>Other Libraries / Packages</h1>
					<div class="skills">
						<div class="tech flex">
							<img src="/logos/prisma.svg" alt="Prisma" />
							<p>Prisma</p>
						</div>
						<div class="tech flex">
							<img src="/logos/sass.svg" alt="SASS" />
							<p>SCSS</p>
						</div>
						<div class="tech flex">
							<img src="/logos/tailwindcss.svg" alt="TailwindCSS" />
							<p>Tailwind CSS</p>
						</div>
					</div>
				</div>
				<div class="back tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
					<h1>Back-end Development</h1>
					<div class="skills">
						<div class="tech flex">
							<img src="/logos/nodejs.svg" alt="Nodejs" />
							<p>Nodejs</p>
						</div>
						<div class="tech flex">
							<img src="/logos/firebase.svg" alt="Firebase" />
							<p>Firebase</p>
						</div>
						<div class="tech flex">
							<img src="/logos/php.svg" alt="PHP" />
							<p>PHP</p>
						</div>
						<div class="tech flex">
							<img src="/logos/laravel.svg" alt="Laravel" />
							<p>Laravel</p>
						</div>
						<div class="tech flex">
							<img src="/logos/python.svg" alt="Python" />
							<p>Python</p>
						</div>
						<div class="tech flex">
							<img src="/logos/rust.svg" alt="Rust" />
							<p>Rust</p>
						</div>
						<div class="tech flex">
							<img src="/logos/c++.svg" alt="C++" />
							<p>C++</p>
						</div>
					</div>
				</div>
				<div class="native tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
					<h1>Native Development</h1>
					<div class="skills">
						<div class="tech flex">
							<img src="/logos/react.svg" alt="React Native" />
							<p>React Native</p>
						</div>
						<div class="tech flex">
							<img src="/logos/flutter.svg" alt="Flutter" />
							<p>Flutter</p>
						</div>
						<div class="tech flex">
							<img src="/logos/tauri.svg" alt="Tauri" />
							<p>Tauri</p>
						</div>
					</div>
				</div>
				<div class="deployment tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
					<h1>Deployment</h1>
					<div class="skills">
						<div class="tech flex">
							<img src="/logos/nginx.svg" alt="Nginx" />
							<p>Nginx</p>
						</div>
						<div class="tech flex">
							<img src="/logos/docker.svg" alt="Docker" />
							<p>Docker</p>
						</div>
						<div class="tech flex">
							<img src="/logos/aws.svg" alt="AWS" />
							<p>AWS</p>
						</div>
					</div>
				</div>
				
			</div>
		</section>
	)
}
