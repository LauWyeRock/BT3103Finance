import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {path : "/", component: () => import("../views/Home.vue"), name:"Home"},
        {path : "/register", component: () => import("../views/Register.vue"), name:"Register"},
        {path : "/sign-in", component: () => import("../views/SignIn.vue"), name:"SignIn"},
        {path : "/feed", component: () => import("../views/Feed.vue"),name:"Feed",
        
            meta: {
                requiresAuth:true,
            }},
        {path : "/news", component: () => import("../components/NewsPage.vue"),name:"News"},
        {path : "/forum", component: () => import("../views/Forum.vue"),name:"Forum"},
        {path : "/forgotPassword", component: () => import("../views/ForgotPassword.vue"),name:"ForgotPassword"},
        {path : "/chat", component: () => import("../views/Chat.vue"),name:"Chat"},

    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}
 
router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            alert("you dont have access");
            next("/");
        }
    } else {
        next();
    }
});

export default router;