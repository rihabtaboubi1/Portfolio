"use client";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const phoneNumber = "+33 6 35 05 55 07"; // remplace par ton vrai numéro

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Excited to turn <span className="text-purple">ideas</span> into
          solutions! If you’re looking for a motivated Software Engineering
          student passionate about DevOps, Cloud and AI
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          let’s get in touch
        </p>

        {/* MagicButton directement avec handleClick */}
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => setShowModal(true)}
        />
      </div>

      {/* Modal stylé pour le téléphone */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gray-900 rounded-3xl p-8 w-80 md:w-96 flex flex-col items-center gap-6 relative">
            <h2 className="text-white text-xl font-bold">Contact Me</h2>
            <p className="text-white-200 text-center">
              My phone number:{" "}
              <span className="text-yellow-400">{phoneNumber}</span>
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleCall}
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition"
              >
                Call Now
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Icônes sociales */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light"></p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link} // lien vers Github / LinkedIn / Gmail
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center 
                 backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 
                 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
