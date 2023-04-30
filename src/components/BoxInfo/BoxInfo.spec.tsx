import { screen, render } from '@testing-library/react'
import { BoxInfo } from '.'

const mockProps = {
	city: 'angels',
	country: 'neverland',
	language: '1234'
}
describe('<BoxInfo />', () => {
	it('should render BoxInfo correctly ', async () => {
		render(<BoxInfo {...mockProps} />)
		expect(screen.getByText(/angels/)).toBeInTheDocument()
		expect(screen.getByText(/neverland/)).toBeInTheDocument()
		expect(screen.getByText(/1234/)).toBeInTheDocument()
	})
	it('should match to snapshot', () => {
		const { container } = render(<BoxInfo {...mockProps} />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
