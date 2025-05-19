import "./../stylesheet/footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.7, type: "spring" }}
      className='footer pad'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='footer-top'
      >
        <div className='footer-section'>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href='#'>UltraDriver Store</a>
            </li>
            <li>
              <a href='#'>Help Center</a>
            </li>
            <li>
              <a href='#'>Guide Book</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>Plans</h4>
          <ul>
            <li>
              <a href='#'>Subscription Plans</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>Company</h4>
          <ul>
            <li>
              <a href='#'>Dashboard</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Success</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>Get in Touch</h4>
          <p>Feel free to get in touch with us via email</p>
          <a href='mailto:email@gmail.com'>email@gmail.com</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='footer-bottom'
      >
        <div className='footer-logo'>
          <img
            src='/logo1.png'
            alt='ParkClear Logo'
          />
        </div>
        <nav className='footer-nav'>
          <a href='#'>Home</a>
          <a href='#'>Manage Tickets</a>
          <a href='#'>Driver Knowledge Hub</a>
          <a href='#'>About Us</a>
        </nav>

        <div className='footer-icons'>
          <a
            href='#'
            className='footer-icon'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          <a
            href='#'
            className='footer-icon'
          >
            <i className='fab fa-instagram'></i>
          </a>
          <a
            href='#'
            className='footer-icon'
          >
            <i className='fas fa-times'></i>
          </a>
          <a
            href='#'
            className='footer-icon'
          >
            <i className='fab fa-tiktok'></i>
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
