import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { setMedia } from 'mock-match-media'
import Footer from '.'

describe('<Footer />', () => {
	it('should render the subtitles correctly ', () => {
		render(<Footer />)
		expect(
			screen.getByRole('heading', { name: /redes sociais/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /menu/i })
		).toBeInTheDocument()
	})
	it('should render the logo component correctly ', () => {
		setMedia({
			width: '1440px',
			type: 'screen',
			orientation: 'landscape',
			'prefers-color-scheme': 'dark'
		})
		render(<Footer />)
		expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()
	})
	it('should render the Contacts component correctly ', () => {
		render(<Footer />)
		expect(
			screen.getByRole('button', {
				name: /telefone/i
			})
		).toBeInTheDocument()
		expect(
			screen.getByRole('button', {
				name: /email/i
			})
		).toBeInTheDocument()
	})
})
