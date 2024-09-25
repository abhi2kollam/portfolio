import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          title="Rakth Buddy"
          main="This is a blood bank portal created in angular with firebase.This app has Google/Email Sign in/up"
        />
      </div>
    </div>
  );
};

export default Projects;
