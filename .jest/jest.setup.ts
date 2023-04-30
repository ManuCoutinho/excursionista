import '@testing-library/jest-dom/extend-expect'
import 'mock-match-media/jest-setup'
import { server } from '../src/__mocks__/server/server'

jest.spyOn(global.console, 'warn').mockImplementation(jest.fn())
jest.spyOn(global.console, 'debug').mockImplementation(jest.fn())
jest.spyOn(global.console, 'error').mockImplementation(jest.fn())

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => 
	server.resetHandlers()
)
afterAll(() => server.close())