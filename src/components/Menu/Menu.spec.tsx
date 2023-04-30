import { screen, fireEvent, within } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Menu } from '.'

describe('< Menu/>', () => {
	it('should render opened menu correctly ', () => {
		render(<Menu />)
		const openButton = screen.getByRole('button', { hidden: true })
		expect(openButton).toBeInTheDocument()
		expect(openButton).toHaveAttribute('aria-expanded', 'true')
		expect(screen.queryByRole('dialog', { hidden: true }))
		fireEvent.click(openButton)
		expect(openButton).toHaveAttribute('aria-expanded', 'false')
		const drawer = screen.getByRole('dialog', { hidden: true })
		expect(drawer).toBeInTheDocument()
		expect(within(drawer).getByText(/home/i)).toBeInTheDocument()
	})
	it('should  match to snapshot', () => {
		const { container } = render(<Menu />)
		expect(container).toMatchSnapshot()
	})
})
