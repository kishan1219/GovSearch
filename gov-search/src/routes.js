import { Home, About } from "./pages";

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
]


