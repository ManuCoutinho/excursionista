import {
	VStack,
	HStack,
	Tooltip,
	IconButton,
	Text
} from '@chakra-ui/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useGallery } from 'hooks/useGallery'
import { GalleryActions } from 'models/gallery'
import { paginationIconButtonStyle } from 'styles/components/iconButton'
import { tooltipStyles } from 'styles/components/tooltip'

export const Pagination: React.FC = () => {
	const { dispatch, state } = useGallery()

	function hasNextPage() {
		if (state.page === state.images?.total_pages) {
			return true
		}
		return false
	}
	function isFirstPage() {
		if (state.page === 1) return true
		return false
	}
	function getNextPage() {
		dispatch({ type: GalleryActions.INCREMENT_PAGE })
		window.scrollTo({
			top: 100,
			behavior: 'smooth'
		})
	}
	function getPreviousPage() {
		dispatch({ type: GalleryActions.DECREMENT_PAGE })
		window.scrollTo({
			top: 100,
			behavior: 'smooth'
		})
	}

	if (
		state.images?.results.length != undefined &&
		state.images?.results.length < 1
	) {
		return null
	}
	return (
		<VStack>
			<Text fontSize='small'>Pag.</Text>
			<HStack spacing={6} display='flex' justifyContent='center'>
				<Tooltip
					aria-label='next page'
					label={isFirstPage() ? '' : 'Anterior'}
					{...tooltipStyles}>
					<IconButton
						aria-label='previous page'
						name='previous'
						isDisabled={isFirstPage()}
						icon={<BsChevronLeft />}
						{...paginationIconButtonStyle}
						onClick={getPreviousPage}
					/>
				</Tooltip>
				<Text fontWeight='semibold'>{state.page}</Text>
				<Tooltip
					aria-label='next page'
					label={hasNextPage() ? '' : 'Próxima'}
					{...tooltipStyles}>
					<IconButton
						aria-label='next page'
						name='next'
						icon={<BsChevronRight />}
						isDisabled={hasNextPage()}
						{...paginationIconButtonStyle}
						onClick={getNextPage}
					/>
				</Tooltip>
			</HStack>
		</VStack>
	)
}
