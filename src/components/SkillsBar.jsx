import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  <SiHtml5 className="text-orange-600" title="HTML5" />,
  <SiCss3 className="text-cyan-400" title="CSS3" />,
  <SiTailwindcss className="text-cyan-500" title="TailWindcss" />,
  <SiJavascript className="text-yellow-300" title="JavaScript" />,
  <SiReact className="text-teal-400" title="React" />,
];

export default function SkillsBar() {
  return (
    <div className="skills-bar">
      <div className="skills-marquee">
        <div className="skills-track">
          {[...icons, ...icons, ...icons, ...icons].map((icon, index) => (
            <span key={index} className="icon">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
