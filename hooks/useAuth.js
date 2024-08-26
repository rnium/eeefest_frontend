import { usePost } from "./useApi";
import { useEffect } from "react";
import { api_endpoints } from "../data";


export const useLogin = () => {
    const {data, loading, success, error, perform_post} = usePost(api_endpoints.login, false);
    useEffect(() => {
        if (data?.access_token) {
            localStorage.setItem("admin_t", data.access_token);
        }
    }, [data])
    return {success, loading, error, login: perform_post};
}