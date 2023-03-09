import React from 'react';

import { cx } from '~/utils/helpers';

import RenderIf from './RenderIf';

const PricingCard = ({ title, price, features, best }) => {
	return (
		<div
			className={cx(
				"bg-white shadow-md rounded-lg p-6 mx-auto lg:mx-0 w-[20rem] max-w-xs lg:w-auto cursor-pointer hover:shadow-lg",
				{
					"border-2 border-sky-400 hover:border-sky-500": best,
				}
			)}
		>
			<RenderIf isTrue={best}>
				<div className="bg-sky-400 text-white font-semibold px-2 py-1 mb-4 rounded-full text-center">
					Recommendation
				</div>
			</RenderIf>
			<h2 className="text-xl font-semibold mb-4">{title}</h2>
			<h3 className="text-3xl font-semibold mb-4">{price}</h3>
			<ul className="mb-6">
				{features.map((feature, index) => (
					<li key={index} className="text-gray-600 mb-2">
						<span className="mr-2">&#x2022;</span>
						{feature}
					</li>
				))}
			</ul>
			<button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
				Buy now
			</button>
		</div>
	);
};

export default PricingCard;
