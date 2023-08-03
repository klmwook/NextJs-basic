/** @type {import('next').NextConfig} */

//전역으로 쓰고싶은 sass를 위해서 sassOptions을 추가 하였음
const path = require('path');
const nextConfig = {
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/_variables.scss";`,
	},
};

module.exports = nextConfig;