export type Data = {
	id: string
	alt_description: string
	urls: {
		full: string
		regular: string
	}
	links: {
		html: string
	}
	user: {
		name: string
	}
}
export interface DataImages {
	results: Array<Data>
	total: number
	total_pages: number
}
