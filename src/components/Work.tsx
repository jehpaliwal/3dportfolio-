import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Antariksh Marble",
    category: "Business Website",
    tools: "HTML, CSS, JavaScript, Responsive Design",
    description:
      "A clean, professional business website built for a marble and stone company, showcasing their products, services and contact information with a modern design.",
    image: "/images/project-1.png",
    link: "https://antarikshmarbles.com/",
  },
  {
    title: "RepoMind AI",
    category: "Intelligent Code Repository Assistant",
    tools:
      "N8N, Supabase, Google Gemini, Qwen 2.5, GitHub REST API, Vector Embeddings, pgvector",
    description:
      "Built a multi-layered RAG pipeline that turns any GitHub repository into a searchable, interactive knowledge base with accurate, context-aware answers.",
    image: "/images/project-2.png",
    link: "https://www.linkedin.com/posts/jaypaliwal-_30daysai-systemdesign-rag-ugcPost-7403071558174298112-6aUL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-jcQwBvbTTsaz3emHLzSS4cAQJcN1Lnnk",
  },
  {
    title: "Sham Di Hatti",
    category: "E-Commerce Website",
    tools: "Shopify, UI Design, Responsive Design, Product Management",
    description:
      "Designed and developed a fully functional e-commerce website for a food brand with product listings, clean UI, and a seamless shopping experience built to convert visitors into customers.",
    image: "/images/project-3.png",
    link: "https://shamdihatti.com/?srsltid=AfmBOoqW3Ajf-Zi4B89th1KuqlduC6ffQOZVnw6HXrGRgxcSwmEXTBrw",
  },
  {
    title: "Customer Segmentation & Churn Prediction",
    category: "ML Model · Business Insights",
    tools: "Python, scikit-learn, pandas, matplotlib, K-Means, Random Forest, Power BI",
    description:
      "Segmented 10,000+ bank customers into 4 behavioural profiles using K-Means clustering and trained a Random Forest churn model with 86% accuracy.",
    image: "/images/project-4.png",
    link: "https://github.com/jehpaliwal/Customer-Segmentation-Churn-Prediction",
  },
  {
    title: "Campaign Performance Analytics Dashboard",
    category: "Data Pipeline · BI Dashboard",
    tools: "Python, pandas, Power BI, MySQL, Excel, Google Data Studio",
    description:
      "Built an end-to-end analytics pipeline on 45,000+ CRM records and designed a 6-KPI Power BI dashboard tracking conversion rates, channel performance and cohorts.",
    image: "/images/project-5.png",
    link: "https://github.com/jehpaliwal/Campaign-Performance-Analytics-Dashboard-",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous project" data-cursor="disable">
            <MdArrowBack />
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next project" data-cursor="disable">
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div
                  className={`carousel-slide ${index === currentIndex ? "carousel-slide-active" : ""}`}
                  key={index}
                >
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
