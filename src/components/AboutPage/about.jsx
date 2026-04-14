import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Title */}
        <h1 className="about-title">About Me</h1>

        <div className="about-container">
          {/* LEFT */}
          <div className="about-left">
            <h2>Who am I?</h2>

            <p>
              I'm <span className="highlight">Hemanth</span>, a B.Tech student
              in
              <span className="highlight">
                {" "}
                Metallurgy and Materials Engineering
              </span>
              at <span className="highlight">IIT Patna</span>.
            </p>

            <p>
              I'm passionate about exploring innovative materials and their
              applications in solving real-world problems. My journey in
              engineering has been driven by curiosity and a deep interest in
              understanding how materials behave at different scales and under
              various conditions. Outside of academics, I enjoy participating in
              cultural events and have been an active participant in Inter IIT
              Cultural Meets. I'm constantly looking to expand my knowledge and
              skills, both in my core field and in complementary areas like
              programming and data analysis, which are increasingly important in
              materials research and development.
            </p>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            <div className="about-photo-stage">
              <span className="about-photo-ring about-photo-ring--one" />
              <span className="about-photo-ring about-photo-ring--two" />

              <div className="about-photo-frame">
                <img
                  className="about-photo"
                  src="/my_profile_Pic.png"
                  alt="Hemanth portrait"
                />
                <div className="about-photo-caption">
                  <h3>Hem@nth Tejavath</h3>
                  <p>IIT Patna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
