import React, { useEffect, useRef, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { RiArrowUpSFill} from 'react-icons/ri'; 
import { BiExit } from 'react-icons/bi';
import { HiOutlineSwitchHorizontal} from 'react-icons/hi';
import { FaAddressBook, FaAngleDoubleDown, FaBalanceScaleRight, FaBook, FaEdit, FaExchangeAlt, FaHome, FaMicrophone, FaPoll, FaRegMap, FaSave, FaVials } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import "./style/navi.css"
import DarkMode from './Dark/DarkMode';
import { useDetectOutsideClick } from './useDetect';



const Navigation = ({props,modalClose}) => {
     const [isOpen, setMenu] = useState(false);
     const [button, setButton] = useState(true);
     const [click, setClick] = useState(false)

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        const showButton = () => {
            if (window.innerWidth < 600) {
                setButton(false);
            } else {
                setButton(true)
            }
        }

        useEffect(() => {
            showButton()
        },[]);

     const toggleMenu = () => {
         setMenu(isOpen => !isOpen);
     }

     window.addEventListener('resize', showButton)
     

     const dropdownRef = useRef(null);
     const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
     const onClick = () => setIsActive(!isActive);

   

 
    return (
        <>
        <nav className="sidebar_wrapper" props={props}>
        

            <div className="hidden" >
            <nav
               ref={dropdownRef}
                     className={`menu ${isActive ? "active" : "inactive"}`}
            >
                         <h1>Connected</h1>
                         <div className="menu_wallet">
                             <div className="wallet">
                                 <div className="image">
                                     <div className="blockie"></div>
                                     <span></span>
                                 </div>
                                 <div className="address">
                                    <h1>0x7ce1...6412</h1>
                                    <p>Ethereum</p>
                                 </div>
                             </div>
                             <div className="item_end">
                                 <div className="item_button">
                                    <div className="flex">
                                        <FaEdit className="icon" />
                                    </div>
                                </div>
                             </div>
                             <div className="item_end_link">
                                 <div className="item_button">
                                     <div className="flex">
                                         <FaBook className='icon'/>
                                     </div>
                                </div>
                             </div>
                             <div className="item_end_link"></div>

                         </div>
                         <div className="menu_section">
                             <div className="menu_section_link">
                                 <div className="icon">
                                      <HiOutlineSwitchHorizontal  className="flex" />
                                 </div>
                                 <p>Switch Wallet Provider</p>
                             </div>
                    
                             <a href="/" className="menu_section_link">
                                 <div className="icon">
                                      <BiExit  className="flex" />
                                 </div>
                                 <p>Exit</p>
                             </a>
                         </div>
             </nav>


                <div className="brand">
                   <div className="logo">
                     <NavLink to="/Dashboard-FrontEnd" className="img">
                       <img src={process.env.PUBLIC_URL + "/images/zapper.png"} />
                       </NavLink>
                   </div>
                   <span>Zapper</span>
                </div>
                <div className="connected">
                    <div className="account" onClick={onClick}>
                        <div className="body">
                            <div className="blockie"  >
                                <div className='edit'>
                                <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"></path></g></svg>
                                </div>
                                <span></span>
                                <canvas></canvas>
                            </div>
           

                            <div className="flex-max">
                                <div className="title">
                                 <span>
                                   0x7ce1...6412
                                  </span>
                                  <div className="flex">
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon " height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
                                  </div>
                                </div>
                                <div className='level'>
                                        <span className="bar">
                                            <span className="bar_green">
                                                
                                            </span>
                                        </span>
                                    <div className="flex-between">
                                        <span>Lv.1</span>
                                        <span>0/500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>
          
                <div className="gamification">
                    <NavLink className="visible" to="/quests">
                        <button>
                            <div className="flex">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" color="inherit" class="icon " height="0.9em" width="0.9em" xmlns="http://www.w3.org/2000/svg"><path d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"></path>
                                </svg>
                                <span>Quests</span>
                                <div className="notification">

                                </div>
                            </div>
                        </button>
                    </NavLink>
                    <NavLink className="visible" to="/rewards">
                        <button>
                            <div className='flex'>
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" color="inherit" class="icon " height="0.9em" width="0.9em" xmlns="http://www.w3.org/2000/svg"><path d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"></path>
                                </svg>
                                <span>Rewards</span>
                          
                            </div>
                        </button>
                    </NavLink>
                </div>


                <div className="sidebar_menu">
                   <NavLink className="sidebar_menu_item" to="/Dashboard-FrontEnd">
                       <div className="sidebar_menu_item_icon">
                           <div className="flex">
                           <FaHome />

                           </div>
                       </div>
                       <span>Dashboard</span>
                   </NavLink>
                   <NavLink className="sidebar_menu_item" to="/exchange">
                       <div className="sidebar_menu_item_icon">
                           <div className="flex">
                           <FaExchangeAlt />

                           </div>
                       </div>
                       <span>ExChange</span>
                   </NavLink>
                   <NavLink className="sidebar_menu_item" to="/pool">
                       <div className="sidebar_menu_item_icon">
                           <div className="flex">
                           <FaPoll />

                           </div>
                       </div>
                       <span>Pool</span>
                   </NavLink>
                   <NavLink className="sidebar_menu_item" to="/save">
                       <div className="sidebar_menu_item_icon">
                           <div className="flex">
                           <FaSave />

                           </div>
                       </div>
                       <span>Save</span>
                   </NavLink>
                   <NavLink className="sidebar_menu_item" to="/address">
                       <div className="sidebar_menu_item_icon">
                           <div className="flex">
                           <FaAddressBook />

                           </div>
                       </div>
                       <span>Address Book</span>
                   </NavLink>
                   <div className="more" onClick={() => toggleMenu()}>
                       <div className="icon">
                         <FaMicrophone />
                        </div>
                        <span>More</span>
                   </div>

                   <div className={isOpen ? "show-menu" : "hide-menu"}>
                       <NavLink to="/farm" className="link"> 
                           <div className="icon">
                               <FaRegMap />
                           </div>
                           <span>Farm</span>
                       </NavLink>
                       <NavLink to="/valuts"  className="link">
                       <div className="icon">
                           <FaVials />
                       </div>
                           <span>Valuts</span>
                       </NavLink>
                       <NavLink to="/bridge" className="link">
                       <div className="icon"  >
                           <FaBalanceScaleRight />
                       </div>
                           <span>Farm</span>
                       </NavLink>
                       <NavLink to="/revoke"  className="link">
                       <div className="icon">
                           <FaAngleDoubleDown />
                       </div>
                           <span>Allowances</span>
                       </NavLink>

                   </div>
                </div>
                    
                <div className="flex-max"></div>
                <NavLink to="settings" className="sidebar_menu_icon">
                    <div className="flex">
                        <AiFillSetting className="icon"/>
                    </div>
                    <span>settings</span>
                </NavLink>
                 <div className="dropdown">
                     <div className="flex" onClick={closeMobileMenu}>
                         <img src={process.env.PUBLIC_URL + "/images/ethereum-icon.png"} />
                         <h1>Ethereum</h1>
                         <div className="hide" >
                             <RiArrowUpSFill className="icon"/>
                         </div>
                     </div>
                 </div>
                 <DarkMode />
            </div>
            </div>
        </nav>
        </>
    )
}

export default Navigation;