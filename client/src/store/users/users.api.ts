import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, ServerResponse } from "../../models/models";


export const usersApi = createApi({
    reducerPath: 'users/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3000'
    }),
    endpoints: build => ({
        searchUsers: build.query<ServerResponse<IUser>, string>({
            query: ( search: string ) => ({
                url: '',
                params: {
                    term: search,
                }
            })
        })
    })
})

export const { useSearchUsersQuery } = usersApi