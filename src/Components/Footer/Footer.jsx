import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          abhi2kollam@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <FaLinkedin  />
          abhilash-k-pillai-a0546396
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
         abhi2kollam
        </li>
      </ul>
    </div>
  );
};

export default Footer;
