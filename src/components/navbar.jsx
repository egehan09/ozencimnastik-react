import React, { useRef, useState,useEffect } from 'react'
import '../styles/navbar.css'
import navbarLogo from '../images/logo-yazisiz.png'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

const Navbar = ({onData}) => {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor)

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    const handleClick = () => {
        onData("about");
        navRef.current.classList.toggle('responsive_nav');
      };
      const handleClick2 = () => {
        onData("services");
        navRef.current.classList.toggle('responsive_nav');
      };

      const handleClick3 = () => {
        onData("homescroll")
        navRef.current.classList.toggle('responsive_nav');
    };

    const handleClick4 = () => {
        onData("contact")
        navRef.current.classList.toggle('responsive_nav');
    };


    return (
        <div className={color ? "navbar-container navbar-bg" : "navbar-container"}>
            <div className="navbar-logo-container">
                <img className='navbar-logo' src={navbarLogo} alt='not found'></img>ÖZEN CİMNASTİK</div>
            <nav className='navigation' ref={navRef}>
                <button onClick={handleClick3} className='buttonum'>Anasayfa</button>
                <button onClick={handleClick} className='buttonum'>Hakkımızda</button>
                <button onClick={handleClick2} className='buttonum'>Cimnastiğin Faydaları</button>
                <button onClick={handleClick4} className='buttonum'>Bize Ulaşın</button>
                <button className='navCloseBtn' onClick={showNavbar}><FaTimes /></button>
            </nav>
            <button className='navBtn' onClick={showNavbar}><FaBars /></button>
        </div>

    )
}

export default Navbar