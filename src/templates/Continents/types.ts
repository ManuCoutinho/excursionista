export type ContinentPageProps = {
	page: {
		id: string
		slug: string
		bio: string
		name: string
		numberCountry: string
		numberTopCity: string
		numberLanguage: string
		cover: Array<CoverType>
		cities: Array<CitiesGallery>
	}
}

export type CitiesGallery = {
	city: string
	flag: string
	image: string
	country: string
}

export type CoverType = {
	url: string
}
