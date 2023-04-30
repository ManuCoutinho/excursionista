import { createContext, useState } from 'react'
import {
	NavigationContextType,
	NavigationProviderProps,
	NavigationType
} from './types'

const initialState = [
	{
		slug: '',
		id: ''
	}
]

export const NavigationContext = createContext<NavigationContextType>({
	data: initialState,
	setData: () => initialState
})

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
	children
}) => {
	const [data, setData] = useState<NavigationType[]>([])

	return (
		<NavigationContext.Provider value={{ data, setData }}>
			{children}
		</NavigationContext.Provider>
	)
}
