import { IconButton } from '@chakra-ui/react'
import { IoHomeOutline } from 'react-icons/io5'

export const NavButton: React.FC = () => {
	return (
		<IconButton
			aria-label='navigation-home'
			icon={<IoHomeOutline size={18} />}
			bgColor='transparent'
			color='purple.300'
			size='lg'
			variant='unstyled'
			outline={0}
			p={2}
			_focus={{
				outline: 'none'
			}}
		/>
	)
}
