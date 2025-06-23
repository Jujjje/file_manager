import { useUserStore } from '@/entities/user'
import { LoginPage, RegisterPage } from '@/pages/auth'
import { HomePage } from '@/pages/home'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage, meta: { guest: true }, name: 'home' },
  { path: '/register', component: RegisterPage, meta: { guest: true } },
  { path: '/login', component: LoginPage, meta: { guest: true } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  const store = useUserStore()
  const { user } = store

  if (user && to.meta.guest) {
    return { name: '/' }
  }
})
export default router
