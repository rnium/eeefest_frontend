import { message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated, setData, setLoaded } from '../redux/accountReducer';
import { useGet } from './useApi';
import { useEffect, useCallback } from 'react';
import { admin_endpoints } from "@/lib/data/api_urls";



export const useUser = () => {
    const userInfo = useSelector(state => state.account.data);
    const userIsAuthenticated = useSelector(state => state.account.isAuthenticated);
    const userIsLoaded = useSelector(state => state.account.isLoaded);
    const dispatch = useDispatch();
    const { data, loading, success, error, perform_get } = useGet(admin_endpoints.userinfo);


    useEffect(() => {
        if (!userIsLoaded) {
            perform_get();
        }
    }, [userIsLoaded])

    useEffect(() => {
        if ( !userIsLoaded && !loading && success && data) {
            dispatch(setData(data));
            dispatch(setLoaded(true));
            dispatch(setAuthenticated(true));
        } else if (error) {
            dispatch(setLoaded(true));
            dispatch(setAuthenticated(false));
        }
    }, [data, success, error])

    const reset = useCallback(() => {
        dispatch(setLoaded(false))
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem('grabit_t');
        localStorage.removeItem('grabit_refresh_t');
        reset();
        message.info('Logged Out');
    }, [])
    
    return {userInfo, userIsAuthenticated, userIsLoaded, error, loadingUser: loading, reset, logout};
}