import React from 'react'
import { fireEvent, renderHook, waitFor } from '@testing-library/react'
import {
	customWrapper,
	renderWithClient
} from '__mocks__/providers/ClientRender'
import { GalleryItems } from '.'
import { getUrlAndDownload } from 'functions/handleDownloadImage'
import { useQueryImages } from 'hooks/useQueryImages'

jest.mock('functions/fetchImages')
jest.mock('functions/handleDownloadImage')
const props = {
	image: 'nxkinK7hhOk',
	city: 'Rio de Janeiro',
	country: 'Brasel',
	flag: 'rj'
}

const renderGallery = () => renderWithClient(<GalleryItems {...props} />)

describe('<GalleryItems />', () => {
	jest.spyOn(React, 'useMemo')
	jest.spyOn(React, 'useState')
	it('should render the ui components correctly', () => {
		const { getByRole } = renderGallery()
		const picture = getByRole('img', { name: props.city })
		const flag = getByRole('img', { name: props.country })
		expect(picture).toBeInTheDocument()
		expect(flag).toHaveAttribute('src', 'https://flagcdn.com/w640/rj.png')
		expect(getByRole('button', { name: /download/i })).toBeInTheDocument()
	})
	it('should call function when click on download button', () => {
		const { getByRole } = renderGallery()
		const downloadButton = getByRole('button', { name: /download/i })
		fireEvent.click(downloadButton)
		expect(getUrlAndDownload).toBeCalled()
	})
	it('should render text content correctly', () => {
		const { getByText } = renderGallery()
		const textAuthor = getByText(/photo by/i)
		expect(textAuthor).toBeInTheDocument()
		expect(textAuthor).toHaveStyle('color:RGBA(255, 255, 255, 0.64) ')
	})
	it('should render the data correctly', async () => {
		const { getByRole } = renderGallery()
		const { result } = renderHook(() => useQueryImages('nxkinK7hhOk'), {
			wrapper: customWrapper()
		})
		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true)
		})

		const image = getByRole('img', { name: props.city })
		expect(image).toBeInTheDocument()
	})
})
