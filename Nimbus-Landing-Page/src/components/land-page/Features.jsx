import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 object-cover object-center size-full"
      />
      <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 text-sm max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container px-3 mx-auto md:px-10">
        <div className="px-5 py-32">
          <p className="text-lg font-circular-web text-blue-50">
            INTELLIGENCE IS YOUR GREATEST WEAPON.
          </p>
          <p className="max-w-md text-lg opacity-50 font-circular-web text-blue-50">
            More than maps and bookings, you’ll choose an Agent armed with
            adaptive, swift, and immersive abilities that create opportunities
            to let your exploration shine.
          </p>
        </div>

        <BentoTilt className="relative w-full overflow-hidden rounded-md border-hsla mb-7 h-96 md:h-[65vh]">
          <BentoCard src="videos/one.mp4" />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="row-span-1 bento-tilt_1 md:col-span-1 md:row-span-2">
            <BentoCard src="videos/two.mp4" />
          </BentoTilt>

          <BentoTilt className="row-span-1 bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard src="videos/one.mp4" />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard src="videos/two.mp4" />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/one.mp4"
              loop
              autoPlay
              muted
              className="object-cover object-center size-full"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex flex-col justify-between p-5 size-full bg-white">
              <h1 className="text-black bento-title special-font max-w-64">
                Explore More !
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

BentoTilt.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BentoCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default Features;
