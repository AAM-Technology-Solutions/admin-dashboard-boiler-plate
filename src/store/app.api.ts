import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../libs/core/axios-base-query";


export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  tagTypes: [
    "user"
  ],
  endpoints: () => ({}),
});
