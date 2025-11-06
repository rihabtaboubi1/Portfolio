import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-black-900 overflow-hidden">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-black-900 dark:bg-black-100">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <p className="uppercase tracking-widest text-xs md:text-sm text-blue-100 mb-4">
          Building the Future with{" "}
          <span className="text-yellow-400">DevOps</span>,{" "}
          <span className="text-yellow-400">Cloud</span> &{" "}
          <span className="text-yellow-400">AI</span>
        </p>

        <TypingEffect
          text="Hii! I’m Rihab Taboubi, a final-year Software Engineering student. Passionate about DevOps, Cloud, and AI, I’m seeking a final-year internship to enhance my skills and contribute to real-world projects."
          speed={50}
          className="text-white text-[28px] md:text-4xl lg:text-5xl font-semibold mb-6"
        />

     
          <a href="/Rihab TABOUBI_cv.pdf" download>
            <MagicButton
              title="My CV"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        
      </div>
    </div>
  );
};

export default Hero;
