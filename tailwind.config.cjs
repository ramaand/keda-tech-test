/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		screens: {
			xxs: "360px",
			// => @media (min-width: 360px) { ... }
			xsm: "479px",
			// => @media (min-width: 479px) { ... }
			ssm: "540px",
			// => @media (min-width: 540px) { ... }
			sm: "640px",
			// => @media (min-width: 640) { ... }
			md: "768px",
			// => @media (min-width: 768px) { ... }
			lg: "1024px",
			// => @media (min-width: 1024px) { ... }
			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
			"2xl": "1535px",
			// => @media (min-width: 1535px) { ... }
			"3xl": "1919px",
			// => @media (min-width: 1919px) { ... }
		},
	},
	plugins: [],
};
