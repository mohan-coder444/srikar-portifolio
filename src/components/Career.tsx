import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (CGPA: 9.04)</h4>
                <h5>VR Siddhartha Engineering College</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing a Bachelor's degree in Computer Science. Mentoring 40+ students in AI and development. Intermediate MPC: 94.3%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>TechXcelerate 2025 Winner</h4>
                <h5>BITS Pilani Hyderabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Awarded 1st place for building innovative AI solutions, demonstrating strong problem-solving and rapid prototyping skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Rank 24 All India</h4>
                <h5>NxtWave Contest</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Ranked amongst the top 24 in India in a competitive technical contest. Multiple-time hackathon finalist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
