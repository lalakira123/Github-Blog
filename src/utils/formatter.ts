export const queryFormatter = (query?: string) => {
	if (query) {
		const newQuery = query + ' '
		return newQuery.replace(' ', '%20')
	}

	return ''
} 

export const bodyFormatter = (body: string) => {
	return body.substring(0, 176) + '...'
}
