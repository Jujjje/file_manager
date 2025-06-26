import { LoginPage, RegisterPage } from '@/pages/auth'
import { HomePage } from '@/pages/home'
import { CreatePost } from '@/pages/post'
import { WelcomePage } from '@/pages/welcome'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage, meta: { guest: true }, name: '/' },
  { path: '/register', component: RegisterPage, meta: { guest: true }, name: 'register' },
  { path: '/login', component: LoginPage, meta: { guest: true }, name: 'login' },
  { path: '/create', component: CreatePost, meta: { auth: true } },
  { path: '/welcome', component: WelcomePage, meta: { guest: true }, name: 'welcome' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  // const store = useUserStore()
  // const { user } = storeToRefs(store)

  if (
    !localStorage.getItem('token') &&
    to.name !== 'register' &&
    to.name !== 'login' &&
    to.name !== 'welcome'
  ) {
    return { name: 'welcome' }
  }
})
export default router
