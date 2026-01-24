const TopLeaderboardAd = ({ adUrl, adImg }) => (
  <div className="mb-4">
    <div className="card border shadow-sm rounded-3">
      <div className="card-header bg-light border-bottom py-2 px-3">
        <small className="text-muted text-uppercase fw-bold tracking-wide">
          Sponsored Leaderboard
        </small>
      </div>
      <div className="card-body p-2 text-center">
        <a 
          href={adUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="stretched-link text-decoration-none d-block w-100"
        >
          <img 
            src={adImg} 
            className="img-fluid rounded-2 w-100 border-0" 
            style={{ 
              height: '140px',        // Banner height
              objectFit: 'contain',   // Full image visible
              maxWidth: '100%',
              minHeight: '140px'
            }}
            alt="Top Sponsored Leaderboard Ad"
            loading="lazy"
          />
        </a>
      </div>
      <div className="card-footer bg-light text-center py-1 px-3 border-top">
        <small className="text-muted">Advertisement</small>
      </div>
    </div>
  </div>
);

export default TopLeaderboardAd;
