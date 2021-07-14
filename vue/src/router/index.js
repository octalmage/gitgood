import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Admin from '@/views/Admin.vue'
import Home from '@/views/Home.vue'
import Team from '@/views/Team.vue'

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
	{
		path: '/team/:id',
		component: Team,
	},
	{ path: '/wallet', component: Index },
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
