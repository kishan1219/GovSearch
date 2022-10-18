import { Styleguide, login, Notification } from "./pages";

export const routes = [
  {
    path: "/",
    component: login,
    exact: true,
  },
  {
    path: "/style-guide",
    component: Styleguide,
    exact: false,
  },

  {
    path: "/notification",
    component: Notification,
    exact: false,
  },
];
