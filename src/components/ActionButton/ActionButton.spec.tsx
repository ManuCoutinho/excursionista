import { screen, render } from '@testing-library/react'
import { ActionButton } from '.'

describe('<ActionButton/>', () => {
  it('should render Action Button correctly', () => {
    const { container } = render(<ActionButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button').firstChild).toHaveTextContent('Vamos nessa?')
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="css-wx3s20"
      >
        <p
          class="chakra-text css-wmz062"
        >
          Vamos nessa?
        </p>
        <p
          class="chakra-text css-0"
        >
          Então escolha seu continente
        </p>
      </button>
    `)
  })
})
