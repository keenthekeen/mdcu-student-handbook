import theme from '@nuxt/content-theme-docs'

export default theme({
    docs: {
        primaryColor: '#38a169'
    },
    components: () => [
        {path: '~~/components', level: 0},
        {path: '~/components', level: 1, pathPrefix: false}
    ],
    css: [
        '~~/assets/css/main.css'
    ],
})
