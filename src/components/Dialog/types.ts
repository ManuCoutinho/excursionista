import { GalleryItemsProps } from 'components/GalleryItems/types'

export interface DialogProps extends DialogContent {
  isOpen: boolean
  onClose(): void
  imgRegular?: string
  imgFull?: string
  author?: string
  backLink?: string
  fileName: string
}

type DialogContent = Omit<GalleryItemsProps, 'image'>
