import { rest } from 'msw'

export const handlers = [
	rest.get(
		'https://api.unsplash.com/photos/nxkinK7hhOk',
		async (req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json({
					full: 'https://images.unsplash.com/photo-1629984557780-4dde2292e245?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMTA0MzV8MHwxfGFsbHx8fHx8fHx8fDE2ODI1OTYyODU\u0026ixlib=rb-4.0.3\u0026q=85',
					regular:
						'https://images.unsplash.com/photo-1629984557780-4dde2292e245?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMTA0MzV8MHwxfGFsbHx8fHx8fHx8fDE2ODI1OTYyODU\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
					thumb:
						'https://images.unsplash.com/photo-1629984557780-4dde2292e245?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMTA0MzV8MHwxfGFsbHx8fHx8fHx8fDE2ODI1OTYyODU\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
					small:
						'https://images.unsplash.com/photo-1629984557780-4dde2292e245?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMTA0MzV8MHwxfGFsbHx8fHx8fHx8fDE2ODI1OTYyODU\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
					author: 'Bruno Thethe',
					alt: 'gray concrete bridge over river',
					userLink: 'https://unsplash.com/@bruthethe',
					downloadLocation:
						'https://api.unsplash.com/photos/nxkinK7hhOk/download?ixid=MnwzMTA0MzV8MHwxfGFsbHx8fHx8fHx8fDE2ODI1OTYyODU'
				})
			)
		}
	)
]
