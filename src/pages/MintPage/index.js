import React from 'react'
import NavBar from '../../components/NavBar';
import InputNumber from './Components/InputNumber';
import MintSlider from './Components/mint-Carosule';

const MintPage = () => {
    return (
        <>
            {/* <NavBar /> */}
            <div className="mint-page-container">
                <div className="mintPage-inner-wrapper">
                    <div className="mintPage-heading"><span>Join</span>  the culture</div>
                    <div className="mintPage-subheading">Over <span>7000 </span>icons waiting for you</div>

                    <div className="sales-text">
                        <div className="leftSide-text">
                            <div className="text-wrapper">
                                <img src="/assets/svg/Mint-page/mint-icon-factorial.svg" alt="" />
                                <h5>Presale @ <span>0.4279ETH</span>/icons</h5>
                            </div>
                        </div>
                        <div className="rightSide-text">
                            <img src="/assets/svg/Mint-page/clock-icon.svg" alt="clock" />
                            <h5>10days left</h5>
                        </div>
                    </div>
                    <div className="mint-buttons">
                        <div className="number-incrementor">
                            <InputNumber />
                            <div className="input-btn-line-1"></div>
                            <div className="input-btn-line-2"></div>
                        </div>

                        <div className="mint-now-btn">
                            <div className="mint-btn-line-top-right-1"></div>
                            <div className="mint-btn-line-top-right-2"></div>
                            <span>Connect wallet</span>
                            <div className="mint-btn-line-1"></div>
                            <div className="mint-btn-line-2"></div>
                        </div>


                    </div>
                    <MintSlider />
                </div>
            </div>
        </>

    )
}

export default MintPage;