import { useState } from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Sidenav from '../pages/Sidenav';

import { TabView, TabPanel } from 'primereact/tabview';

import '../../public/styles/about_index.css';

const AboutPage = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };

  return (
    <div>
      <Header />

      <main>
        <section className="about">
          <h1 className="main-title">HISTORY OF FORMULA 1</h1>

          <article className="card">
            <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
                <TabPanel header="DEFINITION">
                  <h1>What is Formula 1?</h1>
                  <p className='m-0'>
                    Formula 1, also known as F1, is the most prestigous open-wheel race championship in the world, well done by being a high-speed competition, with cars surpassing 350 km/h. It is also renowned by pioneering many of the techniques and technological advancements still used today in this sport and in many others.
                  </p>
                </TabPanel>
                
                <TabPanel header="ORIGINS" className={activeIndex === 1 ? 'selected' : ''}>
                  <h1>The Origins of Formula 1</h1>
                  <p className="m-0">
                      Before F1, competitions like the Gran Prix were successful in Europe. However, there was a need to create a cohesive, structured event.
                      
                      Thus, F1 was created in 1950, with teams such as Ferrari and Alfa Romeo being a part of the roster. Its first ever championship was held at Silverstone, United Kingdom. Since then, races have been held in many other countries such as Monaco, Canada, Qatar, among others.
                  </p>
                </TabPanel>

                <TabPanel header="GOLDEN ERA" className={activeIndex === 2 ? 'selected' : ''}>
                  <h1>Speed and Golden Era (1960s-1990s)</h1>
                  <p className="m-0">
                      During the 1960s and 1970s, great technological advancements and safety measures were put in place, turning the sport more exciting, but also safer.

                      The 1980s was the decade of turbo-powered engines, reaching 10000 horsepower, carbon fibre chasis, ground effect aerodynamics, and much more in the realm of techonology. Rivalries betweem Niki Lauda, James Hunt, and especially between Ayrton Senna, and Alain Prost propelled F1 to new levels of popularity.
                  </p>
                </TabPanel>

                <TabPanel header="MODERN ERA" className={activeIndex === 3 ? 'selected' : ''}>
                  <h1>Modern Era (2000s-)</h1>
                  <p className="m-0">
                        The early 2000s marked the peak era for Michael Schumacher, with five consecutive wins. The next decade was defined by Vettel and Hamilton&apos;s dominance, the latter being surpassed by Verstappen on the current decade.

                        As F1&apos;s attempt to become more sustainable and ecologically friendly, hybrid engines were introduced to the competition.
                      </p>
                </TabPanel>

                <TabPanel header="THE FUTURE" className={activeIndex === 4 ? 'selected' : ''}>
                <h1>The Future of F1 (2020s-)</h1>
                <p className="m-0">
                      Continuing this major overhaul, F1 is focused on turning their engines fully electrical, as well as net-zero carbon emissions until the start of the next decade.
                </p>
                </TabPanel>
            </TabView>
        </article>
        </section>

        <Sidenav isOpen={sideMenuOpen} onClose={toggleSideMenu} />

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
