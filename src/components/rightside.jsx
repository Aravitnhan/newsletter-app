import React from "react";
const RightSidebarAd = ({ sponsorAds }) => (
  <div className="sidebar-area">
    <div className="sidebar-card">
      {/* <div className="sidebar-header">SUPPLIERS</div> */}

      <div className="sidebar-body pt-4 pb-4">
        {sponsorAds.map((ad, index) => (
          <a
            key={index}
            href={ad.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-ad-link"
          >
            <img
              src={ad.image}
              alt={ad.title}
              className="sidebar-ad-img"
            />
          </a>
        ))}
      </div>
    </div>
  </div>
);



export default RightSidebarAd;
