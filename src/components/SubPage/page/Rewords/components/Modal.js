import React, { useEffect } from 'react';
import "../style/Modal.css"
// import {useAsync} from 'react-async-hook';
// import rewardList from '../../json/rewards-items.json';

const Modal = ({modalClose,props,match}) => {

    useEffect(() => {
       document.body.style.cssText = `
          width: 100%;
          overflow-y:hidden;
          `;
          return () => {
              const scrollY = document.body.style.top;
              document.body.style.cssText = '';
          }
    })

    return (
        <>
           <div className="modal__container"  props={props}>
            <div className="modal">
                <div className="modal__card">
                    <div className="modal__header">
                        <div className='modal_header_actions'>
                        <div className="modal_block"></div>
                        <div className="modal_block_card">
                            <div className="modal_block_card_button">
                                <a href="https://opensea.io/assets/0xf1f3ca6268f330fda08418db12171c3173ee39c9/2">
                                    <img src="https://zapper.fi/images/other/opensea.webp" />
                                </a>
                            </div>
                            <div className="modal_block_card_button" onClick={modalClose}>
                              <div className="flex">

                              </div>

                             </div>
                        </div>
                        </div>
                        <div className="modal_header_media">
                            <video width="100%" autoplay loop poster='dsd'>
                                <source src="https://storage.googleapis.com/zapper-fi-assets/rewards/webm/7.webm" />
                            </video>
                        </div>
                        <div className="modal_header_text">
                            <div>
                            <h1>Zapper Terminator</h1>
                            <p>Requires 1,000 V</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal_body">
                      <div className="modal_flex">
                          <p>GEN 2 - 2</p>
                          <p>Supply: 2310 </p>
                      </div>
                      <p>Zapper Terminators are a race of Automatons created by Zapeus and imbued with the ability to channel the power of Zaps to accelerate growth in the Zapperverse.</p>
                      <div className="modal_input_box">
                          <button className="button button--disabled" disabled>-</button>
                          <span>0</span>
                          <button className="button button-main button--disabled" disabled>+</button>
                      </div>
                  
                </div>
                <div className="modal_footer">
                        <button>Craft</button>
                    </div>
            </div>
            </div>
               
        </div> 
         {/* ): ''} */}
        </>
    )
}

export default Modal;