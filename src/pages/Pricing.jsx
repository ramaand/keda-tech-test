import React from 'react';

import { pricing } from '~/mocks/pricing';

import PricingCard from '~/components/PricingCard';
import SectionWrapper from '~/components/SectionWrapper';

function PricingPage() {
	return (
		<SectionWrapper
			id="pricing"
			className="bg-white py-24 bg-no-repeat bg-cover md:bg-contain lg:bg-fixed bg-center"
			style={{ backgroundImage: "url('src/assets/images/bg-2.png')" }}
		>
			<h1 className="text-5xl font-bold text-gray-800 mb-8">Pricing</h1>
			<p className="text-2xl text-gray-300">Choose the plan that fits your needs.</p>
			<div className="flex flex-col md:flex-row justify-center gap-4 mt-8 text-center md:text-left">
				{pricing.map((pricing, index) => (
					<PricingCard key={index} {...pricing} />
				))}
			</div>
		</SectionWrapper>
	);
}

export default PricingPage;
