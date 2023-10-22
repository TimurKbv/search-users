import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setCurrentUser, setModalActive } from "../features/modalSlice";
import { AiOutlineClose } from "react-icons/ai";

const UserModal: FC = () => {
  const isActive = useAppSelector((state) => state.modal.isActive);
  const currentUser = useAppSelector((state) => state.modal.currentUser);
  const dispatch = useAppDispatch();

  function closeModal() {
    dispatch(setCurrentUser(null));
    dispatch(setModalActive(false));
  }

  return (
    <>
      {isActive && (
        <div
          className=" w-screen h-screen backdrop-blur-sm bg-gray-400/30 fixed top-0 left-0 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col gap-5 rounded-2xl p-5 w-fit min-w-[30vw] min-h-[20vh] h-fit bg-white text-gray-700"
          >
            <h2 className="font-bold text-xl"> {currentUser?.name} </h2>

            <div className="grid grid-cols-2 grid-rows-2 mt-5 w-full">

                <div className="flex gap-2 flex-col col-span-1 ">
                    <span className="text-xs font-semibold"> Phone: </span>
                    <span className="text-xs font-semibold"> Email: </span>
                    <span className="text-xs font-semibold"> Hire date: </span>
                    <span className="text-xs font-semibold"> Address: </span>
                </div>

                <div className="flex gap-2 flex-col">
                    <span className="text-xs"> { currentUser?.phone } </span>
                    <span className="text-xs"> { currentUser?.email } </span>
                    <span className="text-xs"> { currentUser?.hire_date } </span>
                    <span className="text-xs"> { currentUser?.address } </span>
                </div>

                <div className="row-span-2 col-start-1 col-span-2 my-7">
                    <h3 className="font-semibold">Additional Information:</h3>
                    <p className="text-xs mt-2"> { currentUser?.department } </p>
                    <p className="text-xs"> { currentUser?.position_name } </p>

                </div>

            </div>
            <AiOutlineClose 
                className="absolute right-3 top-3 text-xl cursor-pointer" 
                onClick={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UserModal;
