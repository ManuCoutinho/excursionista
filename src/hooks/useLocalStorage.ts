import { useCallback, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
	const [state, setState] = useState(() => {
		try {
			const storedValue = localStorage.getItem(key)
			return storedValue ? JSON.parse(storedValue) : initialValue
		} catch {
			return initialValue
		}
	})

	const setValue = useCallback(
		(value: T) => {
			try {
				setState(value)
				localStorage.setItem(key, JSON.stringify(value))
			} catch (error) {
				console.error(error)
			}
		},
		[key]
	)
	return [state, setValue]
}
