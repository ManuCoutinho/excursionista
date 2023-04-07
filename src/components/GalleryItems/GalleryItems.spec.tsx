import { fireEvent } from '@testing-library/dom'
import { renderWithClient } from '__mocks__/providers/ClientRender'
import { GalleryItems } from '.'
import { getUrlAndDownload } from 'functions/handleDownloadImage'

jest.mock('functions/handleDownloadImage')
const props = {
	image: 'image-test.png',
	city: 'Rio de Janeiro',
	country: 'Brasel',
	flag: 'rj'
}

const renderGallery = () => renderWithClient(<GalleryItems {...props} />)

describe('<GalleryItems />', () => {
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
})
