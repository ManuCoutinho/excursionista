import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Banner } from '.'
import { setMedia } from 'mock-match-media'

describe('<BannerHome/>', () => {
	it('should render Banner title correctly ', () => {
		render(<Banner />)
		expect(
			screen.getByRole('heading', {
				name: /5 Continentes, infinitas possibilidades./
			})
		).toBeInTheDocument()
	})
	it('should render Banner with right background', () => {
		const { container } = render(<Banner />)
		expect(container.firstChild).toHaveStyle(
			'background-image: url("/assets/banner/bg.jpg")'
		)
	})
	it('should render Banner with right assets in window large than 1024px', () => {
		setMedia({
			width: '1440px',
			type: 'screen',
			orientation: 'landscape',
			'prefers-color-scheme': 'dark'
		})

		render(<Banner />)
		expect(
			screen.getByRole('img', { name: /Airplane/ })
		).toBeInTheDocument()
	})
})
