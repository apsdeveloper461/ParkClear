import "./../stylesheet/navbar.css";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const menuButton = document.querySelector(".sm_menu-button");
    const menu = document.querySelector(".sm_navbar__menu");

    document?.addEventListener("click", function (event) {
      if (!menu?.contains(event.target) && event.target !== menuButton) {
        menu?.classList.remove("sm_navbar__menu-active");
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 100vh (viewport height)
      setIsSticky(window.scrollY > window.innerHeight / 2.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // this navbar is for smaller screens
  const navBarSmall = () => {
    // Choose logo based on window width
    const logoSrc = window.innerWidth > 900 ? "/logo1.png" : "/logoMobile.png";
    return (
      <Fragment>
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={`navbar pad ${isSticky ? "sticky-nav" : ""}`}
        >
          <div className='navbar__logo-container'>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              src={logoSrc}
              className='navbar__logo'
              alt=''
            />
          </div>
          <button
            className='sm_menu-button'
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(".sm_navbar__menu")
                .classList.toggle("sm_navbar__menu-active");
            }}
          >
            <i
              className='fas fa-bars'
              style={{ pointerEvents: "none" }}
            ></i>
          </button>
        </motion.nav>

        <div className='sm_navbar__menu'>
          <Link
            to='/'
            className='navbar__link sm_navbar__item'
          >
            Home
          </Link>
          <Link
            to='/'
            className='navbar__link sm_navbar__item'
          >
            Manage Tickets
          </Link>
          <Link
            to='/'
            className='navbar__link navbar__link--active sm_navbar__item'
          >
            Driver Knowledge Hub
          </Link>
          <Link
            to='/'
            className='navbar__link sm_navbar__item'
          >
            Restore Images
          </Link>
          <Link
            to='/'
            className='navbar__link sm_navbar__item'
          >
            About Us
          </Link>
          <Link
            to='/'
            className='sm_navbar__item'
          >
            <button className='btn btn-primary'>Log In</button>
          </Link>
          <Link
            to='/'
            className='btn btn-secondarysm_navbar__item'
          >
            <button className='btn btn-secondary'>Register</button>
          </Link>
        </div>
      </Fragment>
    );
  };

  // this navbar is for bigger screens
  const navBarBig = () => {
    return (
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`navbar pad ${isSticky ? "sticky-nav" : ""}`}
      >
        <div className='navbar__logo-container'>
          <img
            src='/logo1.png'
            alt='Logo'
            className='navbar__logo'
          />
        </div>
        <ul className='navbar__menu'>
          <li>
            <Link
              to='/'
              className='navbar__link'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='navbar__link'
            >
              Manage Tickets
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='navbar__link navbar__link--active'
            >
              Driver Knowledge Hub
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='navbar__link'
            >
              About Us
            </Link>
          </li>
        </ul>
        <div className='navbar__auth'>
          <button className='btn btn-primary'>Log In</button>
          <button className='btn btn-secondary'>Register</button>
        </div>
      </motion.nav>
    );
  };

  return window.innerWidth > 900 ? navBarBig() : navBarSmall();
};

export default NavBar;
