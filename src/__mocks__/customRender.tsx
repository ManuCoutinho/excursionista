import { render } from '@testing-library/react'
import { RenderOptions } from '@testing-library/react/types'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactElement, FC, ReactNode } from 'react'

const MockProviders: FC<{ children: ReactNode }> = ({ children }) => {
	return <ChakraProvider>{children}</ChakraProvider>
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MockProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
