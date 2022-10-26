import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/Home.vue"), name: "Home" },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
      name: "Register",
    },
    {
      path: "/sign-in",
      component: () => import("../views/SignIn.vue"),
      name: "SignIn",
    },
    {
      path: "/feed",
      component: () => import("../views/Feed.vue"),
      name: "Feed",
      // Right now I want to prevent access to some pages 
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/news",
      component: () => import("../components/NewsPage.vue"),
      name: "News",
    },
    {
      path: "/forum",
      component: () => import("../views/Forum.vue"),
      name: "Forum",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/forgotPassword",
      component: () => import("../views/ForgotPassword.vue"),
      name: "ForgotPassword",
    },
    {
      path: "/stocks/:stock", 
      component: () => import("../views/StockPage.vue"),
      name: "Stocks",
    },
    {
      path:"/stocks/undefined",
      component: () => import("../views/NotFound.vue"),
      name: "NotFound"
    },
    {
      path: "/chat",
      component: () => import("../views/Chat.vue"),
      name: "Chat",
    },
    {
      path: "/createpost",
      component: () => import("../views/CreatePost.vue"),
      name: "CreatePost",
    },
    {
      path: "/view-post/:blogid", // Changed here
      component: () => import("../views/ViewPost.vue"),
      name: "ViewPost",
    },
    {
      path: "/pfp",
      component: () => import("../views/Profile.vue"),
      name: "ProfilePage",
    },
    {
      path: "/stock-screener",
      component: () => import("../views/StockScreener.vue"),
      name: "StockScreener",
    },
    {
      path: "/papertrading",
      component: () => import("../views/PaperTrading.vue"),
      name: "PaperTrading",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("../views/NotFound.vue"),
      name: "NotFound",
    },
  ],
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
    );
  });
};

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
