import React from 'react';
import "./style/Dash.css";
import { NavLink, Routes,Route } from 'react-router-dom';
import Portfolio from './components/menu/Poftfolio';
import Nft from './components/menu/Nft';
import Navigation from './navigation';


const Dashboard = (match) => {
    return (
        <>
        <div className="dashboard">
           <Navigation />
            <Routes>
                <Route exact path='/' element={<Portfolio/>} />
            </Routes>

        </div>
        </>
    )
}


export default Dashboard;