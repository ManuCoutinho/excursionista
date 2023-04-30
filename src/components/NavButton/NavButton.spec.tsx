import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { NavButton } from '.'

describe('<NavButton />', () => {
	it('should render button component correctly', () => {
		render(<NavButton />)
		const button = screen.getByRole('button', { name: /navigation/i })
		expect(button).toBeInTheDocument()
	})
	it('should match to snapshot', () => {
		const { container } = render(<NavButton />)
		expect(container).toMatchInlineSnapshot(`
		<div>
		  <button
		    aria-label="navigation-home"
		    class="chakra-button css-s6zwhs"
		    type="button"
		  >
		    <svg
		      aria-hidden="true"
		      fill="currentColor"
		      focusable="false"
		      height="18"
		      stroke="currentColor"
		      stroke-width="0"
		      viewBox="0 0 512 512"
		      width="18"
		      xmlns="http://www.w3.org/2000/svg"
		    >
		      <path
		        d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
		        fill="none"
		        stroke-linecap="round"
		        stroke-linejoin="round"
		        stroke-width="32"
		      />
		      <path
		        d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
		        fill="none"
		        stroke-linecap="round"
		        stroke-linejoin="round"
		        stroke-width="32"
		      />
		    </svg>
		  </button>
		  <span
		    hidden=""
		    id="__chakra_env"
		  />
		</div>
	`)
	})
})
