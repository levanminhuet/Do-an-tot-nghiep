import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import Search from "../pages/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/detail", component: Detail },
  { path: "/search", component: Search },
];

const privateRoutes = [{ path: "/home", component: Home }];

// const profileRoutes = [
//   // { path: '/', component: Profile},
//   { path: "address", component: Address },
//   { path: "password", component: Password },
//   { path: "purchase", component: Purchase },
// ];

export { publicRoutes, privateRoutes };
