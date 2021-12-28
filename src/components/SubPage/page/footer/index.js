import React from 'react';
import "./style/Footer.css";
import {FaTwitter, FaDiscord} from 'react-icons/fa';
import {AiFillWechat} from 'react-icons/ai'; 

const Footer = (match) => {
    return (
        <div className="footer">
           <div className="footer-container">
                <a className="footer_link" href="https://zapper.canny.io/">
                    Feature Request
                </a>
                <a className="footer_link" href="https://immunefi.com/bounty/zapper/" target="_blank" rel="noopener noreferrer">
                    Bug Bounties
                </a>
                <a className="footer_link" href="https://zapper.fi/discord" target="_blank" rel="noopener noreferrer">
                    Contact Support
                </a>
                <div className="footer_icon">
                    <div className="footer_icon_container" as="a" href="https://twitter.com/zapper_fi">
                        <div className="footer_icon_flex">
                            <FaTwitter className="twitter" />
                        </div>
                        Twiiter
                    </div>
                    <div className="footer_icon_container" as="a" href="https://twitter.com/zapper_fi">
                    <div className="footer_icon_flex">
                            <FaDiscord className="discord" />
                        </div>
                        Discord
                    </div>
                    <div className="footer_icon_container" as="a" href="https://twitter.com/zapper_fi">
                    <div className="footer_icon_flex">
                            <AiFillWechat className="wechat" />
                        </div>
                        WeChat
                    </div>

                </div>
           </div>
        </div>
    )
}


export default Footer;