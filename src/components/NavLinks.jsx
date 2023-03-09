import React from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { menuItems } from '~/mocks/menu';

import { cx } from '~/utils/helpers';

import BurgerMenu from '~/components/BurgerMenu';

const NavItem = ({ to, title, onNavClick }) => {
	return (
		<Link
			to={to}
			smooth={true}
			duration={500}
			spy={true}
			exact="true"
			offset={-80}
			className="text-xl font-bold hover:text-gray-900 cursor-pointer"
			onClick={() => onNavClick()}
		>
			{title}
		</Link>
	);
};

const NavLinks = ({ onMenuClicked, onToggleClicked, open }) => {
	const navigate = useNavigate();
	const loginClick = () => {
		navigate("/login");
	};
	return (
		<>
			<ul
				className={cx("md:flex items-center justify-end text-base text-gray-700 pt-4 md:pt-0 gap-8", {
					hidden: !open,
					block: open,
					"fixed top-0 right-0 bottom-0 left-0 bg-gray-200 p-4 px-8": open,
				})}
			>
				<div className="flex w-full items-center justify-end">
					<BurgerMenu onClick={() => onToggleClicked()} open={open} />
				</div>
				{menuItems.map(({ to, title }) => {
					return (
						<li key={to + title} className={cx({ "mb-4":open})}>
							<NavItem {...{ to, title }} onNavClick={() => onMenuClicked()} />
						</li>
					);
				})}
				<div
					className={cx("text-sm px-8 py-2 border-2 border-sky-400 text-sky-500 rounded-md uppercase cursor-pointer hover:border-sky-500 hover:bg-sky-500 hover:text-white active:border-sky-600 active:bg-sky-600", {
            "absolute bottom-4 right-4 left-4 text-center": open
          })}
					onClick={() => loginClick()}
				>
					Login
				</div>
			</ul>
		</>
	);
};
NavLinks.propTypes = {
	onMenuClicked: PropTypes.func,
	onToggleClicked: PropTypes.func,
	open: PropTypes.bool.isRequired,
};
NavLinks.defaultProps = {
	onMenuClicked: () => {},
	onToggleClicked: () => {},
	open: false,
};

export default NavLinks;
