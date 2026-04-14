import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import "./home.css";

const techStack = [
  { name: "React", Icon: SiReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Git", Icon: SiGit },
  { name: "Postman", Icon: SiPostman },
  { name: "Figma", Icon: SiFigma },
  { name: "Vite", Icon: SiVite },
];

const highlightCards = [
  "Responsive Web Apps",
  "API Integration",
  "Clean UI Systems",
  "Performance Focused",
];

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__glow home__glow--left" />
      <div className="home__glow home__glow--right" />

      <div className="home__content">
        <div className="home__badge">
          <span className="home__badge-dot" />
          FULL STACK DEVELOPER | WEB ENGINEER
        </div>

        <p className="home__intro">
          Portfolio crafted for modern web experiences
        </p>

        <h1 className="home__title">
          <span className="home__title-primary">HEM@NTH</span>
          <span className="home__title-accent">TEjAVATH</span>
        </h1>

        <h2 className="home__subtitle">
          Building <span>clean products</span> with code, motion, and scalable
          web tech.
        </h2>

        <p className="home__description">
          I turn ideas into responsive interfaces and reliable user experiences
          with React, JavaScript, backend integrations, and a strong focus on
          polished execution.
        </p>

        <div className="home__highlights">
          {highlightCards.map((item) => (
            <div className="home__highlight-card" key={item}>
              {item}
            </div>
          ))}
        </div>

        <div className="home__actions">
          <a className="home__button home__button--primary" href="#projects">
            Explore Work
            <FaArrowRightLong />
          </a>
          <a className="home__button home__button--secondary" href="#contact">
            <MdOutlineMailOutline />
            Connect Now
          </a>
        </div>
      </div>

      <div className="tech-marquee" aria-label="Technology stack">
        <div className="tech-marquee__fade tech-marquee__fade--left" />
        <div className="tech-marquee__fade tech-marquee__fade--right" />

        <div className="tech-marquee__track">
          {[...techStack, ...techStack].map(({ name, Icon }, index) => (
            <div className="tech-pill" key={`${name}-${index}`}>
              <Icon />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
