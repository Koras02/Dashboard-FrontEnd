import React, { useState } from 'react';
import "./style/widgets.css"
import {FaSearch} from 'react-icons/fa'
import itemList from "../json/widgets.json";
import ImageList from '../json/widgets-item.json';

const Widgets = () => {
   const [item, setItem] = useState(itemList);

    return (
        
        <div className="widgets-container">
            <div className="widgets-body">
               <div className="widgets-bottom">
                   <div className="widgets-box">
                       <div className="search">
                           <div className="icon"></div>
                           <div className="control">
                               <FaSearch className="icon" />
                               <input type="text" placeholder="Search by account, token, ENS..." />
                           </div>
                       </div>
                       <div className="watchlist">
                                <h1>{itemList.title}</h1>
                                <button></button>
                       </div>
                       <div className="token">
                           <h4>{item.TokenWatchlist}</h4>
                           <div className="form">
                               <div className="container">
                               <h4>{item.NoToken}</h4>
                               <p>{item.Searchfor}</p>
                               </div>
                           </div>
                       </div>
                       <div className="network">
                           <div className="network_fee">
                               <div className='network_title'>{item.Network}</div>
                               <div className="network_box_container">
                               <div className="network_box">
                                       <div className='network_title_left'>
                                           <span className="line">{item.Standard}</span>
                                           <span className="time">{item.min}</span>
                                       </div>
                                       <div className='network_title_right'>
                                           <span>50</span>
                                           <div className="doller">
                                               <span>$13.60</span>
                                           </div>
                                   </div>
                               </div>
                               <div className="network_box">
                                       <div className='network_title_left'>
                                           <span className="line">{item.Fast}</span>
                                           <span className="time">{item.min}</span>
                                       </div>
                                       <div className='network_title_right'>
                                           <span>50</span>
                                           <div className="doller">
                                               <span>$13.60</span>
                                           </div>
                                   </div>
                               </div>
                               </div>
                            </div>
                               <div className="network_trend">
                                   <h4 className='title'>Gas Trend (1w)</h4>
                                    <div className="graph">
                                        <div className="background">
                                           <div className="pay">
                                               <div className="col">
                                                   <h1>48</h1> 
                                                   <p>gwei</p>
                                                    
                                                    <span>+30.88%</span>
                                               </div>
                                               <p>Avg.Fee</p>
                                           </div>
                                           <div className="loop">
                                                <div className="wrapper">
                                                    <g>

                                                    </g>
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                        </div>
                       </div>
                       <div className="Learn">
                        <div className="Learn-container">
                            <div className="title">
                                <h4>Zapper Learn - Recent articles</h4>
                            </div>
                            <div className="form">
                                <div className="container">
                                    <a href="https://learn.zapper.fi/articles/what-is-gas">
                                        <div className="body">
                                            <div className="icon">⛽️</div>
                                            <div className="description">
                                                <h1>What is Gas?</h1>
                                                <p>5 min. read</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container">
                                    <a href="https://learn.zapper.fi/articles/what-is-gas">
                                        <div className="body">
                                            <div className="icon">⛽️</div>
                                            <div className="description">
                                                <h1>What is Gas?</h1>
                                                <p>5 min. read</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container">
                                    <a href="https://learn.zapper.fi/articles/what-is-gas">
                                        <div className="body">
                                            <div className="icon">⛽️</div>
                                            <div className="description">
                                                <h1>What is Gas?</h1>
                                                <p>5 min. read</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                     </div>
                   </div>
         
                      <div className="trend" >
                        <div className="trend-title" key={item.id}>
                            <h4>🔥 Pool trend by volume(24h)</h4>
                            <div className="trend-pagenation">
                               <button>l</button>
                               <div className="trend-pagenation-title">
                               1/154
                               </div>
                               <button>r</button>
                            </div>
                        </div>

                  {ImageList.map(item => (
                      <>
                         <div className="trend-box">
                             <div className="trend-box-form">
                                <div className="trend-box-form-container">
                                    <div className="trend-box-left">
                                       <img src={item.img} />
                                       <div className="trend-box-description">
                                           <span className="title">{item.title}</span>
                                           <span className="subtitle">{item.subTitle}</span>
                                       </div>
                                    </div>
                                    <div className="trend-box-right">
                                      <span>{item.percent}</span>
                                      <span className="doller">{item.doller}</span>
                                    </div>
                                </div>
                                    <div className="border"></div>
                            </div>
                         </div>
                         </>
                  ))}
                    </div>
               </div>
              </div>

       </div>
 
    )
}

export default Widgets;