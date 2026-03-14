export const ROUTES = {
	home: '/',
	albums: {
		index: '/albums',
		detail: (id: string) => `/albums/${id}`,
	},
} as const
