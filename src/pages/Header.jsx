import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <figure>
                <Link to="/">
                    <img src="/img/f1-logo.png" alt="Formula 1 logo in red; directs to homepage after clicking" />
                </Link>
            </figure>
        
            <nav>
                <ul>
                    <li><Link to="/about" className="glitch" data-text="ABOUT">ABOUT</Link></li>
                    <li><Link to="/racers" className="glitch" data-text="RACERS">RACERS</Link></li>
                </ul>

                <div className="nav-icons">
                    <div className="hamburger" id="openBtn">&#9776;</div>
                </div>
            </nav>
        </header>
    );
}

export default Header;


