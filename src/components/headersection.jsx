import React from 'react';

const HeaderSection = ({ navUrls, logoSrc, socialUrls }) => (
  <header className="modern-header">
  <div className="header-inner">

    {/* LEFT SIDE */}
    <div className="header-left">

      {/* Logo */}
      {logoSrc && (
        <img
          src={logoSrc}
          alt="TrentGO Logo"
          className="header-logo"
        />
      )}

      {/* Title + Subtitle */}
      <div className="title-wrap">
        <h5 className="main-title">TRENTGO NEWSLETTER</h5>
        <span className="sub-title">
          Marketplace Intelligence for Port Spare Parts
        </span>
      </div>

      {/* GIF → moved here */}
      
        <img
          src={''}
          alt="newsletter gif"
          className="header-gif"
        />
      

      {/* NAV LINKS */}
      <nav className="header-nav">
        <a href="#">Marketplace</a>
        <a href="#">Featured Articles</a>
        <a href="#">Delivered Orders</a>
        <a href="#">Pricing</a>
        <a href="#">Advertise</a>
      </nav>

    </div>


    {/* RIGHT SIDE */}
    <div className="header-right">

      <div className="header-search">
        <input
          type="text"
          placeholder="Search spare parts..."
        />
      </div>

      <button className="subscribe-btn">
        Subscribe
      </button>

      <a
        href={socialUrls?.linkedin || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <i className="bi bi-linkedin"></i>
      </a>

      <a
        href={socialUrls?.xcom || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <i className="bi bi-twitter-x"></i>
      </a>

    </div>

  </div>
</header>



);


export default HeaderSection;
