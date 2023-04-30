import { renderHook, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/router'
import mockRouter from 'next-router-mock'
import { render } from '__mocks__/customRender'
import { Header } from '.'

jest.mock('next/router', () => require('next-router-mock'))

describe('<Header />', () => {
	beforeEach(() => {
		mockRouter.setCurrentUrl('/home')
	})
	it('should render correctly route ', () => {
		const { result } = renderHook(() => {
			return useRouter()
		})
		expect(result.current).toMatchObject({ pathname: '/home' })
	})
	it('should render menu button in home route ', () => {
		render(<Header />)
		const menu = screen.getByRole('button', {
			hidden: true
		})
		expect(menu).toBeInTheDocument()
		expect(menu).toHaveAttribute('aria-expanded', 'true')
		expect(menu).toHaveAttribute('aria-controls', 'menu')
	})
	it('should render Logo component in Header ', () => {
		render(<Header />)
		expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()
	})
	it('should render menu Toggle button component in Header ', () => {
		render(<Header />)
		const menuClosed = screen.getByRole('button', { hidden: true })
		expect(menuClosed).toBeInTheDocument()
		fireEvent.click(menuClosed)
	})
	it('should match to snapshot ', () => {
		const { container } = render(<Header />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
