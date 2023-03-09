import React, { useState } from 'react';

import { Link } from 'react-scroll';

import BurgerMenu from './BurgerMenu';
import NavLinks from './NavLinks';

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

	const handleToggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav className="fixed w-full shadow-md bg-gray-100 p-2 top-0">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between flex-shrink-0 text-gray-800">
					<div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
						<Link to="home" spy={true} smooth={true} duration={500} className="inline-flex items-center p-2 mr-4 gap-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 text-gray-800"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
								/>
							</svg>
							<span className="text-xl text-gray-800 font-bold uppercase tracking-wide">Home</span>
						</Link>
					</div>
					<div className="flex items-center">
						<BurgerMenu onClick={() => handleToggleMenu()} open={showMenu} />
						<NavLinks
							onMenuClicked={() => setShowMenu(false)}
							onToggleClicked={() => handleToggleMenu()}
							open={showMenu}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
