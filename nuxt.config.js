
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Nuxt-Post",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  loadingIndicator:{
    color:'#3cb371',
    name:'circle'
  },
  /*
  ** Global CSS
  */
  css: ['~assets/styles/main.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/componentslist.js",
    "~plugins/datefilter.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
    axios:{
      baseURL:process.env.BASE_URL || 'https://practicenuxt-ba183-default-rtdb.firebaseio.com',
      credentials:false
    },
    
 
  components:true,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env:{
    baseUrl: process.env.BASE_URL || 'https://practicenuxt-ba183-default-rtdb.firebaseio.com',
    fbAPIKey:"AIzaSyDVXJfEHWdFXX9_Fi6DnPpCI7VsM6wtjC8"
    
  },
  transition:{
      name:'fade',
      mode:'out-in'
  },
  // router:{
  //   middleware:log
  // }
}
