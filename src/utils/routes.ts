const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

export const ROUTES = {
	home: `${baseUrl}/`,
	albums: {
		index: `${baseUrl}/albums`,
		detail: (id: string) => `${baseUrl}/albums/${id}`,
	},
	portfolio: 'https://leireomadina.vercel.app/',
} as const