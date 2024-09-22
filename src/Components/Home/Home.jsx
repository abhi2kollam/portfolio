import { useEffect } from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let sr = ScrollReveal({
      duration: 2500,
      distance: "60px",
    });
    sr.reveal(".avatar-img", { delay: 600 });
    sr.reveal(".welcome", { delay: 700, origin: "top" });
  });
  return (
    <div className="text-white flex w-full flex-col md:flex-row justify-between items-start p-10 md:p-20">
      <div className=" welcome md:w-3/4 md:pt-10 ">
        <h1 className="text-xl md:text-3xl font-bold flex leading-normal tracking-tighter">
          Hello, I&apos;m
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Abhilash
        </h1>
        <h1 className="text-xl md:text-3xl font-bold flex leading-normal tracking-tighter">
          And I&apos;m a&nbsp;
          <TextChange />
        </h1>
        <p className="text-sm mt-3 tracking-tight ">
          A web application developer based in Kerala, India with more than 10
          years of experience
        </p>
        <a href="#contacts">
          <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>
      <div>
        <img className="avatar-img " src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
