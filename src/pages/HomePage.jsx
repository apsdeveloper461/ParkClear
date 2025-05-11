import NavBar from "../components/NavBar.jsx";
import "./../stylesheet/main.css";
import Cards from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import InfoBanner from "../components/InfoBanner.jsx";

const HomePage = () => {
  return (<div>
    <NavBar />
    <Main heading1="Driver" heading2="Knowledge" heading3="Hub"
          subtitle="Tips, Guidelines and Resources For Smarter Parking and Safer Driving"
          btn1text="Get A PCN" btn2text="Get A Free Ticket" home={true} />

    <InfoBanner />
    <Cards />
    <Footer />
  </div>);
};

export default HomePage;
