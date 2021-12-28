import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import {RiArrowUpDownFill} from 'react-icons/ri'
import "./style/Exchange.css";



const ExChange = (match) => {
    return (
        <div className="exchange">
           <div className="top">
               <div className="title">
                   <div className="first">
                       <h1>ExChange</h1>
                       <p>Swap into more than 2000 tokens, using the best quotes from over 20 sources.</p>
                   </div>
                   <div className="second">
                       <a href="https://learn.zapper.fi/articles/what-is-a-decentralized-exchange">
                             Learn More
                       </a>
                   </div>
               </div>
               <div className="network">
                   <div className="network_container">
                      <div className="network_form network_form--active">
                          <img src={process.env.PUBLIC_URL + "/images/ethereum-icon.png"}></img>
                          <span>Ethereum</span>

                      </div>
                      <div className="network_form">
                          <img src={process.env.PUBLIC_URL + "/images/avalanche-icon.png"}></img>
                          <span>Avalanche</span>
                      
                      </div>
                      <div className="network_form">
                          <img src={process.env.PUBLIC_URL + "/images/binance-smart-chain-icon.png"}></img>
                          <span>BSC</span>

                      </div>
                      <div className="network_form">
                      <img src={process.env.PUBLIC_URL + "/images/fantom-icon.png"}></img>
                           <span>Fantom</span>
                      </div>
                   </div>
                   <div className="network_mobile_container">
                       <div className="network_mobile_container_form">
                           <div className="network_mobile_container_body">
                               <img src={process.env.PUBLIC_URL + "/images/ethereum-icon.png"} />
                               <span>Ethereum</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="bottom">
               <div className="container">
                   <div className="page_card">
                       <div className='page_section'>
                           <div className="page_section_container">
                               <div className="page_section_row">
                                   <h1>From</h1>
                                   <p>Balance : 0</p>
                               </div>
                               <div className="page_section_row mt-2 mb-5">
                                   <div className="page_section_row_token">
                                      <img src={process.env.PUBLIC_URL + "/images/ethereum-icon.png"}/>
                                       <div className="page_section_row_token-form">
                                          <h1>ETH</h1>
                                          <FaArrowDown className="icon" size={5} />
                                       </div>
                                    </div>

                                       <div className="page_section_row_input">
                                           <input step="any" placeholder='0' value="0" />
                                           <div className="page_section_row_input_text">
                                              ≈$0.00 
                                           </div>
                                    </div>
                               </div>
                           </div>
                           <div className="page_section_middle">
                             <div className='page_section_card_row'>
                                  <div className="page_section_car_row--center">
                                      <button>
                                          <RiArrowUpDownFill className="icon" />
                                      </button> 
                                  </div>
                             </div>
                           </div>
                           <div className="page_section_card">
                               <div className="page_section_card_row">
                                  To
                                </div>
                                <div className="page_section_card_row">
                                   <div className="page_section_card_row_container">
                                       <div className="page_section_card_row_token">
                                           <h1>Select Token</h1>
                                       </div>
                                   </div>
                                   <div className="flex--1 right">

                                   </div>
                                </div>
                           </div>
                           <div className="page_section_invest">
                               <div className="page_section_invest_content">
                                   <span>Tranaction settings</span>
                               </div>
                               <div className="page_section_invest_settings">
                                   <div className="page_section_invest_settings_left">
                                       <a href="https://learn.zapper.fi/articles/what-is-slippage">
                                           Slippage Tolerance
                                       </a>
                                   </div>
                                   <div className="page_section_invest_settings_right">
                                       3.00%
                                   </div>
                                   <div className="page_section_invest_settings_left">
                                     <a href="https://learn.zapper.fi/articles/what-is-slippage">
                                         Allowance
                                       </a>
                                   </div>
                                   <div className="page_section_invest_settings_right">4</div>
                                   <div className="hr"></div>
                                    <div className="hr"></div>
                                    <p>Estimated Gas Fee</p>
                                    <p>-</p>
                               </div>
                           </div>
                       </div>
                       
                       <div className='page_footer'>
                           <button>
                               <span>ExChange</span>
                           </button>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}


export default ExChange;