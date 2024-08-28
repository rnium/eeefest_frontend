import { usePost } from "./useApi";
import { useEffect } from "react";
import { admin_endpoints } from "@/lib/data/api_urls";


export const useLogin = () => {
    const {data, loading, success, error, perform_post, reset} = usePost(admin_endpoints.login, false);
    useEffect(() => {
        if (data?.auth_token) {
            localStorage.setItem("admin_t", data.auth_token);
        }
    }, [data])
    return {success, loading, error, login: perform_post, reset};
}