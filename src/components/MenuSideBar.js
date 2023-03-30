import { ImPencil2 } from "react-icons/im";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";

const menuSidebar = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/system/createpost",
    icon: <ImPencil2 />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/system/quan-ly-bai-dang",
    icon: <MdOutlineLibraryBooks />,
  },
  {
    id: 4,
    text: "Sửa thông tin cá nhân",
    path: "/system/sua-thong-tin-ca-nhan",
    icon: <BiUserPin />,
  },
  {
    id: 5,
    text: "Liên hệ",
    path: "/system/lien-he",
    icon: <BiUserPin />,
  },
];

export default menuSidebar;
