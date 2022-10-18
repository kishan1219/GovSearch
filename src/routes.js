import { home, About, Styleguide, login } from "./pages";

export const routes =[
    {
        path: "/",
        component: home,
        exact: true
      },
      {
        path: "/about",
        component: About,
        exact: false
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


