import { renderWithClient } from '__mocks__/providers/ClientRender'
import { Skeleton } from '.'

describe('<Skeleton/>', () => {
	it('should match to snapshot ', () => {
		const { container } = renderWithClient(<Skeleton />)
		expect(container).toMatchSnapshot()
	})
})
