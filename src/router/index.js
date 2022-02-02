import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Activity from "../views/Activity.vue";
import ViewActivity from "../views/ViewActivity.vue";
import ViewProfile from "../views/ViewProfile.vue";


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }, {
        path: '/activity',
        name: 'Activity',
        component: Activity
    }, {
        path: '/view-activity/:id',
        name: 'ViewActivity',
        component: ViewActivity
    },
    {
        path: '/view-profile/:username',
        name: 'ViewProfile',
        component: ViewProfile
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Change document title

// Router guard for auth routes

export default router;