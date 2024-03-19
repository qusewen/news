import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => `/posts`,
        }),
        getPost: builder.query<Post, string>({
            query: (id: string) => `/posts/${id}`,
        }),
    }),
});

export const {useGetPostsQuery, useGetPostQuery} = api;