// import
import Gpt from "views/Search/gpt";

import {
  HomeIcon,
  PersonIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/gpt/original",
    name: "gpt",
    icon: <HomeIcon color="inherit" />,
    component: Gpt,
    layout: "/admin",
  },
];
export default dashRoutes;
