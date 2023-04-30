import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Contacts } from '.'

jest.mock('functions/handleDownloadImage')
jest.mock('functions/handleRemoveAccent')

describe('<Contacts />', () => {
	jest.spyOn(React, 'useMemo')
	it('should render the contact buttons correctly', () => {
		render(<Contacts />)
		expect(
			screen.getByRole('button', { name: /telefone/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('button', { name: /email/i })
		).toBeInTheDocument()
	})
	it('should render the text content correctly', () => {
		render(<Contacts />)
		const phone = screen.getByText(/99999-9999/i)
		expect(phone).toBeInTheDocument()
		expect(phone).toHaveStyle('color:RGBA(255, 255, 255, 0.64) ')
		expect(
			screen.getByText(/contato.excursionista@gmail.com/i)
		).toBeInTheDocument()
	})
})
