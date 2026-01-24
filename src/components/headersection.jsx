import React from 'react';

const HeaderSection = ({ navUrls, logoSrc, socialUrls }) => (
  <div className="mb-4">
    <div className="card shadow-sm border-0 bg-primary text-white rounded-3">
      <div className="card-body p-4">
        
        {/* Title + Larger Logo */}
        <div className="d-flex align-items-center gap-3 mb-3">
          {logoSrc && (
            <img 
              src={logoSrc}
              alt="TrentGO Logo"
              className="rounded-circle shadow-sm"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                border: '3px solid rgba(255,255,255,0.4)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
          )}
          <div>
            <h1 className="display-4 fw-black mb-0" style={{fontSize: '2.8rem'}}>TRENTGO</h1>
            <p className="lead mb-0 small">Marketplace Intelligence for Port Spare Parts</p>
          </div>
        </div>

        {/* Nav + Search + Social + Actions */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          
          {/* Navigation */}
          <div className="d-flex flex-wrap align-items-center gap-2 small order-lg-1 order-1">
            <a href={navUrls.marketplace} className="text-white-50 text-decoration-none hover-white">Home</a>
            <span className="text-white-50">|</span>
            <a href={navUrls.intel} className="text-white-50 text-decoration-none hover-white">Most searched spare parts</a>
            <span className="text-white-50">|</span>
            <a href={navUrls.outlook} className="text-white-50 text-decoration-none hover-white">Most Viewed Post</a>
            <span className="text-white-50">|</span>
            <a href={navUrls.advertise} className="text-white-50 text-decoration-none hover-white">Advertise</a>
          </div>

          {/* Spacer pushes search to right */}
          <div className="flex-grow-1 order-lg-2 order-3"></div>

          {/* Social Media Icons */}
          <div 
          className="position-absolute top-0 end-0 p-3"
          style={{ zIndex: 10 }}
        >
          <div className="d-flex gap-2">
            <a href={socialUrls?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover-white fs-5">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href={socialUrls?.xcom || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover-white fs-5">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

          {/* Search + Buttons */}
          <div className="d-flex align-items-center gap-2 order-lg-4 order-4">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search spare parts..."
            />
            <button className="btn btn-light btn-sm fw-semibold px-3">
              Search
            </button>
            <button className="btn btn-outline-light btn-sm fw-semibold px-3">
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
);

export default HeaderSection;
