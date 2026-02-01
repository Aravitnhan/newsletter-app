import React from 'react';
import gif from '../assets/image/header/feb2026.png';
const HeaderSection = ({ navUrls, logoSrc, socialUrls }) => (
<header className="modern-header">
  <div className="header-inner">

    {/* LEFT */}
    <div className="header-left">

      <img src={logoSrc} alt="logo" className="header-logo" />

      <div className="title-wrap">
        <h5 className="main-title">TRENTGO NEWSLETTER  <span style={{fontFamily:"cursive",color:'orange'}}><strong>#FEB'26</strong></span></h5>
        <span className="sub-title">
          Marketplace Intelligence for Port Spare Parts
        </span>
      </div>

      {/* <img src={gif} alt="gif" className="header-gif" /> */}

      <nav className="header-nav">
        <a href="#">Featured Articles</a>
        <a href="#">Market Index</a>
        <a href="#happenings">Updates</a>
         <a href="#sponser">Sponser</a>
        {/* <a href="#emailid">Advertise</a> */}
      </nav>

    </div>

    {/* RIGHT */}
    <div className="header-right">
      <input
        className="header-search"
        placeholder="Search"
      />
      <button className="subscribe-btn">Subscribe</button>
    </div>

  </div>
</header>




);


export default HeaderSection;
