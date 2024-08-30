'use client'

import { useUser } from "@/hooks/useUser";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import Loader from "../atoms/Loader";
import '@/styles/admin.css';


const Admin = () => {
    const { userIsLoaded, userIsAuthenticated } = useUser();
    if (!userIsLoaded) {
        return <Loader />
    } else if (!userIsAuthenticated) {
        return <AdminLogin />
    } else {
        return <AdminDashboard />
    }

}

export default Admin;