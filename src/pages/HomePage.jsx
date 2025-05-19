import NavBar from "../components/NavBar.jsx";
import "./../stylesheet/main.css";
import Cards from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import InfoBanner from "../components/InfoBanner.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  const [searchData, setSearchData] = useState("");
  // useEffect(()=>{
  //   console.log("searchData", searchData);
  // },[searchData])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <NavBar />
      <Main
        heading1='Driver'
        heading2='Knowledge'
        heading3='Hub'
        subtitle='Tips, Guidelines and Resources For Smarter Parking and Safer Driving'
        searchData={searchData}
        setSearchData={setSearchData}
        isSearch={true}
        home={true}
      />
      <InfoBanner />
      <Cards
        search={searchData}
        setSearch={setSearchData}
      />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
