import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { NavButton } from '.'

describe('<NavButton />', () => {
	it('should render button component correctly', () => {
		render(<NavButton />)
		expect(
			screen.getByRole('button', { name: /navigation/i })
		).toBeInTheDocument()
	})
	it('should render the next link ', () => {
		render(<NavButton />)
		const link = screen.getByRole('link')
		expect(link).toBeInTheDocument()
		expect(link.firstChild).toHaveAccessibleName(/navigation/i)
		expect(link).toHaveAttribute('href', '/')
	})
})
