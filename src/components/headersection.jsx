import React from 'react';

const HeaderSection = ({ navUrls, logoSrc, socialUrls }) => (
  <div className="mb-4">
    <div className="card shadow-sm border-0 bg-primary text-white rounded-3">
      <div className="">

        {/* TOP BAR */}
        <div className="d-flex align-items-center justify-content-between gap-3">

          {/* LEFT – Logo + Title */}
          <div className="d-flex align-items-center gap-3 flex-shrink-0">
            {logoSrc && (
              <img
                src={logoSrc}
                alt="TrentGO Logo"
                className="header-logo"
              />
            )}
            <div className="d-none d-md-block">
              <h5 className="fw-bold mb-0">TRENTGO NEWSLETTER</h5>
              <small className="text-white-50">
                Marketplace Intelligence for Port Spare Parts
              </small>
            </div>
          </div>

          {/* CENTER – Search (YouTube style) */}
          <div className="header-search flex-grow-1 mx-3 d-none d-md-flex">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search spare parts..."
            />
            <button className="btn btn-light btn-sm px-3 fw-semibold">
              Search
            </button>
          </div>

          {/* RIGHT – Actions + Social */}
          <div className="d-flex align-items-center gap-3 flex-shrink-0">
            <button className="btn btn-outline-light btn-sm fw-semibold">
              Subscribe
            </button>

            <a
              href={socialUrls?.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href={socialUrls?.xcom || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>

        </div>

        {/* SECOND ROW – Navigation (like YouTube tabs) */}
        <div className="yt-pill-wrapper mt-3">
          <div className="yt-pill-scroll">
            <button className="yt-pill">Marketplace</button>
            <button className="yt-pill">Featured Articles</button>
            <button className="yt-pill">Delivered Orders</button>
            <button className="yt-pill">Pricing</button>
            <button className="yt-pill">Advertise</button>

          </div>
        </div>

      </div>
    </div>
  </div>
);


export default HeaderSection;
