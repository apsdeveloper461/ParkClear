import "./../stylesheet/navbar.css";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const menuButton = document.querySelector(".sm_menu-button");
    const menu = document.querySelector(".sm_navbar__menu");

    document?.addEventListener("click", function(event) {
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
    return (<Fragment>
      <nav className={`navbar pad ${isSticky ? "sticky-nav" : ""}`}>
        <div className="navbar__logo-container">
          <img src="/logo1.png" className="navbar__logo" alt="" />
        </div>
        <button className="sm_menu-button" onClick={e => {
          e.preventDefault();
          document.querySelector(".sm_navbar__menu").
            classList.
            toggle("sm_navbar__menu-active");
        }}>
          <i className="fas fa-bars" style={{ pointerEvents: "none" }}></i>
        </button>
      </nav>

      <div className="sm_navbar__menu">
        <Link to="/" className="navbar__link sm_navbar__item">Home</Link>
        <Link to="/" className="navbar__link sm_navbar__item">Manage
          Tickets</Link>
        <Link to="/"
              className="navbar__link navbar__link--active sm_navbar__item">
          Driver Knowledge Hub
        </Link>
        <Link to="/" className="navbar__link sm_navbar__item">Restore
          Images</Link>
        <Link to="/" className="navbar__link sm_navbar__item">About Us</Link>
        <Link to="/" className="sm_navbar__item">
          <button className="btn btn-primary">Log In</button>
        </Link>
        <Link to="/" className="btn btn-secondarysm_navbar__item">
          <button className="btn btn-secondary">Register</button>
        </Link>
      </div>
    </Fragment>);
  };

  // this navbar is for bigger screens
  const navBarBig = () => {
    return (<nav className={`navbar pad ${isSticky ? "sticky-nav" : ""}`}>
      <div className="navbar__logo-container">
        <img src="/logo1.png" alt="Logo"
             className="navbar__logo" />
      </div>
      <ul className="navbar__menu">
        <li>
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li>
          <Link to="/" className="navbar__link">Manage Tickets</Link>
        </li>
        <li>
          <Link to="/" className="navbar__link navbar__link--active">
            Driver Knowledge Hub
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar__link">About Us</Link>
        </li>
      </ul>
      <div className="navbar__auth">
        <button className="btn btn-primary">Log In</button>
        <button className="btn btn-secondary">Register</button>
      </div>
    </nav>);
  };

  return window.innerWidth > 900 ? navBarBig() : navBarSmall();
};

export default NavBar;
