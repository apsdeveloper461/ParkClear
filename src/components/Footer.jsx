import "./../stylesheet/footer.css"

const Footer = () => {
  return (<footer className="footer pad">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">UltraDriver Store</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Guide Book</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Plans</h4>
          <ul>
            <li><a href="#">Subscription Plans</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Success</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Get in Touch</h4>
          <p>Feel free to get in touch with us via email</p>
          <a href="mailto:email@gmail.com">email@gmail.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/logo1.png" alt="ParkClear Logo" />
        </div>
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">Manage Tickets</a>
          <a href="#">Driver Knowledge Hub</a>
          <a href="#">About Us</a>
        </nav>

        <div className="footer-icons">
          <a href="#" className="footer-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="footer-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="footer-icon">
            <i className="fas fa-times"></i>
          </a>
          <a href="#" className="footer-icon">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;