import React from 'react';
import "./style/Quests.css";
import {FaGasPump} from 'react-icons/fa';
import QuestBody from './components/Quests';
import { Route, Routes } from 'react-router-dom';
import CountDownTimer from './components/Timer';

const Quests = () => {
    return (
    <>
       <div className="Quests-container">   
          <div className="Quest-title">
              <div className="Quest-title-container">
                  <div className="Quest-header">Quests</div>
              </div>
          </div>
          <div className="Quest-header">
              <div className="Quest-header-container">
                  <div className="mb-7">
                      <div className="page-icon"></div>
                      <div className="page-title">
                          <h3>Quests</h3>
                          <a href="https://zapper.crunch.help/season-2-gamification">
                            Learn More
                          </a>
                      </div>
                  </div>
                  {/*  info  */}
                  <div className="Quest-rewards-info">
                    <div className="Quests-rewards-balance">
                        <div className="flex">
                            <div className="rewards-balance_item">
                                <p>Synced</p>
                                <div className="rewards-balance_item_amount">
                                    0
                                </div>
                            </div>
                            <div className="rewards-balance_item">
                                <p>Pending</p>
                                <div className="rewards-balance_item_amount">
                                    495
                                </div>
                            </div>
                            <button>
                                 <FaGasPump/>
                            </button>
                        </div>    
                    </div>
                    <div className="rewrads-time">
                        <p>
                            Season 2 ends in:
                        </p>
                        <h4>6d 13h 55m</h4>
                        <p>January 2, 2022, 8:59 AM GMT+9</p>
                        <p><CountDownTimer/></p>
                    </div>
                  </div>

              </div>
          </div>
          {/* */}
          <Routes>
              <Route exact path="/" element={<QuestBody/>} >
           </Route>
          
          </Routes>
        </div>  
    </>
    )
}

export default Quests;