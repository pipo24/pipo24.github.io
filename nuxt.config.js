module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: 'Filippo Sotto Mayor Matoso',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'filipposmm personal website' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	css: ['@/assets/scss/style.scss'],
	/*
  ** Customize the progress bar color
  */
	loading: { color: '#6e0099' },
	/*
  ** Build configuration
  */
	build: {
		/*
    ** Run ESLint on save
    */
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
