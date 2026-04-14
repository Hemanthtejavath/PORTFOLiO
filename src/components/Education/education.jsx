import "./education.css";
import {
  FaGraduationCap,
  FaTrophy,
  FaCode,
  FaUsers,
  FaGem,
} from "react-icons/fa6";

const educationData = {
  institution: "Institute of Engineering and Technology (IIT Patna)",
  location: "Patna, Bihar, India",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Metallurgy and Materials Engineering",
  startDate: "July 2023",
  endDate: "Present",
  status: "In Progress",
  description:
    "Comprehensive curriculum covering software engineering principles, data structures, algorithms, web technologies, and database management. Actively participating in coding competitions and tech events.",
};

const academicStats = [
  { label: "Academic Performance", value: 85, color: "red" },
  { label: "Technical Performance", value: 75, color: "amber" },
  { label: "Technical Projects", value: 12, color: "red" },
  { label: "Competitions", value: 18, color: "orange" },
];
const keyAchievements = [
  {
    icon: FaCode,
    title: "Top 10% in Programming Competitions",
    description: "Ranked among top performers in multiple coding challenges",
  },
  {
    icon: FaUsers,
    title: "Active Member of Coding Club",
    description: "Contributing to club initiatives and mentoring juniors",
  },
];

const currentFocus = ["Advanced DSA", "Web Development", "Full Stack"];

const leadershipActivities = [
  {
    icon: FaGem,
    title: "Materials Engineering Society (MatES) Lead",
    organization: "IIT Patna",
    description:
      "Led design and branding initiatives, managed a team to deliver promotional content and improve event outreach.",
    highlight: "Team Leadership",
  },
  {
    icon: FaTrophy,
    title: "7th Position - Inter IIT Cult Meet 7.0",
    organization: "Filmmaking Event",
    description:
      "Collaborated with 15-member team to execute project planning, coordination, and creative delivery under tight deadlines.",
    highlight: "Filmmaking",
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      {/* Background orbs */}
      <div className="education__orb education__orb--left" />
      <div className="education__orb education__orb--right" />

      <div className="education__inner">
        {/* Header */}
        <div className="education__header">
          <div className="education__badge">
            <span className="education__badge-dot" />
            ACADEMIC JOURNEY
          </div>
          <h1 className="education__title">EDUCATION</h1>
          <div className="education__subtitle">
            <p>
              Building a strong foundation in computer science through formal
              education, continuous learning, and practical application of
              modern technologies.
            </p>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="education__container">
          {/* LEFT - Institution Info */}
          <div className="education__left">
            {/* Institution Card */}
            <div className="institution-card">
              <div className="institution-card__header">
                <div className="institution-icon">
                  <FaGraduationCap />
                </div>
                <div className="institution-info">
                  <h2 className="institution-card__title">
                    {educationData.institution}
                  </h2>
                  <p className="institution-card__location">
                    📍 {educationData.location}
                  </p>
                </div>
              </div>

              {/* Degree Info */}
              <div className="degree-section">
                <div className="degree-icon">⭐</div>
                <div className="degree-content">
                  <h3 className="degree-title">{educationData.degree}</h3>
                  <p className="degree-field">{educationData.field}</p>
                </div>
                <span className="degree-status">{educationData.status}</span>
              </div>

              {/* Timeline */}
              <div className="timeline-section">
                <span className="timeline-item">
                  📅 {educationData.startDate} - {educationData.endDate}
                </span>
              </div>

              {/* Description */}
              <p className="institution-card__description">
                {educationData.description}
              </p>

              {/* Key Achievements */}
              <div className="achievements-section">
                <h4 className="achievements-title">🏆 Key Achievements</h4>
                <div className="achievements-grid">
                  {keyAchievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="achievement-item">
                        <div className="achievement-icon">
                          <IconComponent />
                        </div>
                        <h5 className="achievement-title">
                          {achievement.title}
                        </h5>
                        <p className="achievement-desc">
                          {achievement.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Stats Panel */}
          <div className="education__right">
            {/* Academic Stats Card */}
            <div className="stats-card">
              <h3 className="stats-card__title">ACADEMIC STATS</h3>

              {/* Stats Bars */}
              <div className="stats-list">
                {academicStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-header">
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-value">{stat.value}%</span>
                    </div>
                    <div className="stat-bar">
                      <div
                        className={`stat-fill stat-fill--${stat.color}`}
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="focus-card">
              <h3 className="focus-card__title">Current Focus</h3>
              <div className="focus-tags">
                {currentFocus.map((focus, index) => (
                  <span key={index} className="focus-tag">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Extracurricular - Bottom Section */}
        <div className="leadership-section">
          <h4 className="leadership-title">🌟 Leadership & Extracurricular</h4>
          <div className="leadership-grid">
            {leadershipActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className="leadership-item">
                  <div className="leadership-icon">
                    <IconComponent />
                  </div>
                  <h5 className="leadership-item-title">{activity.title}</h5>
                  <p className="leadership-org">{activity.organization}</p>
                  <p className="leadership-desc">{activity.description}</p>
                  <span className="leadership-highlight">
                    {activity.highlight}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
