import React from "react";
import InputFormV2 from "../../components/InputFormV2";
import InputReadOnly from "../../components/InputReadOnly";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";

const EditAccount = () => {
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="flex flex-col h-full items-center">
      <h1 className="text-3xl w-full text-start font-medium py-4 border-b border-gray-200">
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className="w-3/5 flex items-center justify-center flex-auto">
        <div className="py-6 flex flex-col gap-4 w-full">
          <InputReadOnly
            value={
              `#${currentData?.id?.match(/\d/g).join("")?.slice(0, 6)}` || ""
            }
            direction="flex-row"
            label="Mã thành viên"
          />
          <InputReadOnly
            value={currentData?.phone}
            editPhone
            direction="flex-row"
            label="Số điện thoại"
          />
          <InputFormV2 name="name" direction="flex-row" label="Tên hiển thị" />
          <InputFormV2 name="zalo" direction="flex-row" label="Zalo" />
          <InputFormV2 name="fbUrl" direction="flex-row" label="Facebook" />
          <div className="flex">
            <label className="w-48 flex-none" htmlFor="password">
              Mật khẩu
            </label>
            <small className="flex-auto text-blue-500 h-12 cursor-pointer">
              Đổi mật khẩu
            </small>
          </div>
          <div className="flex mb-6">
            <label className="w-48 flex-none" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <div>
              <input type="file" className="appearance-none my-4" id="avatar" />
            </div>
          </div>
          <Button
            text="Cập nhật"
            bgColor="bg-blue-600"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
