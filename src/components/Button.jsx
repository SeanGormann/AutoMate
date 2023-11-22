import React from "react";

const Button = ({ styles }) => {
  const handleButtonClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button 
      type="button" 
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={handleButtonClick}
    >
      Get Started
    </button>
  );
};

export default Button;

