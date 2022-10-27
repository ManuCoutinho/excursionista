import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { ToggleButton } from '.'
import { setMedia } from 'mock-match-media'
describe('<ToggleButton />', () => {
  it('should render the component correctly ', () => {
    render(<ToggleButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('should render the current color mode ', () => {
    setMedia({
      'prefers-color-scheme': 'dark'
    })
    render(<ToggleButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    screen.debug()
  })
})
