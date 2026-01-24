import React from 'react';
import LeftSidebarAd from '../components/leftsidebar';
import RightSidebarAd from '../components/rightside';
import HeaderSection from '../components/headersection';
import IntelligenceHero from '../components/inteligencehero';
import PriceOutlook from '../components/priceoutlook';
import DeliveredOrders from '../components/deliveredoreder';
import SponsoredFeature from '../components/sponserfetaure';
import TopLeaderboardAd from '../components/topLeaderBoard';
import ContentCards from '../components/contentcards';
import FooterComponent from '../components/footercomponent';
const TrentGONewsletter = (props) => {
  return (
    <div className="">
    <div className="container-fluid">
      
      {/* Top Leaderboard Ad */}
      <TopLeaderboardAd adUrl={props.adImg} adImg={props.adTopImg} />
      
      {/* Header */}
      <HeaderSection navUrls={props.navUrls} logoSrc={props.logoSrc} />
      
      {/* Custom 2-Column Layout (NO LEFT SIDEBAR) */}
      <div className="row">
        <div className="col-lg-8 col-xl-8">
          <IntelligenceHero {...props.intelligence} />
          
          {/* All content now in ONE array of cards */}
          <ContentCards cards={props.contentCards} />
        </div>
        
        {/* Right Sidebar Ad */}
        <RightSidebarAd sponsorAds={props.sponsorAds} />
      </div>
      
    </div>
    <FooterComponent adFooterUrl={props.adFooterUrl} adFooterImg={props.adFooterImg}/>
  </div>
  );
};

export default TrentGONewsletter;
