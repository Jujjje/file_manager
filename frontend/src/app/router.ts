import { LoginPage, RegisterPage } from '@/pages/auth'
import { HomePage } from '@/pages/home'
import { CreatePost, ShowPostPage } from '@/pages/post'
import { WelcomePage } from '@/pages/welcome'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage, meta: { guest: true }, name: '/' },
  { path: '/register', component: RegisterPage, meta: { guest: true }, name: 'register' },
  { path: '/login', component: LoginPage, meta: { guest: true }, name: 'login' },
  { path: '/create', component: CreatePost, meta: { auth: true }, name: 'create' },
  { path: '/welcome', component: WelcomePage, meta: { guest: true }, name: 'welcome' },
  { path: '/post/:id', component: ShowPostPage, meta: { auth: true }, name: 'post' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to) => {
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
