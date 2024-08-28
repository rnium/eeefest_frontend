import { usePost } from "./useApi";
import { useEffect } from "react";
import { admin_endpoints } from "@/lib/data/api_urls";


export const useLogin = () => {
    const {data, loading, success, error, perform_post} = usePost(admin_endpoints.login, false);
    useEffect(() => {
        if (data?.access_token) {
            localStorage.setItem("admin_t", data.access_token);
        }
    }, [data])
    return {success, loading, error, login: perform_post};
}