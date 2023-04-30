import { screen } from '@testing-library/react'
import { TravelIcons } from '.'
import { renderWithClient } from '__mocks__/providers/ClientRender'

describe('<TravelIcons/>', () => {
	it('should render TravelIcons correctly ', () => {
		renderWithClient(<TravelIcons />)
		expect(
			screen.getByRole('button', { name: /moderno/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('button', { name: /vida noturna/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('button', { name: /clássico/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('button', { name: /praia/i })
		).toBeInTheDocument()
	})
	it('should match to snapshot', () => {
		const { container } = renderWithClient(<TravelIcons />)
		expect(container).toMatchSnapshot()
	})
})
