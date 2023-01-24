import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Account management",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Device Mnagement",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/dashboard",
    component: <dashboard />,
  },
  {
    type: "collapse",
    name: "Theft Management",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/dashboard",
    component: <dashboard />,
  },
  {
    type: "collapse",
    name: "GPS Tracking Management",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/dashboard",
    component: <dashboard />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/dashboard",
    component: <dashboard />,
  },
];

export default routes;
