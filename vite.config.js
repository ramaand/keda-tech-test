import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === "development";

	return {
		plugins: [react()],
		resolve: {
			alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
		},
		server: {
			port: 3005,
		},
		css: {
			modules: {
				generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
			},
		},
	};
});
