import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setSearch } from "../features/searchSlice";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  return (
    <>
      <form className="mt-10 w-full flex justify-center  px-10">
        <div className="flex w-full rounded-3xl p-2 border-2 bg-gray-50 gap-2 items-center">
          <input
            type="search"
            className=" p-1.5 w-full text-sm text-gray-900 bg-gray-50 outline-none border-none"
            placeholder="Search"
            required
            value={searchValue}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <BsSearch className="text-xl mr-2" />
        </div>
      </form>
    </>
  );
};

export default Search;
