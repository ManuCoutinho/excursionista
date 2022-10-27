import { screen, fireEvent } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { ToggleButton } from '.'

describe('<ToggleButton />', () => {
  it('should render the component correctly ', () => {
    render(<ToggleButton />)
    expect(
      screen.getByRole('button', {
        name: /change color/i
      })
    ).toBeInTheDocument()
  })
  it('should render the change color mode ', () => {
    render(<ToggleButton />)
    const button = screen.getByRole('button')
    expect(document.body).toHaveClass('chakra-ui-light')
    fireEvent.click(button)
    expect(document.body).toHaveClass('chakra-ui-dark')
  })
  it('should match to snapshot', () => {
    const { container } = render(<ToggleButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
