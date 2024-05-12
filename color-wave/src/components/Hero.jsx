import Logo from "../assets/icon.png";

const Hero = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to top right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
      }}
      className="h-[calc(100vh)] -mt-[12vh] md:-mt-[15vh] flex items-center justify-center "
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-lg font-medium text-gray-50 md:text-4xl font-mont">
          Surfing the Spectrum Of Colors and Creativity.
        </p>
      </div>
    </div>
  );
};
export default Hero;
