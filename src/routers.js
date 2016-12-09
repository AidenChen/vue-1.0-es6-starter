export default (router) => router.map({
  '/home': {
    name: 'home',
    component: require('views/home/home')
  },
  '*': {
    component: require('views/home/home')
  }
})
