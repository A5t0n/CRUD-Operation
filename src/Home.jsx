import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios'

function Home (){
    useEffect(()=>{
        axios.get('http://localhost:8081/')
    },[])
    return (
        <></>
    );
}

export default Home;
