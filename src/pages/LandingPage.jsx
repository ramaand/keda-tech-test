import React from 'react';

import AboutPage from '~/pages/About';
import ContactPage from '~/pages/Contact';
import HomePage from '~/pages/Home';
import PricingPage from '~/pages/Pricing';

import Navbar from '~/components/Navbar';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<HomePage />
			<AboutPage />
			<PricingPage />
			<ContactPage />
		</>
	);
};

export default LandingPage;
