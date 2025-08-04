import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../public/styles/sidenav.css'

const Sidenav = ({ isOpen, onClose }) => (
  <>
    <section className= {`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></section>
    <section className= {`sideNav ${isOpen ? 'open' : ''}`}>
      <article>        
        <a className="closeBtn glitch" onClick={onClose}>&times;</a>
        <Link to="/about">ABOUT</Link>
        <Link to="/racers">RACERS</Link>
      </article>
    </section>
  </>
);


Sidenav.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired,
};

export default Sidenav;
