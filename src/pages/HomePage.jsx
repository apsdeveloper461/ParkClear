import NavBar from "../components/NavBar.jsx";
import "./../stylesheet/main.css";
import Cards from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import InfoBanner from "../components/InfoBanner.jsx";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [searchData, setSearchData] = useState("");
  // useEffect(()=>{
  //   console.log("searchData", searchData);
  // },[searchData])
  return (<div>
    <NavBar />
    <Main heading1="Driver" heading2="Knowledge" heading3="Hub"
          subtitle="Tips, Guidelines and Resources For Smarter Parking and Safer Driving"
          searchData={searchData}
          setSearchData={setSearchData}
          isSearch={true} home={true} />

    <InfoBanner />
    <Cards search={searchData} />
    <Footer />
  </div>);
};

export default HomePage;
