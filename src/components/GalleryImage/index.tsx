import Image from 'next/image'
import { GalleryImageProps } from './types'

export const GalleryImage: React.FC<GalleryImageProps> = ({
	src,
	alt
}) => {
	return (
		<Image
			src={src}
			quality={60}
			loading='lazy'
			height={400}
			alt={alt}
			width={300}
			style={{
				width: '350px',
				height: '250px',
				objectFit: 'cover',
				borderRadius: '6px'
			}}
		/>
	)
}
