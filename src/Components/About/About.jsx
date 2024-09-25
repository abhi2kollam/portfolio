import AboutImg from "../../assets/7358653-removebg-preview.png";
const About = () => {
  return (
    <div
      id="about"
      className="anim-scroll text-white md:flex overflow-hidden justify-center items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-10 md:p-24"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 avatar-img" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4 ">
              <span className="w-96 ">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  🎨 Design Aesthetics
                </h1>
                <p className="text-sm md:text-md leading-tight mt-3">
                  I believe that great design is at the heart of every
                  successful application. From choosing the right color palette
                  to creating smooth animations, I pay attention to the details
                  that make a difference.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  🚀 User Experience
                </h1>
                <p className="text-sm md:text-md leading-tight mt-3">
                  Building UIs isn’t just about visuals; it’s about creating
                  seamless experiences. I’m passionate about crafting intuitive
                  interfaces that delight users and solve real-world problems.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  🌐 Web Technologies
                </h1>
                <p className="text-sm md:text-md leading-tight mt-3">
                  HTML, CSS, and JavaScript are my playground. I stay up-to-date
                  with the latest web standards and love exploring new libraries
                  and frameworks. React, Vue, or Angular—I’m always ready to
                  dive in.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  🔧 Toolbox
                </h1>
                <p className="text-sm md:text-md leading-tight mt-3">
                  VS Code is my trusty sidekick, and DevTools are my secret
                  weapon. Git? It’s like my second language. And when things get
                  complex, I turn to Stack Overflow (who doesn’t?).
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
