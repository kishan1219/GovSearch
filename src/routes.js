import { home, Styleguide, login, Notification } from "./pages";

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
  }
]



