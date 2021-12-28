import React from 'react';
import "./style/settings.css"

const Settings = () => {
   return (
       <div className="settings">
           <div className="top">
               <div className='top_title'>
                   <div className='top_container'>
                       Settings
                   </div>
               </div>
           </div>

           <div className="profile">
               <div className="profile_top">
                   <div className="profile_top_container">
                       sdsd
                   </div>
               </div>
                <div className="profile_bottom">
                    <div className="profile_bottom_blockie">

                    </div>
                    <div className="profile_bottom_title">
                        <h4>0xa33c...3c9d</h4>
                        <p>0xa33c...3c9d</p>
                    </div>
                </div>
           </div>
           <div className="settings_container">
               <div className="title">
                   <h4>Settings</h4>
               </div>
               <div className="description">
                   <div className="description_container">
                       <div className="description_item">
                           <h1>Theme</h1>
                           <div className="description_item_right">
                            dsd   
                            </div>
                       </div>
                       <div className="description_item">
                           <h1>Base Currency</h1>
                           <div className="description_item_right">
                               
                           </div>
                       </div>
                       <div className="description_item">
                           <h1>Langauge</h1>
                           <div className="description_item_right">
                               
                               </div>
                       </div>
                       <div className="description_item">
                           <h1>Include NFTs in totals View</h1>
                           <div className="description_item_right">
                           </div>
                       </div>
                       <div className="description_item">
                           <h1>Allowances</h1>
                           <div className="description_item_right">
                           </div>
                       </div>
                       <div className="description_item">
                           <h1>Grid View</h1>
                           <div className="description_item_right">
                           </div>
                       </div>
                       <div className="description_item">
                           <h1>Slippage Tolerance</h1>
                       
                       </div>
                       <div className="description_group">
                               <div className="description_group_item">
                                   <h1>
                                       2%
                                   </h1>
                               </div>
                               <div className="description_group_item-item--active">
                                   <h1>
                                       3%
                                   </h1>
                               </div>
                               <div className="description_group_input">
                                   <input type=""
                                      placeholder='3' min="0" step="any"
                                   />
                                   <p>%</p>
                               </div>

                           </div>
                   </div>
               </div>
           </div>
       </div>
   )
}

export default Settings;