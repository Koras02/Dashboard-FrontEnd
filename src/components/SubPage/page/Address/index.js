import React from "react";
import "./style/address.css"


const Address = (match) => {
    return (
        <div className="Address">
               <div className="title">
                   <div className="container">
                  <h1>Address Book</h1>
                  </div>
              </div>
              <div className="center">
                  <div className="watchlist">
                      <p>My Bundles</p>
                      <div className="watchlist_bundle">
                          <div className="watchlist_bundle-add">
                               <h1>+</h1>
                               <p>Create Bundle</p>
                          </div>
                      </div>
                      <p>Connected Wallets</p>
                      <div className="watchlist_bundle">
                      <a href="https://zapper.fi/account/0xa33c05c3bc3cc8fc87844f86c7959af2e04c3c9d">
                         <div className="wachlist_bundle_item">
                             <div className="blockie"></div>
                             <h1>0xa33c...3c9d</h1>
                         </div>
                      </a>
                      </div>
                      <p>Watched Wallets</p>
                      <form className="watchlist_form">
                          <div className="watchlist_select">
                              <div className="watchlist_container">
                                <div className="watchlist_container_form">
                                    <input type="text" aria-autocomplete='list' placeholder='Add ENS domain, valid ETH or BTC address'></input>
                                </div>
                              </div>
                          </div>
                          <button type="submit">
                              Add
                          </button>
                      </form>
                      <div className="empty-state">
                          <div className="empty_state__icon"></div>
                          <span>You don't watch any address yet.</span>
                      </div>
                  
                  </div>
              </div>
        </div>
    )
}

export default Address;