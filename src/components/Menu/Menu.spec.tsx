import { screen, fireEvent } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Menu } from '.'

describe('< Menu/>', () => {
  it('should render the menu button correctly ', () => {
    render(<Menu />)
    const button = screen.getByRole('button', { name: /options/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
