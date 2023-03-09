import React, { useState } from 'react';

import SectionWrapper from '~/components/SectionWrapper';

const ContactPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
	};
	return (
		<SectionWrapper id="contact">
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-2">
				<h1 className="text-5xl font-bold text-gray-800 mb-8">Contact Us</h1>
				<p className="text-2xl text-gray-600">Let's get in touch and discuss your project.</p>
				<form onSubmit={handleSubmit} className="bg-white rounded-none shadow-none sm:shadow-md sm:rounded-lg p-6 w-full md:w-2/3 lg:w-1/2">
					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="border-gray-400 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="border-gray-400 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
							required
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="border-gray-400 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
							rows="5"
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full xsm:w-auto	"
					>
						Submit
					</button>
				</form>
			</div>
		</SectionWrapper>
	);
};
export default ContactPage;
