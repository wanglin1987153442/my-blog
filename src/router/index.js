 import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/views/login.vue'
import nav from '@/views/Nav.vue'
import user from '@/views/User.vue'
import special from '@/views/special.vue'
import article from '@/views/article.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		component:nav,
		children:[
			{
				path:'/user',
				component:user
			},
			{
				path:'/article',
				component:article
			},
			{
				path:'/special',
				component:special
				
			},
			{
				path:'/',
				component:article
			}
		]
	},
	
 

  {
	  path :'/login',
	
	  component:login
  }
 
]

const router = new VueRouter({
  routes
})

export default router




