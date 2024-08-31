import { usePost } from "./useApi";
import { useEffect } from "react";
import { admin_endpoints } from "@/lib/data/api_urls";
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../redux/accountReducer';
import { message } from "antd";


export const useLogin = () => {
    const {data, loading, success, error, perform_post, reset} = usePost(admin_endpoints.login, false);
    useEffect(() => {
        if (data?.auth_token) {
            localStorage.setItem("admin_t", data.auth_token);
        }
    }, [data])
    return {success, loading, error, login: perform_post, reset};
}

export const useLogout = () => {
    const {loading, success, error, perform_post, reset} = usePost(admin_endpoints.logout);
    const dispatch = useDispatch();
    useEffect(() => {
        if (success) {
            message.info("Logged out")
            dispatch(setAuthenticated(false));
            localStorage.removeItem("admin_t");
        }
    }, [success])
    return {success, loading, error, logout: perform_post, reset};
}