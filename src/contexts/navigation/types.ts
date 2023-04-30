export type NavigationProviderProps = {
	children: React.ReactNode
}

export type NavigationContextType = {
	data: Array<NavigationType>
	setData: React.Dispatch<React.SetStateAction<NavigationType[]>>
}

export type NavigationType = {
	slug: string
	id: string
	name?: string
}

export type Action = {
	type: string
}
