import React from 'react';
import "./style/allow.css"
import {IoMdUnlock} from 'react-icons/io'
import {MdCancel} from 'react-icons/md';

const Allow = () => {
   return (
       <div className="Allow-Container">
           <div className="Allow-Container_body">
              <div className="Allow-Container_body-header">
                  <div className="header-top">
                      <h1>Manager Allowances</h1>
                      <p>View and remove allowances for all Zapper smart contracts.</p>
                  </div>
                  <div className="header-bottom">
                      <a href="https://learn.zapper.fi/articles/how-to-revoke-token-allowances">
                          Learn More
                      </a>
                  </div>
              </div>
              <div className="Allow-Container_body-footer">
                  <div className="network">
                      <div className="container">
                          <div className='flex'>
                              <div className="item--active">
                                  <img src="https://zapper.fi/images/networks/ethereum-icon.png" />
                                  <h1>Ethereum</h1>
                              </div>
                              <div className="item">
                                    <img src="https://zapper.fi/images/networks/binance-smart-chain-icon.png" />
                                  <h1>BSC</h1>
                              </div>

                          </div>
                      </div>

                  </div>

              </div>
            <div className="item">
                <div className="item_col">
                    <div className="no_flex">
                        <div className="item_empty">
                            <div className="item_empty_icon">
                                <IoMdUnlock className='icon'/>
                                <MdCancel className="cancle" size={40} color="red"/>
                            </div>
                            <h1>No allowances found on Ethereum.</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
       </div>
   )
}


export default Allow;