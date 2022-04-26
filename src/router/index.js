import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProfTestView from '../views/ProfTestView.vue'
import CourseView from '../views/CourseView.vue'
import RateView from '../views/RateView.vue'
import ArticleView from '../views/ArticleView.vue'
import CourseFinance from '../components/CourseFinance.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path:'/proftest',
    name:'proftest',
    component:ProfTestView
  },
  {  
    path:'/courses',
    name:'course',
    component:CourseView
  },
  {
    path:'/rates',
    name:'rate',
    component:RateView
  },
  {
    path:'/articles',
    name:'article',
    component:ArticleView
  }
  ,
  {
    path:'/finance',
    name:'finance',
    component:CourseFinance
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
