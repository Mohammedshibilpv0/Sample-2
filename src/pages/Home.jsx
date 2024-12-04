import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/navbar/navbar";
import HeroSection from "../components/heroSection/heroSection";
import About from "../components/about/about";
import Services from "../components/services/services";
import BrandCollaborations from "../components/brandCollaborations/brandCollaborations";
import Blog from "../components/blog/blog";
import Reviews from "../components/reviews/reviews";
import Footer from "../components/footer/footer";
import ContactUs from "../components/contact/contactUs";

const ScrollAnimationWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.2 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <div className="p-1 bg-[#0c192d] dark:bg-[#171717]">
        <Navbar />
      </div>
      
      <ScrollAnimationWrapper>
        <HeroSection />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <About />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <Services />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <BrandCollaborations />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <Blog />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <Reviews />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <ContactUs />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <Footer />
      </ScrollAnimationWrapper>
    </>
  );
};

export default Home;