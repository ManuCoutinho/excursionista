import { waitFor, renderHook } from '@testing-library/react'
import { customWrapper } from '__mocks__/providers/ClientRender'
import { useQueryImages } from 'hooks/useQueryImages'
import { getImages } from 'functions/fetchImages'

jest.mock('functions/fetchImages')

const mockImg = 'nxkinK7hhOk'

describe('useQueryImages', () => {
	it('should load the correct image data', async () => {
		const { result } = renderHook(() => useQueryImages(mockImg), {
			wrapper: customWrapper()
		})

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true)
		})
		expect(getImages).toHaveBeenCalledWith(mockImg)
	})
})
