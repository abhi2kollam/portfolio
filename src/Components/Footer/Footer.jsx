import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
const Footer = () => {
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };
  });
  return (
    <div
      id="contacts"
      className="flex justify-around bg-[#465697] text-white py-10 px-5 md:p-12 items-center"
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
          <a href="mailto:abhi2kollam@gmail.com">abhi2kollam@gmail.com</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/abhilash-k-pillai-a0546396/"
            target="_blank"
          >
            abhilash-k-pillai-a0546396
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a
            href="https://github.com/abhi2kollam"
            target="_blank"
          >
            abhi2kollam
          </a>
        </li>
      </ul>
      {showIcon && (
        <a href="#" className="fixed bottom-3 right-3">
          <FaRegArrowAltCircleUp size={50}></FaRegArrowAltCircleUp>
        </a>
      )}
    </div>
  );
};

export default Footer;
