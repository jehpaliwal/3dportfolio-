import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Build.ish</h4>
                <h5>AI & Data Analytics Intern</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI agents, data pipelines and analytics dashboards for
              real clients. Delivered 3 projects worth Rs 65k+ including a
              Shopify store, social media growth campaign, and business website.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Independent Client Work</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and delivered client websites, Shopify stores and social
              media strategies. Grew a client's Instagram by 700+ followers and
              launched a live e-commerce store that is still generating
              enquiries today.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CS (AI & ML) Student</h4>
                <h5>RGPV Bhopal</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started exploring web development, Python and AI/ML fundamentals.
              Built personal projects, learned the basics, and developed a
              habit of building things from scratch just to understand how they
              work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
