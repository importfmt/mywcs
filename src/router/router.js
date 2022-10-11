import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import PersonInformation from '../components/PersonInformation.vue'
import SubmitWips from '../components/SubmitWips.vue'
import WorkRecord from '../components/WorkRecord.vue'



Vue.use(Router)

const router =  new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', component: Home, redirect: '/welcome',
    	children: [
      {path: '/welcome', component: Welcome},
      {path: '/personinformation', component: PersonInformation},
      {path: '/submitwips', component: SubmitWips},
      {path: '/workrecord', component: WorkRecord},
		]
	},
  ]
})


// Mount router navigation guard
router.beforeEach((to, from, next) => {
  if(to.path === '/login')    return next()
  const token = window.sessionStorage.getItem('token')
  if(!token) return next('/login')
  next()
})

export default router
