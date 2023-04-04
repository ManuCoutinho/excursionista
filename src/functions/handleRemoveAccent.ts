export function handleRemoveAccent(key: string) {
	const stringWithoutAccent = key
		.split(' ')[0]
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
	return stringWithoutAccent
}
