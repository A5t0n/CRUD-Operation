import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios'

function Home (){
    useEffect(()=>{
        axios.get('http://localhost:3000/')
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
    },[])
    return (
        <></>
    );
}

export default Home;
