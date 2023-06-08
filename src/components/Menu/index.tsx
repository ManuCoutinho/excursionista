import { Fragment } from 'react'
import Link from 'next/link'
import {
	IconButton,
	ListItem,
	List,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerHeader,
	DrawerCloseButton,
	HStack,
	Text,
	useColorModeValue,
	DrawerFooter
} from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io'
import { useMenu } from 'hooks/useMenu'
import { NavButton } from 'components/NavButton'
import { ToggleButton } from 'components/ToggleButton'

export const Menu: React.FC = () => {
	const color = useColorModeValue('white', 'purple.900')
	const { data } = useMenu()
	const { isOpen, onClose, onOpen } = useDisclosure()
	const ariaLabel = isOpen ? 'close menu' : 'open menu'
	const ariaExpanded = isOpen ? false : true

	return (
		<Fragment>
			<IconButton
				aria-label={ariaLabel}
				name='menu'
				icon={<IoMdMenu />}
				onClick={onOpen}
				aria-controls='menu'
				aria-hidden={true}
				aria-expanded={ariaExpanded}
				variant='ghost'
				fontSize={28}
				mt={4}
			/>
			<Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent bg={color}>
					<DrawerCloseButton />
					<DrawerHeader
						borderBottomWidth={1}
						mb={6}
						cursor='pointer'
						_hover={{
							color: 'yellow.500'
						}}>
						<Link
							href={{
								pathname: `/`
							}}
							key={`menu-:home:`}
							passHref
							legacyBehavior>
							<HStack onClick={onClose}>
								<NavButton />
								<Text>Home</Text>
							</HStack>
						</Link>
					</DrawerHeader>
					<DrawerBody>
						<List role='menu' aria-orientation='vertical' spacing={4}>
							{data.length > 1
								? data?.map(({ id, name, slug }) => (
										<Link
											href={{
												pathname: `/continent/${slug}`,
												query: { continent: id }
											}}
											key={`menu-:${id}:`}
											passHref
											legacyBehavior>
											<ListItem
												onClick={onClose}
												role='menuitem'
												cursor='pointer'
												_hover={{
													color: 'yellow.500',
													textDecoration: 'underline'
												}}>
												{name}
											</ListItem>
										</Link>
								  ))
								: null}
						</List>
					</DrawerBody>
					<DrawerFooter borderTopWidth={1} mb={4}>
						<ToggleButton />
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Fragment>
	)
}
