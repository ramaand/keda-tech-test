import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();
		// handle login logic
		navigate("/")
	};

	return (
		<div className="flex flex-col h-screen justify-center items-center">
			<div className="bg-white p-10 rounded-lg shadow-none sm:shadow-md max-w-md w-full">
				<h1 className="text-2xl font-bold mb-4">Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 font-bold mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-gray-700 font-bold mb-2">
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your password"
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
