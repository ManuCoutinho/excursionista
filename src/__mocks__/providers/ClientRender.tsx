/* eslint-disable react/display-name */

import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	})

export function renderWithClient(children: React.ReactNode) {
	const testQueryClient = createTestQueryClient()
	const { rerender, ...result } = render(
		<ChakraProvider>
			<QueryClientProvider client={testQueryClient}>
				{children}
			</QueryClientProvider>
		</ChakraProvider>
	)
	return {
		...result,
		rerender: (rerenderUi: React.ReactNode) =>
			rerender(
				<QueryClientProvider client={testQueryClient}>
					{rerenderUi}
				</QueryClientProvider>
			)
	}
}

export const customWrapper = () => {
	const testQueryClient = createTestQueryClient()

	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={testQueryClient}>
			{children}
		</QueryClientProvider>
	)
}
