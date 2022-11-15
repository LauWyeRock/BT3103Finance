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
      path: "/videos",
      component: () => import("../views/Videos.vue"),
      name: "Videos",
    },
    {
      path: "/news",
      component: () => import("../views/NewsPage.vue"),
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
      path: "/blogs",
      component: () => import("../views/Blogs.vue"),
      name: "Blogs",
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
      path: "/stocks/undefined",
      component: () => import("../views/NotFound.vue"),
      name: "NotFound",
    },
    {
      path: "/chat",
      component: () => import("../views/Chat.vue"),
      name: "Chat",
    },
    {
      path: "/chat2",
      component: () => import("../views/Chat2.vue"),
      name: "Chat2",
    },
    {
      path: "/chat3",
      component: () => import("../views/Chat3.vue"),
      name: "Chat3",
    },
    {
      path: "/chat4",
      component: () => import("../views/Chat4.vue"),
      name: "Chat4",
    },
    {
      path: "/createpost",
      component: () => import("../views/CreatePost.vue"),
      name: "CreatePost",
    },
    {
      path: "/view-post/:blogid",
      component: () => import("../views/ViewPost.vue"),
      name: "ViewPost",
    },
    {
      name: "ProfilePage",
      path: "/profile",
      component: () => import("../views/Profile.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "UserSearch",
      path: "/usersearch",
      component: () => import("../views/UserSearch.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "ProfilePageAll",
      path: "/profile/:uid",
      component: () => import("../views/Profile.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      //edit profile page.
      path: "/editprofile",
      component: () => import("../views/EditProfile.vue"),
      name: "EditProfilePage",
      meta: {
        requiresAuth: true,
      },
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
    // {
    //   path: "/inverse",
    //   component: () => import("../views/inverse.vue"),
    //   name: "inverse",
    // },
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
