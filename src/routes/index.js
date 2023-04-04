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
import ManagePost from "../pages/System/MannagePost";
import Contact from "../pages/System/Contact";
import EditAccount from "../pages/System/EditAccount";
import DetailPost from "../pages/DetailPost";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/cho-thue-mat-bang", component: Ground },
  { path: "/cho-thue-can-ho", component: Apartment },
  { path: "/cho-thue-nha", component: House },
  { path: "/cho-thue-phong", component: Room },

  { path: "/system", component: System },

  { path: "/chi-tiet", component: Detail },
  { path: "chi-tiet/:title/:postId", component: DetailPost },
  { path: "/search", component: Search },
];

const privateRoutes = [
  { path: "createpost", component: CreatePost },
  { path: "quan-ly-bai-dang", component: ManagePost },
  { path: "lien-he", component: Contact },
  { path: "sua-thong-tin-ca-nhan", component: EditAccount },
];

export { publicRoutes, privateRoutes };
