import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: 'Home',
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/auth",
        name: 'Auth',
        component: () => import("../views/Auth.vue"),
        meta: { requiresAuth: true }
          
      },
      {
        path: "/login",
        name: 'Login',
        component: () => import("../components/LoginComponent.vue"),
      }
    ]
  })
  
  const getCurrentUser = () => {
    return new Promise(( resolve, reject ) =>{
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user)
        },
        reject
      )
    })
  }
  
  router.beforeEach( async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)){
      if (await getCurrentUser()){
        next();
      } else {
        alert("No tienes acceso");
        next('/');
      }
    } else {
      next();
    }
  });
  
  export default router