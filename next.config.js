/** @type {import('next').NextConfig} */

//전역으로 쓰고싶은 sass를 위해서 sassOptions을 추가 하였음
const { redirect } = require('next/dist/server/api-utils');
const path = require('path');
const nextConfig = {
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/_variables.scss";`,
	},
	images: {
		domains: ['images.unsplash.com'],
	},
	async redirects() {
		return [{ source: '/redirect', destination: '/', permanent: true }];
	},
	compiler: { styledComponents: true },
};

module.exports = nextConfig;
