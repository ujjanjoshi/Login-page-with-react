import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser(){
    const[token,setToken]=useState();
    const[user,setUser]=useState();
    const navigate=useNavigate();
    const getToken=()=>{
        const tokenString=localStorage.getItem('token');
        const userToken=JSON.parse(tokenString);
        return userToken;
    }
    const saveToken=(user,token)=>{
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }
    const http=axios.create({
        mode: "cors",
        baseURL:"http://127.0.0.1:8000/api/auth",
        headers:{
            "Content-Type":"application/json"
        }
        
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}