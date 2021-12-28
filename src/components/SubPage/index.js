import React from 'react';
import { Routes,Route } from 'react-router-dom';
import "./SubPage.css"
import ExChange from './page/exchange';
import Dashboard from './page/Dashboard';
import Footer from './page/footer';


const SubPage = () => {
    return (
        <>
          {/* <div className="Container">
            <Navigation /> */}
            <div className="Body">
              <Routes>
                   <Route exact path="/" element={<Dashboard/>} />
                   <Route exact path="/dashboard" element={<Dashboard/>} />
                   <Route exact path="/excahnge" element={<ExChange/>} />
                   <Route exact path="/pool" element={<ExChange/>} />
                   <Route exact path="/address" element={<ExChange/>} />
                   <Route exact path="/settings" element={<ExChange/>} />
              </Routes>
            </div>
          {/* </div> */}
        </>
    )
}

export default SubPage;