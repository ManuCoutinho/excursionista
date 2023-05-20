import React from 'react'
import { screen, fireEvent, within } from '@testing-library/react'
import { renderWithClient } from '__mocks__/providers/ClientRender'
import { Menu } from '.'

jest.spyOn(React, 'useState')
jest.spyOn(React, 'useEffect')

describe('< Menu/>', () => {
	it('should render opened menu correctly ', () => {
		renderWithClient(<Menu />)
		const openButton = screen.getByRole('button', { hidden: true })
		expect(openButton).toBeInTheDocument()
		expect(openButton).toHaveAttribute('aria-expanded', 'true')
		expect(screen.queryByRole('dialog', { hidden: true }))
		fireEvent.click(openButton)
		expect(openButton).toHaveAttribute('aria-expanded', 'false')
		const drawer = screen.getByRole('dialog', { hidden: true })
		expect(drawer).toBeInTheDocument()
		expect(within(drawer).getByText(/home/i)).toBeInTheDocument()
	})
	it('should  match to snapshot', () => {
		const { container } = renderWithClient(<Menu />)
		expect(container).toMatchSnapshot()
	})
})
