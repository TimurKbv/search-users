import { FC } from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setCurrentUser, setModalActive } from "../features/modalSlice";
import { IUser } from "../models/models";


const User: FC<IUser> = (user) => {
  const dispatch = useAppDispatch()

  function schowModal() {
    dispatch(setModalActive(true))
    dispatch(setCurrentUser(user))
  }

  return (
    <div 
      className="container w-[calc((100%/3)-2rem)] min-w-fit h-[20rem] rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5 cursor-pointer text-gray-700"
      onClick={schowModal}
    >
      <div className="flex flex-col gap-5 w-fit">
        <h2 className="font-bold text-xl"> {user.name} </h2>
        <div className="flex mt-5 gap-3 items-center w-fit">
          <FcPhoneAndroid  />
          <span className="text-xs"> {user.phone} </span>
        </div>

        <div className="flex gap-3 items-center">
          <TfiEmail/>
          <span className="text-xs"> {user.email} </span>
        </div>
      </div>
    </div>
  );
};

export default User;
