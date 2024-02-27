import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { AxiosRequestConfig } from "axios";

import { getCurrentSession } from "../auth";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      uploadProgress?:AxiosRequestConfig["onUploadProgress"]
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        headers: {
          "Accept-Language": localStorage.getItem('local'), // Add the Accept-Language header here.
          "Authorization": getCurrentSession().access_token
        },
        url: baseUrl + url,
        method,
        data,
        params: { ...params},
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: axiosError,
      };
    }
  };
