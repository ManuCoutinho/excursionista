export function handleRemoveAccent(key: string) {
	const stringWithoutAccent = key
		.normalize('NFD')
		.replace(/[\u0300-\u036f-,/]/g, '')

	return stringWithoutAccent
}
