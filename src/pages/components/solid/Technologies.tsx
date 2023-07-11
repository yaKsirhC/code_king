export default function Technologies() {
  return (
	<div class="flex flex-col items-center gap-8 mb-16">
		<div class="titles">
			<h1 class="title mb-2 text-center">Our Supported Techs and Frameworks</h1>
			<p class="text-gray-700 max-w-none text-center text-xl">25 Frameworks and other Technologies Supported</p>
		</div>
		<div class="technologies-box">
			<div class="front tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
				<h1>JS/TS Front-end Frameworks</h1>
				<div class="skills">
					<img src="/logos/react.svg" alt="React.js" />
					<img src="/logos/solidjs.svg" alt="Solid.js" />
					<img src="/logos/vuejs.svg" alt="Vue.js" />
					<img src="/logos/nuxtjs.svg" alt="Nuxt.js" />
					<img src="/logos/nextjs.svg" alt="Next.js" />
				</div>
			</div>
			<div class="dbms tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
				<h1>Database Management Systems ( DBMS )</h1>
				<div class="skills">
					<img src="/logos/postgresql.svg" alt="PostgreSQL" />
					<img src="/logos/mysql.svg" alt="MySQL" />
					<img src="/logos/mongodb.svg" alt="MongoDB" />
					<img src="/logos/redis.svg" alt="Redis" />
				</div>
			</div>
			<div class="back tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
				<h1>Back-end Development</h1>
				<div class="skills">
					<img src="/logos/nodejs.svg" alt="Nodejs" />
					<img src="/logos/firebase.svg" alt="Firebase" />
					<img src="/logos/php.svg" alt="PHP" />
					<img src="/logos/laravel.svg" alt="Laravel" />
					<img src="/logos/python.svg" alt="Python" />
					<img src="/logos/rust.svg" alt="Rust" />
					<img src="/logos/c++.svg" alt="C++" />
				</div>
			</div>
			<div class="native tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
				<h1>Native Development</h1>
				<div class="skills">
					<img src="/logos/react.svg" alt="React Native" />
					<img src="/logos/flutter.svg" alt="Flutter" />
					<img src="/logos/tauri.svg" alt="Tauri" />
				</div>
			</div>
			<div class="deployment tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
				<h1>Deployment</h1>
				<div class="skills">
					<img src="/logos/nginx.svg" alt="Nginx" />
					<img src="/logos/docker.svg" alt="Docker" />
					<img src="/logos/aws.svg" alt="AWS" />
				</div>
			</div>
			<div class="other tech-block bg-gray-50 p-4 rounded-xl shadow-gray-400 shadow-md">
				<h1>Other Libraries / Packages</h1>
				<div class="skills">
					<img src="/logos/prisma.svg" alt="Prisma" />
					<img src="/logos/sass.svg" alt="SASS" />
					<img src="/logos/tailwindcss.svg" alt="TailwindCSS" />
				</div>
			</div>
		</div>
	</div>
  )
}
