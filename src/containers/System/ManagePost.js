import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import moment from "moment";
import { Button, UpdatePost } from "../../components";
import { apiDeletePost, apiRequestExpired } from "../../services";
import Swal from "sweetalert2";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import EditAccount from "./EditAccount";

const ManagePost = () => {
  const dispach = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { postOfCurrent, dataEdit } = useSelector((state) => state.post);
  const [updateData, setUpdateData] = useState(false);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [isExpired, setIsExpired] = useState(null);
  useEffect(() => {
    dispach(actions.getPostsLimitAdmin({ status }));
  }, [dataEdit, updateData, status]);
  useEffect(() => {
    setPosts(postOfCurrent);
  }, [postOfCurrent]);

  useEffect(() => {
    !dataEdit && setIsEdit(false);
  }, [dataEdit]);
  const handleDeletePost = async (postId) => {
    const response = await apiDeletePost(postId);
    if (response?.data.err === 0) {
      setUpdateData((prev) => !prev);
    } else {
      Swal.fire("Oops!", "Xóa tin đăng thất bại", "error");
    }
  };
  const handleExpired = async () => {
    const response = await apiRequestExpired({
      price: price * 5000,
      days: price,
      pid: isExpired,
    });
    if (response?.data.err === 0) {
      setIsExpired(null);
      setPrice(0);
      setUpdateData((prev) => !prev);
    } else {
      Swal.fire("Oops!", "Xóa tin đăng thất bại", "error");
    }
  };
  return (
    <div className="flex flex-col gap-6">
      {isExpired && (
        <div
          onClick={() => setIsExpired(null)}
          className="absolute top-0 left-0 bottom-0 right-0 bg-overlay-30 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-8 bg-white w-[400px] rounded-md flex flex-col gap-2"
          >
            <span>Nhập số ngày bạn muốn gia hạn:</span>
            <div>
              <input
                type="number"
                className="px-4 py-2 rounded-md border"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <span>
              <span>Tổng tiền cần gia hạn: </span>
              <span className="font-bold">
                {Number(price * 5000).toLocaleString() + " vnđ"}
              </span>
            </span>
            <button
              type="button"
              className="px-4 py-2 text-white font-bold bg-blue-500 rounded-md"
              onClick={handleExpired}
            >
              Gia hạn
            </button>
          </div>
        </div>
      )}
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-sky-400 ">Quản lý tin đăng</h1>
        <div className="text-sm p-4 rounded-md text-blue-800 bg-gray-100 italic">
          Sau khi xác nhận gia hạn, vui lòng chủ trọ hãy bank tiền gia hạn theo{" "}
          <a
            className="text-blue-500 hover:underline"
            href="http://zalo.me/0966779310"
          >
            tài khoản này
          </a>{" "}
          để admin duyệt nhé ~
        </div>
        <select
          onChange={(e) => setStatus(+e.target.value)}
          value={status}
          className="outline-none border p-2 border-gray-200 rounded-md"
        >
          <option value="">Lọc theo trạng thái</option>
          <option value="1">Đang hoạt động</option>
          <option value="2">Đã hết hạn</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="w-full bg-gray-100">
            <th className="border text-center">Mã tin</th>
            <th className="border text-center">Tiêu đề</th>
            <th className="border text-center">Giá</th>
            <th className="border text-center">Ngày bắt đàu</th>
            <th className="border text-center">Ngày hết hạn</th>
            <th className="border text-center">Trạng thái</th>
            <th className="border text-center">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {!posts ? (
            <tr>
              <td>Chưa có bài đăng</td>
            </tr>
          ) : (
            posts?.map((item) => {
              return (
                <tr className="text-center" key={item.id}>
                  <td className="text-center py-4 border-b">{item?.id}</td>
                  <td className="text-center py-4 border-b  font-medium">{`${item?.title}`}</td>
                  <td className="text-center py-4 border-b">
                    {item?.attributes?.price}
                  </td>
                  <td className="text-center py-4 border-b">
                    {moment(item?.createdAt).format("DD/MM/YYYY")}
                  </td>
                  <td className="text-center py-4 border-b">
                    {moment(item?.expired).format("DD/MM/YYYY")}
                  </td>
                  <td className="text-center py-4 border-b">
                    {item?.expireds?.status === "Pending" ? (
                      <span className="px-4 py-2 text-orange-500 text-l">
                        Gia hạn
                      </span>
                    ) : new Date(item?.expired).getTime() >=
                      new Date().getTime() ? (
                      <span className="px-4 py-2 text-green-500 font-bold text-l">
                        Hoạt động
                      </span>
                    ) : (
                      <span className="px-4 py-2 font-bold text-red-600 text-l">
                        Hết hạn
                      </span>
                    )}
                  </td>
                  <td className="text-center font-bold  py-1 border-b">
                    {new Date(item?.expired).getTime() < new Date().getTime() &&
                      !item.expireds?.id && (
                        <Button
                          text="Gia hạn"
                          textColor="text-blue-600 ml-3 hover:underline py-1"
                          onClick={() => setIsExpired(item.id)}
                        />
                      )}
                    {/* <Button
                      text="Sửa"
                      textColor="text-blue-500 hover:underline py-1"
                      onClick={() => {
                        dispach(actions.editData(item));
                        setIsEdit(true);
                      }}
                    >
                    </Button>
                    <Button
                      text="Xóa"
                      textColor="text-blue-500 hover:underline py-1"
                      onClick={() => handleDeletePost(item.id)}
                    /> */}
                    <div className="pl-2 flex flex-row">
                      <span
                        className="p-2 cursor-pointer text-blue-500 hover:underline basis-1/2"
                        onClick={() => {
                          dispach(actions.editData(item));
                          setIsEdit(true);
                        }}
                      >
                        <BiEditAlt color="blue" size="24px" />
                      </span>
                      <span
                        className="p-2 cursor-pointer text-blue-500 hover:underline basis-1/2"
                        onClick={() => handleDeletePost(item.id)}
                      >
                        <MdDelete color="red" size="24px" />
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
    </div>
  );
};

export default ManagePost;
