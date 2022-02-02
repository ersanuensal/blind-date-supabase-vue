import {
    createRouter,
    createWebHistory
} from 'vue-router';
import {
    supabase
} from '../supabase/init';
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Activity from "../views/Activity.vue";
import ViewActivity from "../views/ViewActivity.vue";
import ViewProfile from "../views/ViewProfile.vue";
import Explore from "../views/Explore.vue";

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
            auth: true
        }
    },
    {
        path: '/explore',
        name: 'Explore',
        component: Explore,
        meta: {
            title: 'Explore',
            auth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login',
            auth: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            title: 'Sign Up',
            auth: false
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            title: 'Profile',
            auth: true
        }
    },
    {
        path: '/activity',
        name: 'Activity',
        component: Activity,
        meta: {
            title: 'Create Activity',
            auth: true
        }
    },
    {
        path: '/view-activity/:id',
        name: 'ViewActivity',
        component: ViewActivity,
        meta: {
            title: 'View Activity',
            auth: true
        }
    },
    {
        path: '/view-profile/:username',
        name: 'ViewProfile',
        component: ViewProfile,
        meta: {
            title: 'View Profile',
            auth: true

        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Change document title
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Meet People`;
    next();

});

// Router guard for auth routes
router.beforeEach((to, from, next) => {
    const user = supabase.auth.user();
    if (to.matched.some((res) => res.meta.auth)) {
        if (user) {
            next();
            return;
        }
        next({
            name: "Login"
        });
        return;
    }
    next();
});

export default router;