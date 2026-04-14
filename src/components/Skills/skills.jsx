import { SiMongodb, SiNodedotjs } from "react-icons/si";
import {
  TbAtom2,
  TbBrandDatabricks,
  TbBrandPython,
  TbChartCandle,
  TbCloudComputing,
  TbCode,
  TbCube3dSphere,
  TbServer,
} from "react-icons/tb";
import "./skills.css";

const developmentSkills = [
  { name: "Frontend Development", level: 85, Icon: TbCode, tone: "red" },
  { name: "Backend Development", level: 75, Icon: TbServer, tone: "blue" },
  { name: "MERN & MEAN Stack", level: 70, Icon: SiMongodb, tone: "amber" },
  { name: "Full Stack Development", level: 80, Icon: SiNodedotjs, tone: "red" },
];

const engineeringTools = [
  { name: "SolidWorks", level: 85, Icon: TbCube3dSphere, tone: "red" },
  { name: "MATLAB", level: 81, Icon: TbChartCandle, tone: "amber" },

  { name: "Python", level: 78, Icon: TbBrandPython, tone: "light" },
];

const coreEngineeringSkills = [
  "Material Characterization",
  "Failure Analysis",
  "Corrosion Studies",
  "Heat Treatment",
  "Casting Processes",
  "Mechanical Testing",
  "Microstructural Analysis",
  "Phase Diagrams",
];

const careerPathItems = [
  {
    title: "Software Engineer",
    subtitle: "Building scalable web products and reliable digital systems",
    Icon: TbCode,
    tone: "career-node--red",
  },
  {
    title: "Tech Lead",
    subtitle: "Leading teams, architecture decisions, and product execution",
    Icon: TbCube3dSphere,
    tone: "career-node--gold",
  },
  {
    title: "Metallurgy Engineer",
    subtitle: "Applying materials knowledge to process design and innovation",
    Icon: TbAtom2,
    tone: "career-node--orange",
  },
];

const renderSkillGroup = (title, accentClass, skills, options = {}) => (
  <article className={`skills-panel ${accentClass}`}>
    {!options.hideHeader && (
      <div className="skills-panel__header">
        <span className="skills-panel__line" />
        <div>
          <p className="skills-panel__eyebrow">Capability Cluster</p>
          <h3>{title}</h3>
        </div>
      </div>
    )}

    <div className="skills-list">
      {skills.map(({ name, level, Icon, tone }) => (
        <div
          className={`skill-meter skill-meter--${tone}`}
          key={name}
          style={{ "--level": `${level}%` }}
        >
          <div className="skill-meter__top">
            <div className="skill-meter__name">
              <span className="skill-meter__icon">
                <Icon />
              </span>
              <span>{name}</span>
            </div>
            <span className="skill-meter__value">{level}%</span>
          </div>

          <div className="skill-meter__track">
            <div className="skill-meter__fill" />
          </div>
        </div>
      ))}
    </div>
  </article>
);

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__orb skills__orb--amber" />
      <div className="skills__orb skills__orb--blue" />
      <div className="skills__grid" />

      <div className="skills__inner">
        <div className="skills__heading">
          <h2>Skills & Expertise</h2>
          <span className="skills__badge">Skill Levels</span>
        </div>

        <div className="skills__columns">
          {renderSkillGroup(
            "Development Stack",
            "skills-panel--warm",
            developmentSkills,
            { hideHeader: true },
          )}
          {renderSkillGroup(
            "Engineering Tools",
            "skills-panel--cool",
            engineeringTools,
          )}
          <article className="skills-core">
            <div className="skills-core__header">
              <p className="skills-panel__eyebrow">Capability Cluster</p>
              <h3>Core Skills</h3>
            </div>

            <div className="skills-core__grid">
              {coreEngineeringSkills.map((skill) => (
                <div className="skills-core__item" key={skill}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
      <h2 className="teachstackheading">Tech Stack</h2>
      <div className="techstack">
        <span className="skill">HTML</span>
        <span className="skill">CSS</span>
        <span className="skill">JavaScript</span>
        <span className="skill">React</span>
        <span className="skill">Node.js</span>
        <span className="skill">Express.js</span>
        <span className="skill">MongoDB</span>
        <span className="skill">MySQL</span>
        <span className="skill">Python</span>
        <span className="skill">C++</span>
        <span className="skill">Git</span>
        <span className="skill">GitHub</span>
        <span className="skill">REST APIs</span>
        <span className="skill">Data Structures</span>
        <span className="skill">Algorithms</span>
        <span className="skill">VS Code</span>
        <span className="skill">Postman</span>
        <span className="skill">Responsive Design</span>
      </div>

      <section className="career-path">
        <div className="career-path__panel">
          <h2>Career Path & Aspirations</h2>

          <div className="career-path__grid">
            {careerPathItems.map(({ title, subtitle, Icon, tone }) => (
              <article className="career-node" key={title}>
                <div className={`career-node__icon ${tone}`}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
