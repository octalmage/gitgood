import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Admin from '@/views/Admin.vue'
import Home from '@/views/Home.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/admin',
		component: Admin,
	},
	{ path: '/wallet', component: Index },
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
