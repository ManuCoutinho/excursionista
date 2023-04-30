import { screen } from '@testing-library/react'
import { renderWithClient } from '__mocks__/providers/ClientRender'
import MiddleSection from '.'

describe('<MiddleSection/>', () => {
	it('should render MiddleSection correctly ', () => {
		renderWithClient(<MiddleSection />)

		expect(
			screen.getAllByRole('link', { name: /áfrica/i })[0]
		).toBeInTheDocument()
		expect(
			screen.getAllByRole('heading', { name: /áfrica/i })[0]
		).toBeInTheDocument()
		expect(
			screen.getByRole('button', { name: /vamos nessa/i })
		).toBeInTheDocument()
		expect(screen.getByRole('slider')).toBeInTheDocument()
	})
})
