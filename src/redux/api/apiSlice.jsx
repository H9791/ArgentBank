import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1' }),
    tagTypes : ['Profile'],

    endpoints: builder => ({

        authorizeUser: builder.mutation({
            query: (payload) => {
                return ({
                    url: '/user/login',
                    method: 'POST',
                    body: { email: payload.username, password: payload.password },
                    headers: { 'Content-Type': 'application/json' }
                })
            }
        }),
        
        fetchProfile: builder.query({
            providesTags: ['Profile'],
            query: (payload) => {
                return ({
                    url: '/user/profile',
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${payload}`
                    }
                })
            },
            transformResponse: responseData => {
                return {
                    email: responseData.body.email,
                    firstName: responseData.body.firstName,
                    lastName: responseData.body.lastName,
                    userName: responseData.body.userName
                }
            }
        }),

        updateUsername: builder.mutation({
            invalidatesTags: ['Profile'],
            query: (payload) => {
                console.log("payload.token: ", payload.token)
                return ({
                    url: '/user/profile',
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${payload.token}`
                    },
                    body: {
                        userName: payload.userName
                    }
                })
            },
            
        })
    })
})

export const { useAuthorizeUserMutation, useFetchProfileQuery, useUpdateUsernameMutation } = apiSlice