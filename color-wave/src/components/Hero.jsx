import Logo from "../assets/icon.png";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" h-[50vh] flex items-center justify-center">
      <div
        className="flex flex-col items-center justify-center gap-4"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="flex flex-row gap-4">
          <img className="w-12 h-12" src={Logo} alt="Graient Fish Icon" />
          <h1 className="text-2xl font-bold text-[#51CFF9] md:text-5xl font-poppins">
            Color Wave{" "}
          </h1>
        </div>
        <p className="text-base font-medium text-gray-500 md:text-xl font-mont">
          Surfing the Spectrum Of Colors and Creativity.
        </p>
      </div>
    </div>
  );
};
export default Hero;
