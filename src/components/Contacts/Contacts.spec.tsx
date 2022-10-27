import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Contacts } from '.'

describe('<Contacts />', () => {
  it('should render the contact buttons correctly', () => {
    render(<Contacts />)
    expect(screen.getByRole('button', { name: /telefone/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /email/i })).toBeInTheDocument()
  })
  it('should render the text content correctly', () => {
    render(<Contacts />)
    expect(screen.getByText(/99999-9999/i)).toBeInTheDocument()
    expect(screen.getByText(/contato.excursionista@gmail.com/i)).toBeInTheDocument()
  })
})
