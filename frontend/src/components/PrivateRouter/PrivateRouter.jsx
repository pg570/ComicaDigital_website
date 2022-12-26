import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    let userSigin = localStorage.getItem("userDetails")
    // console.log(data)
    const navigate = useNavigate();
    // console.log(data)
    const { data, error, loading } = useSelector((store) => store.auth);
    console.log(data.isAuthenticated)
    useEffect(() => {
        if (!userSigin&&!data.isAuthenticated) {
            return navigate("/login");
        }
    },[data])
    //setTimeout(()=>{
        return children
    //},500)
  
}

export default PrivateRouter
