import { Link } from "react-router-dom";

const Main = ({
                heading1,
                heading2,
                heading3,
                subtitle,
                btn1text,
                btn2text,
                home = false
              }) => {
  return (
    <main className={`main pad ${home && "main__home"}`}>
      <div className="main__content">
        <h1 className="heading moveInLeft">
          <span className="heading heading--primary">{heading1 + " "}</span>
          {heading2 &&
            <span className="heading heading--secondary">{heading2+" "}</span>
          }
          {heading3 &&
            <span className="heading heading--primary">{heading3}</span>
          }
        </h1>
        {subtitle && <p className="heading--subtitle">
          Tips, Guidelines and Resources For Smarter Parking and Safer Driving.
        </p>
        }
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