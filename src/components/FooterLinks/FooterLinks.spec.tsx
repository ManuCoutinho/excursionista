import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { FooterLinks } from '.'
import { FooterLinkProps } from './types'

const mockProps: FooterLinkProps = {
	links: [
		{
			slug: '#',
			id: '001',
			name: 'description1'
		},
		{
			slug: '#',
			id: '002',
			name: 'description2'
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
		const li = screen.getByRole('listitem', { name: /description1/i })
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
