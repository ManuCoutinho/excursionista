import { NavigationContext } from 'contexts/navigation'
import { useContext } from 'react'

export const useMenu = () => {
	const { data, setData } = useContext(NavigationContext)

	return { data, setData }
}
