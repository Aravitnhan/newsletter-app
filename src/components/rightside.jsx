const RightSidebarAd = ({ sponsorAds }) => (
  <div className="col-lg-4 col-xl-4  d-lg-block">
    <div
      className="card border-0 shadow-sm sticky-top"
      style={{ top: '20px' }}
    >
      <div className="card-header bg-white border-bottom py-2">
        <small className="text-muted text-uppercase fw-semibold">
          Sponsored
        </small>
      </div>

      <div className="card-body p-3">
        <div className="d-flex flex-column gap-3">

          {sponsorAds.map((ad, index) => (
            <a
              key={index}
              href={ad.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="sponsor-card p-2 rounded-3 bg-light">

                {/* Full-width image */}
                {ad.image ? (
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="rounded mb-2 sponsor-img-full"
                  />
                ) : (
                  <div className="sponsor-placeholder-lg mb-2">
                    {ad.title}
                  </div>
                )}

                {/* <div className="small fw-semibold text-dark mb-1">
                  {ad.title}
                </div>

                <div
                  className="text-muted"
                  style={{ fontSize: '11px', lineHeight: '1.4' }}
                >
                  {ad.description}
                </div> */}

              </div>
            </a>
          ))}

        </div>
      </div>
    </div>
  </div>
);

export default RightSidebarAd;
