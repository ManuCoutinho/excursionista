import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { CardInfo } from '.'

const mockProps = {
	number: 'angels',
	description: 'neverland'
}

describe('<CardInfo />', () => {
	it('should render CardInfo witch correctly content', () => {
		render(<CardInfo {...mockProps}>Children</CardInfo>)
		expect(screen.getByText(/angels/i)).toBeInTheDocument()
		expect(screen.getByText(/neverland/i)).toBeInTheDocument()
		expect(screen.getByText(/children/i)).toBeInTheDocument()
	})
	it('should match to snapshot', () => {
		const { container } = render(
			<CardInfo {...mockProps}>Children</CardInfo>
		)
		expect(container.firstChild).toMatchSnapshot()
	})
})
