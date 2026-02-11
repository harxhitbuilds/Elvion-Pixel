import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import PropTypes from "prop-types";

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={`${clipClass}`}>
      <img src={src} alt="" className="" />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96"></div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80"></div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Nimbus
          </p>

          <AnimatedTitle
            title="JOIN NIMBUS LET'S SHAPE THE FUTURE OF EXPLORATION TOGETHER"
            className="special-font !md:text-[6.2rem] w-full font-zentry text-5xl! font-black! leading-[.9]!"
          />

          <a href="#">
            <Button title="contact us" containerClass="mt-10 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

ImageClipBox.propTypes = {
  src: PropTypes.string.isRequired,
  clipClass: PropTypes.string.isRequired,
};
export default Contact;
