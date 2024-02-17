import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import logo from '../../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed-top home-container">
            <img src={logo} alt='logo' className='logo' />
            <div className='btn-open' onClick={toggleMenu}>
                {menuOpen ? <FaTimes style={{ fontSize: '32px' }} /> : <FaBars style={{ fontSize: '32px' }} />}
            </div>
            <ul className={`properties ${menuOpen ? 'active' : ''}`}>
                <li><a href='#pro'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#project'>Projects</a></li>
                <li><a href='#contact'>Contacts</a></li>
            </ul>
        </nav>
    );
}

export default Home;
