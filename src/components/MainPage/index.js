/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {FaSearch} from "react-icons/fa";
import {AiOutlineArrowRight} from 'react-icons/ai'


const MainPage = () => {
    return (
        <>
       <div className="container">
           <div className="container_home">
              <nav className="container_header">
                  <a className="brand" href="/">
                    <div className="logo mr-4">
                        <div className="logo-container">
                            <img src={process.env.PUBLIC_URL + "/images/christmas-hat.png"} className="hat" />
                            <img src={process.env.PUBLIC_URL + "/images/zapper.png"}  className="logo" />
                        </div>
                        <span className="name">Zapper</span>
                    </div>
                  </a>
                  <div className="middle">
                      <div className="search">
                          <FaSearch className="icon"/>
                     <div className="container">
                          <input type="text" placeholder='Search by account, token, ENS...'/>
                      </div>

                      </div>
                   
                  </div>
                  <div className="right hidden_mobile">
                     <div className="home">
                         <a  href="/watchlist">Adress Book</a>
                         <a  href="/watchlist">Learn</a>
                         <a  href="/watchlist">Build</a>
                     </div>
                  </div>

              </nav>       
            </div>
            <div className="container_section">
                <div className="container_home">
                    <div className="container_hero">
                        <h1>
                            Your homepage to <span>DeFi</span>
                        </h1>
                        <p>
                        Track all your DeFi portfolio from one place. Invest into the latest opportunities in open finance. 
                        </p>
                        <form className="container_cta">
                            <button>
                                 Connect Wallet
                            </button>
                        </form>
                        <a href="https://learn.zapper.fi/articles/what-is-defi">
                            <AiOutlineArrowRight className="icon" /> What is DeFi?
                        </a>
                    </div>
                  
                </div>
            </div>

            <div className="container_stats">
                <div className='grid'>
                    <div className="block">
                        <h2>$11.0B+</h2>
                        <h4>Invested through our platform</h4>
                        <p>Since May 2020</p>
                    </div>
                    <div className="block">
                    <h2>$11.0B+</h2>
                        <h4>Invested through our platform</h4>
                        <p>Since May 2020</p>
                    </div>
                    <div className="block">
                    <h2>$11.0B+</h2>
                        <h4>Invested through our platform</h4>
                        <p>Since May 2020</p>
                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="grid">
                    <div className="grid_item">
                            <a href="/">
                                <div className='logo'>
                                {/* <img src={process.env.PUBLIC_URL + "images/christmas-hat.png"} className="hat" /> */}
                                <svg width="30" height="30" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="logo_exterior" d="M500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500C388.071 500 500 388.071 500 250Z" fill="#784FFE"></path><path id="logo_interior" fill-rule="evenodd" clip-rule="evenodd" d="M154.338 187.869L330.605 187L288.404 250.6L388 250.118L345.792 312.652L168.382 313.787L211.25 250.633L112 250.595L154.338 187.869Z" fill="white"></path></svg>
                                </div>
                                <span>
                                    Zapper
                                </span>
                            </a>
                            <div className="locale">
                                <div className="flex"></div>
                                <div className="dropdown">
                                        en 
                                        <div className="flex">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon " height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
                                        </div>
                                </div>
                            </div>
                            <div className="copyright">
                                @ Zapper 
                                2021
                            </div>
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
                        <div className="grid_item"></div>
    
                    </div>
                
                    <div className="item">
                        <h1>Company</h1>
                        <a className="footer_link">Docs</a>
                        <a className="footer_link">Careers</a>
                        <a className="footer_link">Learn</a>
                        <a className="footer_link">Privacy Policy</a>
                        <a className="footer_link">Cookie Notice</a>
                        <a className="footer_link">Terms of Service</a>
                    </div>
                    <div className="item">
                        <h1>Support</h1>
                        <a className="footer_link">FAQ</a>
                        <a className="footer_link">Contact Support</a>
                        <a className="footer_link">Supported Platforms</a>
                        <a className="footer_link">Supported Tokens</a>
                        <a className="footer_link">Feature Request</a>
                        <a className="footer_link">Bug Bounties</a>
                    </div>
                    <div className="item">
                        <h1>Social</h1>
                        <a className="footer_link">Twitter</a>
                        <a className="footer_link">Discord</a>
                        <a className="footer_link">WeChat</a>
                
                    </div>
                </div>
                </div>
            </div>
       </div>
       </>
    )
}

export default MainPage;