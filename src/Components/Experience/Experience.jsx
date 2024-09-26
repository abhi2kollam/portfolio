import { FaCss3, FaHtml5, FaJs, FaReact, FaNode } from "react-icons/fa";
import { SiSencha, SiTailwindcss } from "react-icons/si";
import { DiBootstrap, DiSass, DiMsqlServer } from "react-icons/di";
import {
  SiTypescript,
  SiNestjs,
  SiNx,
  SiPwa,
  SiJest,
  SiWebpack,
} from "react-icons/si";
import { VscSettingsGear } from "react-icons/vsc";
const Experience = () => {
  const icons = [
    { icon: FaHtml5, color: "#E34F26", text: "HTML 5" },
    { icon: FaCss3, color: "#1572B6", text: "CSS 3" },
    { icon: FaJs, color: "#F7DF1E", text: "Javascript" },
    { icon: SiTypescript, color: "#FFF", text: "Typescript" },
    { type: 'img', icon: 'src/assets/angular.gif', text: "Angular" },
    { icon: FaReact, color: "#61DAFB", text: "React" },
    { icon: FaNode, color: "#417e38", text: "Node js" },
    { icon: SiNestjs, color: "#ea2858", text: "Nest js" },
    { icon: DiSass, color: "#cf649a", text: "SASS" },
    { icon: DiBootstrap, color: "#722ef9", text: "Bootstrap" },
    { type: 'img', icon: 'src/assets/WebAssembly.svg', text: "Web Assembly" },
    { icon: SiNx, color: "#FFF", text: "Nx Workspace" },
    { type: 'img', icon: 'src/assets/firebase.png', text: "Firebase" },
    { icon: SiPwa, color: "#FF4438", text: "PWA" },
    { icon: SiJest, color: "#9a405b", text: "Jest" },
    { icon: SiWebpack, color: "#1b74ba", text: "Webpack" },
    { icon: DiMsqlServer, text: "MS SQL Server", color: '#fff' },
    { type: 'img', icon: 'src/assets/webrtc.png', text: "Webrtc" },
    { icon: VscSettingsGear, color: "#E34F26", text: "Web Workers" },
    { icon: SiTailwindcss, color: "#0ea5e9", text: "Tailwindcss" },
    { type: 'img', icon: 'src/assets/pdfjs.svg', color: "#0ea5e9", text: "PdfJs" },
  ];
  return (
    <div id="experience" className="p-10 md:p-24 ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="img-box w-full xl:w-2/5 gap-8 py-10 justify-center">
          {icons.map((item, index) => (
            <span
              key={index}
              data-text={item.text}
              className="exp-icon p-3 bg-zinc-950 flex items-center rounded-2xl anim-scroll"
              style={{ color: item.color }}
            >
              {item.type === `img` ? <img src={item.icon} /> : <item.icon size={50} />}
            </span>
          ))}
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center anim-scroll">
            <a href="https://www.hrblock.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56 56"
                fill="#02ad4e"
                width="40px"
                height="40px"
                role="img"
                aria-label="H and R Block"
                data-di-res-id="cb8c726e-4668d67f"
                data-di-rand="1726824464668"
              >
                <path d="M0 0h56v56H0V0zm9.7 33.1H7.2v-3.5h-3v9.7h3v-3.5h2.5v3.5h3.1v-9.7H9.7v3.5zM22 37.3c.3-.6.4-1.3.4-1.9v-1.5h-2.1v1.4L18 32.8c-.2-.3-.4-.5-.4-.8 0-.4.3-.6.7-.6.4 0 .7.3.7.7v.5h2.3V32c0-1.5-1.3-2.5-3.1-2.5-1.9 0-3.2 1-3.2 2.5 0 .4.1 1.1.8 1.7-.9.4-1.8 1.3-1.8 2.7 0 1.9 1.5 3.2 4.2 3.2.9 0 1.8-.3 2.4-.7l.4.5h2.7L22 37.3zm-3.7.2c-.7 0-1.6-.4-1.6-1.3 0-.5.3-.9.7-1.1 0 0 1.6 1.8 1.9 2.1-.2.2-.6.3-1 .3zm9.3-.7h.9l1.5 2.5h3.5l-1.9-3.1c1-.6 1.7-1.7 1.7-3.1 0-2.1-1.3-3.6-3.8-3.6h-4.9v9.7h3v-2.4zm0-4.8h1.5c.7 0 1.1.5 1.1 1.2s-.4 1.2-1.1 1.2h-1.5V32zM10.8 46.7c.8-.4 1.3-1.2 1.3-2.2C12.1 43 11 42 9.2 42h-5v9.7h5.1c2.2 0 3.4-1.1 3.4-2.8 0-1.1-.7-1.9-1.9-2.2zm-3.7-2.4h1.4c.4 0 .7.3.7.7 0 .5-.3.8-.7.8H7.1v-1.5zm2 5.2h-2v-1.6h2c.5 0 .8.4.8.8s-.3.8-.8.8zM17 42h-3v9.7h6.9v-2.5H17V42zm9.4-.2c-3 0-4.6 1.8-4.6 4.4v1.2c0 2.6 1.6 4.4 4.6 4.4S31 50 31 47.4v-1.2c0-2.6-1.6-4.4-4.6-4.4zm1.6 5.9c0 1.1-.6 1.7-1.6 1.7s-1.6-.6-1.6-1.7v-1.6c0-1.1.6-1.7 1.6-1.7s1.6.6 1.6 1.7v1.6zm8.6-3.3c1.1 0 1.5.7 1.5 1.4H41c-.1-2.2-1.6-4-4.3-4-3.1 0-4.6 1.8-4.6 4.4v1.3c0 2.6 1.5 4.4 4.6 4.4 2.7 0 4.3-1.8 4.3-4h-2.9c-.1.7-.4 1.4-1.5 1.4-1 0-1.5-.7-1.5-1.7v-1.5c0-1.1.5-1.7 1.5-1.7zM51.3 42h-3.4l-2 3.4h-.2V42h-3v9.7h3v-4h.2l2 4h3.6l-2.8-5.3 2.6-4.4zm1.4.3h-.3v.7h.2v-.2l.1.2h.3l-.1-.2c0-.1.1-.2.1-.3 0-.2-.1-.2-.3-.2zm0 .3l-.1-.1.1.1c0-.1 0-.1 0 0zm-.1-.8c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm0 1.4c-.4 0-.6-.3-.6-.6 0-.4.2-.6.6-.6.4 0 .6.3.6.6.1.4-.2.6-.6.6z"></path>
              </svg>
            </a>
            <span className="text-white">
              <h2 className="leading-tight">
                Senior Technology Specialist , H&R Block
              </h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2018 - Present
              </p>
              <ul className="text-sm p-2">
                <li>🧑‍💻 Worked as Senior Software Engineer</li>
                <li>👲 Technical Lead</li>
                <li>👲 Senior Technology Specialist</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center anim-scroll">
            <img
              width="48"
              src="https://media.licdn.com/dms/image/v2/C560BAQH1u_3VYK88yA/company-logo_100_100/company-logo_100_100/0/1679572102869/carestack_logo?e=1735171200&amp;v=beta&amp;t=oJ7Us50hokV8GfP6LalmWoTtGNpD0cKQnjggN4V1mjA"
              loading="lazy"
              height="48"
              alt="CareStack™ - Dental Practice Management logo"
              id="ember956"
            ></img>
            <span className="text-white">
              <h2 className="leading-tight">
                Software Engineer, CareStack™ - Dental Practice Management
              </h2>
              <p className="text-sm leading-tight font-thin">
                Aug 2015 - May 2018
              </p>
              <ul className="text-sm p-2">
                <li>🧑‍💻 Worked as Software Engineer.</li>
                <li></li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center anim-scroll">
            <SiSencha color="#95c93d" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Sencha Developer, Ariva Med Data info tech
              </h2>
              <p className="text-sm leading-tight font-thin">
                Nov 2013 - Aug 2015
              </p>
              <ul className="text-sm p-2">
                <li>🧑‍💻 Worked as Associate Software Developer.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
