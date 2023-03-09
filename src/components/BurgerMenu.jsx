import React from 'react';

function BurgerMenu(props) {
	const { onClick, open } = props;
	return (
		<button
			className="flex md:hidden items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-800"
			onClick={onClick}
		>
			<svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<title>Menu</title>
				{/* <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" /> */}
				{open ? (
					<path fillRule="evenodd" clipRule="evenodd" d="M2 4H18V6H2V4ZM2 9H18V11H2V9ZM2 14H18V16H2V14Z" />
				) : (
					<path fillRule="evenodd" clipRule="evenodd" d="M4 6H16V8H4V6ZM4 10H16V12H4V10ZM4 14H16V16H4V14Z" />
				)}
			</svg>
		</button>
	);
}

export default BurgerMenu;
