import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { FooterLinks } from '.'

const mockProps = {
	links: [
		{
			listItem: 'item 1',
			url: '#',
			id: '001',
			text: 'description1'
		},
		{
			listItem: 'item 2',
			url: '#',
			id: '002',
			text: 'description2'
		}
	],
	subtitle: 'Redes Sociais'
}
describe('<FooterLinks />', () => {
	it('should render nav component', () => {
		render(<FooterLinks {...mockProps} />)
		expect(screen.getByRole('navigation')).toBeInTheDocument()
	})
	it('should render the title component correctly', () => {
		render(<FooterLinks {...mockProps} />)
		expect(
			screen.getByRole('heading', { name: /Redes Sociais/i })
		).toBeInTheDocument()
	})
	it('should render List and links component correctly', () => {
		render(<FooterLinks {...mockProps} />)
		const list = screen.getByRole('list')
		const li = screen.getByRole('listitem', { name: /item 1/i })
		expect(list).toBeInTheDocument()
		expect(li).toBeInTheDocument()
		expect(list.firstChild).toHaveAttribute('href')
		expect(li.firstChild).toHaveAttribute('rel', 'noreferrer noopener')
	})
	it('should match to snapshot', () => {
		const { container } = render(<FooterLinks {...mockProps} />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
