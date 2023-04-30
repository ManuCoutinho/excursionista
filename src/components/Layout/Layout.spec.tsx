import { screen } from '@testing-library/react'
import { renderWithClient } from '__mocks__/providers/ClientRender'
import Layout from '.'

describe('<Layout.spec />', () => {
	it('should render the component correctly', () => {
		renderWithClient(<Layout>children</Layout>)
		expect(screen.getByRole('main')).toBeInTheDocument()
		expect(screen.getByRole('banner')).toBeInTheDocument()
		expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()
	})
})
