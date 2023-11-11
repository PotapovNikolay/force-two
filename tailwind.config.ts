import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: [
		"./node_modules/flowbite/**/*.js",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			gray: colors.gray,
			blue: colors.sky,
			red: colors.rose,
			pink: colors.fuchsia,
			zinc: colors.zinc,
			slate: colors.slate
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"accent": "#00C78D",
				"main": "#18181b",
				"main-900": "#09090A",
				"none": "#00000000"
			},
		},
	},
	plugins: [
		require("flowbite/plugin")
	],
	darkMode: "media",
};
export default config;