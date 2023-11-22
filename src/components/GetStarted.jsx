import styles from "../style";
import { arrowUp } from "../assets";
import React from "react";

const GetStarted = () => {
  const handleDivClick = () => {
    const contactSection = document.getElementById("services");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      onClick={handleDivClick} 
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Explore</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
      
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Services</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

