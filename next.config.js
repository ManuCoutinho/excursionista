/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	images: {
		domains: ['https://flagcdn.com/', 'https://unsplash.com/', 'flagcdn.com', 'images.unsplash.com']
	}
}

module.exports = nextConfig;
