import React from 'react'
import AboutUs from '../AboutUs';
import BluePrint from '../BluePrint';
import Faq from '../faq';
import Footer from '../Footer';
import JoinCommunity from '../JoinCommunity';
import MintSection from '../Mint-section';
import NavBar from '../NavBar';
import OurSponsors from '../OurSponsors';
import Team from '../Team';
import Icon from '../TheIcons';
import { Link, useLocation } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <NavBar />

      <div className="homepage" id='welcome'>
        <div className="homepage-inner-wrapper">
          <div className="homepage-heading"><span>WE</span> Are the culture</div>
          <div className="homepage-subheading">Greatness is in our DNA</div>
          <div className="homepage-btns">
            <div className="explore">

              <div className="line-pair lp-bottom">
                <div></div>
                <div></div>
              </div>
              <p>Explore
              </p>
            </div>
            
            <Link className='link-class' to="/mint"><div className="mintnow">

              <div className="line-pair lp-rotated lp-top">
                <div></div>
                <div></div>
              </div>
              <p>

                Mint now
              </p>
              <div className="line-pair lp-bottom">
                <div></div>
                <div></div>
              </div>

            </div>
            </Link>
          </div>

        </div>
      </div>
      <ScrollBox />
      <AboutUs />
      <Icon />
      <BluePrint />
      <Team />
      <MintSection />
      <Faq />
      <JoinCommunity />
      <OurSponsors />
      <Footer />

    </>
  )
}

export function ScrollBox() {
  const startScroll = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className="scroll-container" onClick={startScroll}>
      <div className="scroll-heading">Scroll to see more</div>
      <img src="assets/svg/HomePage/downarrowscroll.svg" alt="" />

    </div>
  )
}