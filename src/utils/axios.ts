import axios, { AxiosRequestConfig } from 'axios';
import Constants from 'expo-constants';

import { SecureStoreKey } from '@/constants/secure-store.key';
import { getFromSecureStore } from '@/utils/secure-store';
//----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: Constants.expoConfig?.extra?.API_URL || "Error No API URL" });

axiosInstance.interceptors.request.use(
    async (config) => {
        // Use react-native-keychain to get the token securely
        const access_token = getFromSecureStore(SecureStoreKey.ACCESS_TOKEN)  // Access token from credentials

        if (access_token && config.headers) {
            config.headers['Authorization'] = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        if (error.response && error.response.status === 401) {
            // TODO: Handle Unauthorize response
        }

        return Promise.reject(
            (error.response && error.response.data) || 'Server Error'
        );
    }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
    const [url, config] = Array.isArray(args) ? args : [args];
    const res = await axiosInstance.get(url, { ...config });

    return res.data;
}

// ----------------------------------------------------------------------

const VERSION_PREFIX = '/v1';

// EXAMPLE
// post: {
//     get: `${VERSION_PREFIX}/posts`,
//     create: `${VERSION_PREFIX}/posts`,
//     update: (id: string) => `${VERSION_PREFIX}/posts/${id}`,
//     delete: (id: string) => `${VERSION_PREFIX}/posts/${id}`
// },

export const endpoints = {
    auth: {
        login: `${VERSION_PREFIX}/authenticate`,
        register: `${VERSION_PREFIX}/register`,
    },
}
