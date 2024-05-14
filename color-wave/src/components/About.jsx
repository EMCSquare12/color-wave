const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col p-8 mx-4 md:mx-20 my-12 border rounded shadow bg-white w-auto md:w-[70vw] gap-8"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-bold text-gray-700 md:text-2xl font-poppins">
          What is Color Wave?
        </h1>
        <p className="text-base text-gray-600 md:text-lg font-nromal font-poppins">
          Color Wave is a user-friendly web application designed to simplify the
          process of creating stunning gradients for any design project. Whether
          you're a seasoned designer or just starting out, Color Wave offers a
          seamless experience for generating customized gradients with ease.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-bold text-gray-700 md:text-2xl font-poppins">
          Features
        </h1>
        <div className="flex flex-col gap-8">
          <p className="text-base text-gray-600 md:text-lg font-nromal font-poppins">
            <span className="w-full mr-2 font-semibold text-gray-700">
              Intuitive Interface:
            </span>{" "}
            Color Wave boasts an intuitive and user-friendly interface, making
            it easy for users of all skill levels to navigate and create
            beautiful gradients effortlessly.
          </p>
          <p className="text-base text-gray-600 md:text-lg font-nromal font-poppins">
            <span className="w-full mr-2 font-semibold text-gray-700">
              Customizable Gradient Options:
            </span>{" "}
            With Color Wave, users have complete control over their gradients.
            Choose from a wide range of color options, including HEX codes, RGB
            values, and a color picker tool, positioning input, type and
            rotation selection, to create the perfect gradient for your project.
          </p>
          {/* <p className="text-base text-gray-600 md:text-lg font-nromal font-poppins">
            <span className="w-full mr-2 font-semibold text-gray-700">
              Gradient Presets:
            </span>{" "}
            Not sure where to start? Color Wave comes pre-loaded with a variety
            of gradient presets to inspire your creativity. Simply select a
            preset and customize it to suit your needs.
          </p> */}
          <p className="text-base text-gray-600 md:text-lg font-nromal font-poppins">
            <span className="w-full mr-2 font-semibold text-gray-700">
              Real-Time Preview:
            </span>{" "}
            See your gradient come to life in real-time as you make adjustments.
            With Color Wave's real-time preview feature. you can fine-tune your
            gradient until it's just right.
          </p>
          <p className="text-base text-gray-600 md:text-lg font-nromal font-poppins">
            <span className="w-full mr-2 font-semibold text-gray-700">
              Export Options:
            </span>{" "}
            Once you've created the perfect gradient, Color Wave offers multiple
            export options to seamlessly integrate your gradient into your
            design workflow. Export your gradient as CSS code or JPEG image
            files with just a click.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
