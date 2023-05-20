import { ColorModeScript } from '@chakra-ui/react'
import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript
} from 'next/document'
import { theme } from '../styles/theme'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return initialProps
	}

	render() {
		return (
			<Html lang='pt-BR'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='icon'
						sizes='16x16'
						href='/assets/favicon.ico'
						type='image'
					/>
					<link rel='shortcut icon' href='/assets/favicon.ico' />
					<DefaultSeo {...SEO} />
				</Head>
				<body>
					<ColorModeScript
						initialColorMode={theme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
