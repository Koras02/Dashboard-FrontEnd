import React from 'react';
import { 

    AiOutlineMenuUnfold,
    AiOutlineDown
} from 'react-icons/ai'

import {
    CgMenu
} from 'react-icons/cg';

import {IoIosGitNetwork} from 'react-icons/io'

const Portfolio = () => {
    return (
        <div className="dashboard-bottom">
        <div className="dashboard-bottom_container">
            <div className="dashbaord-bottom_filter">
               <div className="dashboard-bottom_box">
                   <div className="dashboard-bottom_control">
                       <div className="dashboard-bottom_control_item--active">
                           <CgMenu color="#fff" size={12} />
                       </div>
                       <div className="dashboard-bottom_control_item">
                           <AiOutlineMenuUnfold />
                       </div>
                   </div>
               </div>
               <div className="dashboard-bottom_dropdown">
                   <div className="dashboard-bottom_dropdown_container">
                       <div className="dashboard-bottom_dropdown_flex">

                       </div>
                       <span>$0.010</span>
                       <div className="dashboard-bottom_dropdown_flex">

                        </div>
                   </div>
               </div>
               
            </div>
            <div className="dashboard-bottom_network">
                <div className="dashboard-bottom_network_box">
                    <IoIosGitNetwork />
                    <h1>Networks(9)</h1>
                    <AiOutlineDown size="10px"/>
                </div>
                <div className="dashboard-bottom_network_toggle">
                    <AiOutlineDown size="20px"/>
                </div>
            </div>
        
        </div>
    </div>
    )
}


export default Portfolio;