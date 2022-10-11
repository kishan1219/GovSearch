import { Home, About, Styleguide } from "./pages";

export const routes =[
    {
        path: "/",
        component: Home,
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
]


