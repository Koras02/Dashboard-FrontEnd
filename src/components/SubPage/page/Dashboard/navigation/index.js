import React, { useState } from 'react';
import { 
    AiOutlineBook,
    AiOutlinePlus,
    AiFillEdit,
    AiOutlineRedo,
  
} from 'react-icons/ai'
import { NavLink} from 'react-router-dom';
import { setMoreListCheck } from '../../../../../stores/global';


const Navigation = () => {
   

    return (
        <>
        <div className="dashboard-title">Dashboard</div>
            <div className="dashboard-header">
                <div className="dashboard-header_top">
                    <div className="dashboard-header_bundle">
                        <div className="dashboard-header_bundle_item">
                            <div className="dashboard-header_bundle_item_icon"></div>
                            <div className="dashboard-header_bundle_item_title">0x393929</div>
                        </div>
                        <div className="dashboard-header_bundle_account">
                            <div className="icon">
                                 <AiOutlineBook size="14" color="#fff"/>
                            </div>
                            <div className="flex">
                                <div className="label">No Bundles</div>
                                <button>
                                   <AiOutlinePlus />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-header_net-wroth">
                    <div className="nft_title">
                        Net Worth
                    </div>
                    <div className="nft_pay">
                        $0.00
                    </div>
                    <div className="nft_edit">
                        <button className="mr-2">
                            <AiFillEdit/>
                        </button>
                        <button>
                            <AiOutlineRedo />
                        </button>
                    </div>
                </div>
                <div className="dashboard-header_tabs">
                    <NavLink className="dashboard-header_tabs_item--active"  to="/dashboard">
                    <button>Portfolio</button>
                    </NavLink>
                    <NavLink  className="dashboard-header_tabs_item--active" to="/dashboard/nft">
                    <button className="dashboard-header_tabs_item">NFTS</button>
                    </NavLink>
                    <NavLink  className="dashboard-header_tabs_item--active" to="/dashboard/history">
                    <button className="dashboard-header_tabs_item">History</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navigation;