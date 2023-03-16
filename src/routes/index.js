import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import Ground from "../pages/Ground";
import House from "../pages/House";
import Room from "../pages/Room";
import Apartment from "../pages/Apartment";
import System from "../pages/System/System";
import CreatePost from "../pages/System/CreatePost";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/cho-thue-mat-bang", component: Ground },
  { path: "/cho-thue-can-ho", component: Apartment },
  { path: "/cho-thue-nha", component: House },
  { path: "/cho-thue-phong", component: Room },

  { path: "/he-thong", component: System },

  { path: "/detail", component: Detail },
  { path: "/search", component: Search },
  { path: "/ht", component: CreatePost },
];

// const privateRoutes = [{ path: "/home", component: Home }];

// const profileRoutes = [
//   // { path: '/', component: Profile},
//   { path: "address", component: Address },
//   { path: "password", component: Password },
//   { path: "purchase", component: Purchase },
// ];

export { publicRoutes };
