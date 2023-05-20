import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { NavigationType } from 'models/navigation'

export const useMenu = () => {
	const [state] = useLocalStorage('menu', '')
	const [data, setData] = useState<NavigationType[]>([])

	useEffect(() => {
		setData(state)
	}, [state])

	return { data, setData }
}
