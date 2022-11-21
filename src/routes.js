import { home, Styleguide, login, Notification, Account, AccountSetting, stats, SearchHistory, Download, Favorites, SearchResult, ResultDetails } from "./pages";

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
    component: AccountSetting,
    exact: false,
  },
  {
    path: "/stats",
    component: stats,
    exact: false,
  },
  {
    path: "/search-history",
    component: SearchHistory,
    exact: false,
  },
  {
    path: "/download",
    component: Download,
    exact: false,
  },
  {
    path: "/favorites",
    component:Favorites,
    exact: false,
  },
  {
    path: "/search-result",
    component: SearchResult,
    exact: false,
  },
  {
    path: "/result-details",
    component: ResultDetails,
    exact: false,
  },
]



