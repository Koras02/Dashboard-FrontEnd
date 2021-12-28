import React, {useState} from "react";
import "./style/exchange.css"
import "../exchange/style/Exchange.css";
import poolItem from '../json/pool-list.json';
import poolList from "../json/pool-items.json";

const Pool = (match) => {
    const [item,setItem] = useState(poolList);
    const [list,setList] = useState(poolItem);
    

    return (
        <div className="pool">
            <div className="top">
               <div className="title">
                   <div className="first">
                       <h1>Pool</h1>
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
               </div>
           </div>
           <div className="bottom">
               <div className="pool_bottom_full">
                   <div className="pool_bottom_full_container">
                       <div className="pool_bottom_full_container_box">
                           <div className="pool_bottom_header">
                               <h4>Explore Opportunities</h4>
                           </div>
                           <div className="pool_bottom_table">
                              <div className="pool_bottom_table_options">
                                  <div className="pool_bottom_table_filter">
                                    <div className="pool_bottom_table_filter_search">
                                        <div className="table_container">
                                             <div className="table_container_center">
                                                   <input type="text" placeholder='Filter by token,protocol'/>
                                             </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="pool_bottom_table_right">

                                  </div>
                              </div>
                              <table role="table">
                                 
                              </table>
                           </div>
                       </div>
                   </div>
                       <table>
                   {poolList.map(item => (
                       <thead role="row">
                           <tr>
                               <th className="no-flex">#</th>
                               <th colespan="1">{item.title}</th>
                               <th colespan="1">{item.Liquidity}</th>
                               <th colespan="1">{item.Fee}</th>
                               <th colespan="1"></th>
                           </tr>
                       </thead>
                   ))}

                   {poolItem.map(list => (   
                       <tbody role="rowgroup">
                           <tr role="row">
                               <td className='no-flex'>{list.id}</td>
                               <td role="cell">
                                   <div className="flex">
                                       <div className="left">
                                           <div className="tLogo">
                                               <div className="token-group">
                                                   <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x6b175474e89094c44da98b954eedeac495271d0f.png"/>
                                                   <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"/>
                                               </div>
                                               <img src="https://storage.googleapis.com/zapper-fi-assets/apps/curve.png" />
                                           </div>
                                       </div>
                                       <div className="right">
                                           <h1>3Pool Curve</h1>
                                           <p>Curve</p>
                                       </div>
                                   </div>
                               </td>
                               <td role="cell">
                                   <div className="flex">
                                  <h1 className="doller">{list.doller}</h1>
                                  </div>
                               </td>
                               <td role="cell">
                                 <h1>{list.percent}</h1>
                                 <p>{list.percent}</p>
                               </td>
                               <td role="cell">
                                   <div className="group">
                                      <button>
                                          Invest
                                      </button>
                                    </div>
                               </td>
                           </tr>
                       
                       </tbody>
                    ))}
                    </table>

                </div>
           </div>
        </div>
    )
}

export default Pool;