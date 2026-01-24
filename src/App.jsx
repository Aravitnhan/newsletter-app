import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import jusonad from'./assets/image/juson_image.png'
import ad_2 from './assets/image/ad-2.png';
import ad_3 from './assets/image/ad-3.png';
import ad_4 from './assets/image/ad-4.png';
import ad_5 from './assets/image/ad-5.png';
import TrentGONewsletter from './pages/home';
import portcontetn from './assets/image/content/Importance for port.jpg';
import imp from './assets/image/content/image.jpg'
import port from'./assets/image/content/port.jpg'
import port_2 from'./assets/image/content/port-2.jpg'
import topad from'./assets/image/top-ad.jpg'
import topad_2 from './assets/image/top-ad2.png'
function App() {
  const [count, setCount] = useState(0)
const sampleData = {
  adTopUrl: "#",
  adTopImg: topad,
  adRightUrl: "#",
  adRightImg: topad_2,
  adImg:[
    topad,
    topad_2
  ],
  navUrls: {
    marketplace: "#", intel: "#", outlook: "#", delivered: "#", advertise: "#"
  },
  logoSrc: "https://tse2.mm.bing.net/th/id/OIP.zha51VmL8QuH7uxfKMzsTAHaF4?pid=ImgDet&w=199&h=158&c=7&dpr=2&o=7&rm=3",
  
  intelligence: {
    headline: "Global Port Equipment Lead Times Hit 18-Month High",
    summary: "Supply chain bottlenecks driving unprecedented delays across crane, conveyor equipment.",
    url: "#"
  },
  sponsorAds: [
    {
      url: "http://www.juson-automation.com/",
      image: jusonad,
      title: "PortEquip Solutions",
      description: "UK crane parts"
    },
    {
      url: "#",
      image: ad_2,
      title: "Global Steel Co",
      description: "Steel castings 24/7"
    },
    {
      url: "https://www.kernal-automation.com",
      image: ad_3,
      title: "MarineTech Ltd",
      description: "Electrical systems"
    },
    {
      url: "#",
      image: ad_4,
      title: "QuickParts USA",  // No image - uses gradient
      description: "Same-day dispatch",
    },
    {
      url: "https://www.guizhouwirerope.com/",
      image: ad_5,
      title: "",
      description: "Fastest Shanghai delivery"
    }
  ],
  // 👇 NEW: Single array replaces 3 components!
  contentCards: [
    {
      image: portcontetn,
      title: "The Importance of Port Call Optimization",
      description: `
        Right now, every tool needed to synchronize a vessel’s arrival with a terminal’s real-time capability already exists. AIS, berth planning engines, crane telemetry, yard heatmaps, Machine learning & digital twins, maintenance forecasts, and weather-powered ETA models.
      `,
      url: "#",
      buttonText: "Read More"
    },
    {
      image: "https://www.trentgo.com/wp-content/uploads/2025/04/Tires.png",
      title: "PortEquip Solutions Ltd",
      description: "UK Stocked • Global Shipping • Crane Parts",
      url: "#",
      buttonText: "Visit Sponsor",
      isAd: true,
      adImages: [
      "https://www.trentgo.com/wp-content/uploads/2025/04/drive-module.jpg",
      "https://www.trentgo.com/wp-content/uploads/2025/04/depositphotos_194997996-stock-photo-car-tires-on-white-1-4.png", 
      "https://www.trentgo.com/wp-content/uploads/2025/04/Tires.png"
    ],
    },
    {
      image: imp,
      // badge: "INSIGHT",
      // badgeColor: "#1ea06e",
      title: "Why Data‑Driven Ports Actually Win",
      description: `
        I’ve seen a major terminal grind to a halt because the phones were cut off (bill overlooked and not paid on time). That’s when many of us realised that the operations literally ran on WhatsApp. That wasn’t an exception. It was a glimpse of how fragile things can be.
      `,
      url: "#",
      buttonText: "Read More"
    },
    {
      image: port,
      title: "Container Volumes and System Readiness",
      description: `
       When container volumes fall, the pressure shifts. Purchases get delayed. Standing orders get pulled back. Teams hold their breath, then rush for last-minute buys the moment an uptick appears
      `,
      url: "#",
      buttonText: "Read More"
    },
    {
      image: "https://www.trentgo.com/wp-content/uploads/2025/04/drive-module.jpg",
      title: "Global Steel Co",
      description: "Steel castings • 24/7 dispatch • Worldwide shipping",
      url: "#",
      buttonText: "Get Quote",
      isAd: true , // 👈 Another AD,
      adImages: [
      "https://www.trentgo.com/wp-content/uploads/2025/04/drive-module.jpg",
      "https://www.trentgo.com/wp-content/uploads/2025/04/depositphotos_194997996-stock-photo-car-tires-on-white-1-4.png", 
      "https://www.trentgo.com/wp-content/uploads/2025/04/Tires.png"
    ],
    },
    {
      image: port_2,
      title: "Port Procurement Needs a Reset",
      description: `
       We’re seeing more large operators taking everything in-house. It’s becoming the norm, not the exception. Even mid-tier players are leaning the same way, believing the strongest results come from internal consolidation.
      `,
      url: "#",
      buttonText: "Read More"
    },
  ]
};
  return (
    <>
    
       <TrentGONewsletter {...sampleData} />;

    </>
  )
}

export default App
