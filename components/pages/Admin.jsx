'use client'
import { useState, useEffect } from "react"
import { useGet } from "@/hooks/useApi";
import { admin_urls } from "@/lib/data/api_urls";

const Admin = () => {
    const {
        data: userinfo, 
        success, 
        error,
        loaded,
        loading,
        perform_get
    } = useGet(admin_urls.userinfo, true)

    useEffect(() => {
        if (!loaded) {
            perform_get();
        }
    }, [loaded])

    return (
        <div>Admin</div>
    )
}

export default Admin