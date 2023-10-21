import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setSearch } from "../features/searchSlice";

const Search = () => {

  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(state => state.search.searchValue)


  return (
    <>
      <form className="mt-10 w-full flex justify-center px-10">
        <div className="relative w-full">
          <input
            type="text"
            className=" p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 outline-gray-300"
            placeholder="Search"
            required
            value={searchValue}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium rounded-r-3xl "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
