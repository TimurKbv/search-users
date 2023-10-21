import { FC } from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";

type Props = {
    name: string,
    phone: string,
    email: string
}

const User: FC<Props> = ({ name, phone, email }) => {
  return (
    <div className="w-[calc((100%/3)-2rem)] h-[20rem] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
      <div className="flex flex-col gap-5 w-fit">
        <h2> {name} </h2>
        <div className="flex mt-5 gap-3 items-center w-fit">
          <FcPhoneAndroid  />
          <span> {phone} </span>
        </div>

        <div className="flex gap-3 items-center">
          <TfiEmail/>
          <span> {email} </span>
        </div>
      </div>
    </div>
  );
};

export default User;
