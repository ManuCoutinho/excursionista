import { screen, render } from '@testing-library/react'
import { BannerContinent } from '.'

const mockProps = {
  continent: 'Lua',
  image: 'lua',
  color: '#fff'
}
describe('<BannerContinent/>', () => {
  it('should render BannerContinent title correctly ', () => {
    render(<BannerContinent {...mockProps} />)
    expect(screen.getByRole('heading', { name: /Lua/ })).toBeInTheDocument()
  })
  it('should render BannerContinent with color prop', () => {
    render(<BannerContinent {...mockProps} />)
    expect(screen.getByRole('heading', { name: /Lua/ })).toHaveStyle('color: #fff')
  })
  it('should render BannerContinent with background image ', () => {
    const { container } = render(<BannerContinent {...mockProps} />)
    expect(container.firstChild).toHaveStyle('background-image: url("/assets/continents/lua.jpg")')
  })
  it('should BannerContinent match to snapshot ', () => {
    const { container } = render(<BannerContinent {...mockProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
