export const ROUTES = {
	home: '/',
	albums: {
		index: '/albums',
		detail: (id: string) => `/albums/${id}`,
	},
	portfolio: 'https://leireomadina.vercel.app/',
} as const
