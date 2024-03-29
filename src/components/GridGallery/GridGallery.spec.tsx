import { screen } from '@testing-library/react'
import { renderWithClient } from '__mocks__/providers/ClientRender'
import GridGallery from '.'

const itemsMock = [
	{
		image: 'nxkinK7hhOk',
		city: 'Rio de Janeiro',
		country: 'Brasel',
		flag: 'rj'
	},
	{
		image: 'jisfldjj',
		city: 'Cairo',
		country: 'Egito',
		flag: 'eg'
	}
]
describe('<GridGallery/>', () => {
	it('should render GridGallery correctly ', () => {
		renderWithClient(<GridGallery items={itemsMock} />)
		expect(
			screen.getByRole('heading', { name: /cidades/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('img', { name: itemsMock[0].city })
		).toBeInTheDocument()
		expect(
			screen.getByRole('img', { name: itemsMock[0].country })
		).toHaveAttribute(
			'src',
			'/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw640%2Frj.png&w=96&q=75'
		)
	})
	it('should match to snapshot', () => {
		const { container } = renderWithClient(
			<GridGallery items={itemsMock} />
		)
		expect(container).toMatchSnapshot()
	})
})
