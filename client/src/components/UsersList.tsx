import useDebounce from "../hooks/debounce";
import { useAppSelector } from "../hooks/reduxHooks";
import { useSearchUsersQuery } from "../store/users/users.api";
import User from "./User";



const UsersList = () => {
    const searchValue = useAppSelector(state => state.search.searchValue)
    const debounced = useDebounce(searchValue)
    const {  isLoading, data: users } = useSearchUsersQuery(debounced);
    

    return (
        <div className="container flex flex-wrap gap-10 w-full justify-center mt-20">
            { isLoading && <p className="text-center text-lg">Loading...</p> }
            { 
                users?.map((user, i) => (
                    <User key={i} {...user} />  
                ))
            }
        </div>
    )
}

export default UsersList;