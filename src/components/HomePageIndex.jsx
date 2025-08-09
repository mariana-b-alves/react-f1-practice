import { useState } from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Sidenav from '../pages/Sidenav';
import { Link } from 'react-router-dom';


import '../../public/styles/homepage_index.css';

const HomePageIndex = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <div>
      <Header />

      <main>
        <section className="info">
          <article className="block">
            <video autoPlay muted loop id="myVideo1">
              <source src="../../public/mp4/f1-intro.mp4" type="video/mp4" />
            </video>
            <p>
              This is a website dedicated to showing all Formula 1 racers from the last 5 years. Here you can
              check their names, years they&apos;ve been running, races run, and individual stats.
            </p>
            <Link to="/react-f1-practice/racers" className="btn">GO TO RACERS PAGE</Link>
          </article>

          <article className="block">
            <video autoPlay muted loop id="myVideo2">
              <source src="../../public/mp4/f1-evo.mp4" type="video/mp4" />
            </video>
            <p>Know more about the history of Formula 1 and how it changed over the years here.</p>
            <Link to="/react-f1-practice/about" className="btn">GO TO ABOUT PAGE</Link>
          </article>
        </section>
      </main>

      <Sidenav isOpen={sideMenuOpen} onClose={toggleSideMenu} />

      <Footer />
    </div>
  );
};

export default HomePageIndex;
