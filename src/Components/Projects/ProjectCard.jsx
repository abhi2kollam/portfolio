import React from "react";
import bannerImg from "../../assets/blood_buddy.png";
const ProjectCard = ({ title, main }) => {
  return (
    <div className="anim-scroll flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="rounded-t-2xl" src={bannerImg} alt="" />
      <div className="p-3 md:p-6">
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
        <div className="p-2 md:p-4 flex gap-2 md:gap-4">
          <a href="https://rakth-buddy.web.app/" target="_blank">
          <button className="md:mt-10 text-white py-2 px-3 text-sm  md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </button>
          </a>
          <a href="http://github.com/abhi2kollam/rakth-buddy" target="_blank">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
