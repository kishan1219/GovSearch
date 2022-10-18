import { Home, Styleguide, login } from "./pages";

export const routes =[
    {
        path: "/",
        component: Home,
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
]


