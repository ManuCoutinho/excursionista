import { NavigationContext } from 'contexts/navigation'
import { useContext, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useMenu = () => {
	const [state] = useLocalStorage('menu', '')
	const { data, setData } = useContext(NavigationContext)
	useMemo(() => {
		setData(state)
	}, [state, setData])

	return { data, setData }
}
