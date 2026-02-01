import React from 'react';

const HeaderSection = ({ navUrls, logoSrc, socialUrls }) => (
<header className="modern-header">
  <div className="header-inner">

    {/* LEFT */}
    <div className="header-left">

      <img src={logoSrc} alt="logo" className="header-logo" />

      <div className="title-wrap">
        <h5 className="main-title">TRENTGO NEWSLETTER</h5>
        <span className="sub-title">
          Marketplace Intelligence for Port Spare Parts
        </span>
      </div>

      <img src={''} alt="gif" className="header-gif" />

      <nav className="header-nav">
        <a href="#">Featured Articles</a>
        <a href="#">Market Index</a>
        <a href="#happenings">Happenings</a>
        <a href="##emailid">Advertise</a>
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
