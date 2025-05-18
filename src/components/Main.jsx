import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Main = ({
  heading1,
  heading2,
  heading3,
  subtitle,
  btn1text,
  btn2text,
  isSearch=false,
  setSearchData,
  searchData,
  home = false,
}) => {
  return (
    <main className={`main pad ${home && "main__home"}`}>
      <div className='main__content'>
        <h1 className={`heading ${home && 'center_content'} `}>
          <span className='heading heading--primary'>{heading1 + " "}</span>
          {heading2 && (
            <span className='heading heading--secondary'>{heading2 + " "}</span>
          )}
          {heading3 && (
            <span className='heading heading--primary'>{heading3}</span>
          )}
        </h1>
        {/* Search Bar Start */}
    {isSearch && (
          <div className='main__searchbar'>
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
            <CiSearch style={{fontSize:"20px"}} />
          </span>
        </div>
        )}
        {/* Search Bar End */}
        {subtitle && (
          <p className={`${home? "heading--subtitle--home" :'heading--subtitle'}`}>
            Tips, Guidelines and Resources For Smarter Parking and Safer
            Driving.
          </p>
        )}
        {(btn1text || btn2text) && <div className="main--btn moveInUp">
          {btn1text && <Link to="/" className="btn btn-primary">
            Get A PCN <span className="button__icon">↗</span>
          </Link>
          }
          {btn2text && <Link to="/" className="btn btn-secondary">
            Get A Free Ticket <span className="button__icon">↗</span>
          </Link>
          }
        </div>
        }
      </div>
    </main>
  );
};
export default Main;
