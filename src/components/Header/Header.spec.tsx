import { renderHook, screen } from '@testing-library/react'
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
		const menu = screen.getByRole('button', { name: /options/i })
		expect(menu).toBeInTheDocument()
		expect(menu).toHaveAttribute('aria-haspopup', 'menu')
		expect(menu).toHaveAttribute('aria-controls', 'menu-list-:r1:')
	})
	it('should render nav (home) button in Header ', () => {
		render(<Header />)

		expect(
			screen.getByRole('button', { name: /navigation/i })
		).toBeInTheDocument()
	})
	it('should render Logo component in Header ', () => {
		render(<Header />)
		expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()
	})
	it('should render Toggle button component in Header ', () => {
		render(<Header />)
		expect(
			screen.getByRole('button', { name: /change color/i })
		).toBeInTheDocument()
	})
	it('should match to snapshot ', () => {
		const { container } = render(<Header />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
