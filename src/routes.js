import { home, Styleguide, login, Notification, Account, accountsetting, stats } from "./pages";

export const routes = [
  {
    path: "/",
    component: home,
    exact: true
  },
  {
    path: "/style-guide",
    component: Styleguide,
    exact: false
  },
  {
    path: "/login",
    component: login,
    exact: false
  },
  {
    path: "/notification",
    component: Notification,
    exact: false,
  }, 
   {
    path: "/account",
    component: Account,
    exact: false,
  },
  {
    path: "/account-setting",
    component: accountsetting,
    exact: false,
  },
  {
    path: "/stats",
    component: stats,
    exact: false,
  },
]



