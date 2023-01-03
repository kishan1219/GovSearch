import {
  home,
  Styleguide,
  login,
  Notification,
  Account,
  AccountSetting,
  stats,
  SearchHistory,
  Download,
  Favorites,
  SearchResult,
  ResultDetails,
  StateResult,
  ContactDetail,
  VendorResult,
  News,
  TmAdmin,
  FederaleDepartment,
  FederaleMarkowitz,
  FederaleAcquisition,
  FederaleCio,
  StateMadison,
  StateCommision,
  StateDale,
  StateJanPublic,
  VendorBae,
  VendorBrian,
  VendorCio,
  VendorDynetics,
  FederalPublicDetail,FederalContactDetail ,
  StatePublicdetail,StateContactdetail,
  VendorContactDetail, VendorOfficeDetail ,

} from "./pages";


export const routes = [
  {
    path: "/",
    component: home,
    exact: true,
  },
  {
    path: "/style-guide",
    component: Styleguide,
    exact: false,
  },
  {
    path: "/login",
    component: login,
    exact: false,
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
    component: Favorites,
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
  {
    path: "/state-result",
    component: StateResult,
    exact: false,
  },
  {
    path: "/contact-detail",
    component: ContactDetail,
    exact: false,
  },
  {
    path: "/news",
    component: News,
    exact: false,
  },
  {
    path: "/tm-admin",
    component: TmAdmin,
    exact: false,
  },
  {
    path: "/vendor-result",
    component: VendorResult,
    exact: false,
  },
  {
    path: "/federale-department",
    component: FederaleDepartment,
    exact: false,
  },
  {
    path: "/federale-markowitz",
    component: FederaleMarkowitz,
    exact: false,
  },
  {
    path: "/federale-acquisition",
    component: FederaleAcquisition,
    exact: false,
  },
  {
    path: "/federale-cio",
    component: FederaleCio,
    exact: false,
  },
  {
    path: "/state-madison",
    component: StateMadison,
    exact: false,
  },
  {
    path: "/state-madison",
    component: StateCommision,

    exact: false,
  },
  {
    path: "/state-madison",
    component: StateDale,
    exact: false,
  },
  {
    path: "/state-madison",
    component: StateJanPublic,
    exact: false,
  },
  {
    path: "/vendor-dynetics",
    component: VendorDynetics,
    exact: false,
  },
  {
    path: "/vendor-bae",
    component: VendorBae,
    exact: false,
  },
  {
    path: "/vendor-brian",
    component: VendorBrian,
    exact: false,
  },
  {
    path: "/vendor-cio",
    component: VendorCio,
    exact: false,
  },
  {
    path: "/state-contactdetail",
    component: StateContactdetail,
    exact: false,
  },
  {
    path: "/state-publicdetail",
    component: StatePublicdetail,
    exact: false,
  },
  {
    path: "/federal-publicdetail",
    component: FederalPublicDetail,
    exact: false,
  },
  {
    path: "/federal-contactdetail",
    component: FederalContactDetail,
    exact: false,
  },
  {
    path: "/vendor-officedetail",
    component: VendorOfficeDetail,
    exact: false,
  },
  {
    path: "/vendor-contactdetail",
    component: VendorContactDetail,
    exact: false,
  },



 
];
