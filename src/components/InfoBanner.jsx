import "./../stylesheet/infoBanner.css";
import { motion } from "framer-motion";

const InfoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.7, type: "spring" }}
      className='infoBanner'
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='infoBanner-text'
      >
        From taking your car abroad to keeping your family safe on the road,
        here's everything you need to know about driving like a pro.
      </motion.p>
    </motion.div>
  );
};
export default InfoBanner;
