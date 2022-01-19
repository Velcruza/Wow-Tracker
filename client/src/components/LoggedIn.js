import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from './HomePage'


function LoggedIn({ setCurrentUser, currentUser }){
    return(
        <Routes>
            <Route path='/' element={<HomePage setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
        </Routes>
    )
}

export default LoggedIn