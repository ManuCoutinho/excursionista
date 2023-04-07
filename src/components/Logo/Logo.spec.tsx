import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Logo } from '.'

describe('<Logo />', () => {
	it('should render Logo img correctly', () => {
		render(<Logo />)
		expect(
			screen.getByAltText(/logo com a expressão Excursionista/i)
		).toBeInTheDocument()
	})
	it('should match to snapshot', () => {
		const { container } = render(<Logo />)
		expect(container.firstChild).toMatchInlineSnapshot(`
      <img
        alt="logo com a expressão Excursionista"
        aria-label="logo"
        data-nimg="1"
        decoding="async"
        height="50"
        loading="lazy"
        role="img"
        src="/assets/logo/logo.svg"
        srcset="/assets/logo/logo.svg 1x, /assets/logo/logo.svg 2x"
        style="color: transparent;"
        width="300"
      />
    `)
	})
})
