import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

import home1 from "../../../public/img/nimbus-hero-1.png"
import home2 from "../../../public/img/nimbus-hero-2.png"


const images = [
home1,home2
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-180 h-95 rounded-2xl overflow-hidden shadow-lg mx-auto bg-transparent ">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`slider-img-${index}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <button
        onClick={nextImage}
        className="absolute bottom-4 right-4 bg-white text-black  rounded-full p-3 shadow-lg flex items-center justify-center transition-colors"
        aria-label="Next image"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Slider;
