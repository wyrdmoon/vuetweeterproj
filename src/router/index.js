import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import Home from "../views/Home.vue";
import EditUser from "../views/EditUser.vue";
import DeleteUser from "../views/DeleteUser.vue";

Vue.use(VueRouter);

const routes = [
   {
     path: "/signup", 
     name: "signup-page",
     component: SignupPage
   },
  {
    path: "/login", 
     name: "login-page",
     component: LoginPage
  },
  {
    path: "/home",
    name: "home-page",
    component: Home
  },
  {
    path: "/edituser",
    name: "edit-user",
    component: EditUser
  },
  {
    path: "/deleteuser",
    name: "delete-user",
    component: DeleteUser
  }

  
];

const router = new VueRouter({
  routes
});

export default router;
