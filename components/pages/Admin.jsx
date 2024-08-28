'use client'

import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { Stack, CircularProgress } from "@mui/material";
import AdminLogin from "./AdminLogin";
import Loader from "../atoms/Loader";


const Admin = () => {
    const { userInfo, userIsLoaded, userIsAuthenticated } = useUser();

    if (!userIsLoaded) {
        return <Loader />
    } else if (!userIsAuthenticated) {
        return <AdminLogin />
    } else {
        return <div>Logged In</div>
    }

}

export default Admin