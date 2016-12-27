export default (router) => router.map({
  '/home': {
    name: 'home',
    component: require('pages/home/home')
  },
  '*': {
    component: require('pages/home/home')
  }
})
