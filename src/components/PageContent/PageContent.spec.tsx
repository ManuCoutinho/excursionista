import { screen } from '@testing-library/react'
import { renderWithClient } from '__mocks__/providers/ClientRender'
import PageContent from '.'

const dataMock = {
	city: 'cairo',
	country: 'egito',
	language: '5',
	text: 'text placeholder'
}
describe('<PageContent/>', () => {
	it('should render PageContent correctly ', () => {
		renderWithClient(<PageContent {...dataMock} />)
		expect(screen.getByText(dataMock.city)).toBeInTheDocument()
		expect(screen.getByText(dataMock.country)).toBeInTheDocument()
		expect(screen.getByText(dataMock.language)).toBeInTheDocument()
		expect(screen.getByText(dataMock.text)).toBeInTheDocument()
	})
	it('should match to snapshot', () => {
		const { container } = renderWithClient(<PageContent {...dataMock} />)
		expect(container).toMatchSnapshot()
	})
})
