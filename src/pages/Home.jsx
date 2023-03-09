import React from 'react';

import SectionWrapper from '~/components/SectionWrapper';

const Button = ({ children }) => {
	return (
		<div className="rounded-full px-4 py-2 text-blue-800 bg-sky-200 cursor-pointer hover:bg-sky-300 hover:text-blue-900 active:bg-sky-400 select-none">
			{children}
		</div>
	);
};

function HomePage() {
	return (
		<SectionWrapper
			id="home"
			className="bg-white mt-16 py-24 bg-no-repeat bg-cover md:bg-contain lg:bg-fixed bg-center lg:bg-right"
			style={{ backgroundImage: "url('src/assets/images/bg-main.png')" }}
		>
			<div className="flex w-full">
				<div className="w-full">
					<h1 className="text-5xl font-bold text-gray-800 mb-8">Welcome to My Website</h1>
					<p className="text-2xl text-gray-600">This is a sample landing page with ReactJS and TailwindCSS.</p>
					<div className="flex mt-4 gap-4">
						<Button>Learn More</Button>
						<Button>Get started</Button>
					</div>
				</div>
				{/* <div className="w-1/2">
					<img src="src/assets/images/bg-main.png" />
				</div> */}
			</div>
		</SectionWrapper>
	);
}

export default HomePage;
