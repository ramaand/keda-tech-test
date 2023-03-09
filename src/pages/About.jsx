import React from 'react';

import SectionWrapper from '~/components/SectionWrapper';

function AboutPage() {
	return (
		<SectionWrapper id="about" className="py-24">
			<h1 className="text-5xl font-bold text-gray-800 mb-8">About Us</h1>
			<p className="text-2xl text-gray-600">
				We are a team of developers who love building awesome websites using the latest web technologies.
			</p>
		</SectionWrapper>
	);
}

export default AboutPage;
