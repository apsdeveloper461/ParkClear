import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Main = ({
  heading1,
  heading2,
  heading3,
  subtitle,
  btn1text,
  btn2text,
  isSearch = false,
  setSearchData,
  searchData,
  home = false,
}) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      className={`main pad ${home && "main__home"}`}
    >
      <div className='main__content'>
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className={`heading ${home && "center_content"} `}
        >
          <span className='heading heading--primary'>{heading1 + " "}</span>
          {heading2 && (
            <span className='heading heading--secondary'>{heading2 + " "}</span>
          )}
          {heading3 && (
            <span className='heading heading--primary'>{heading3}</span>
          )}
        </motion.h1>
        {/* Search Bar Start */}
        {isSearch && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='main__searchbar'
          >
            <input
              type='text'
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              className='main__searchinput'
              placeholder='Search tips, guides, or topics...'
              aria-label='Search'
            />
            <span className='main__searchicon'>
              {/* Using react-icons for search icon */}
              <CiSearch style={{ fontSize: "20px" }} />
            </span>
          </motion.div>
        )}
        {/* Search Bar End */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={`${
              home ? "heading--subtitle--home" : "heading--subtitle"
            }`}
          >
            Tips, Guidelines and Resources For{" "}
            <span className={`${home && "text-yellow"}`}>Smarter</span> Parking
            and Safer Driving.
          </motion.p>
        )}
        {(btn1text || btn2text) && (
          <div className='main--btn moveInUp'>
            {btn1text && (
              <Link
                to='/'
                className='btn btn-primary'
              >
                Get A PCN <span className='button__icon'>↗</span>
              </Link>
            )}
            {btn2text && (
              <Link
                to='/'
                className='btn btn-secondary'
              >
                Get A Free Ticket <span className='button__icon'>↗</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.main>
  );
};
export default Main;
