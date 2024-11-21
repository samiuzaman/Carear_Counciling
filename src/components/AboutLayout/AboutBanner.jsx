import { TbBulb } from "react-icons/tb";
import { IoLayersOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutBanner = ({ aboutData }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      disable: "mobile",
    });
  }, []);
  const { heading, description, vision, mission } = aboutData;
  return (
    <div className="about-container">
      {/* First Section */}
      <div className="about-child-container" data-aos="fade-up">
        <h2 className="about-banner-heading" data-aos="fade-up">
          {heading}
        </h2>
        <p>{description}</p>
        <div className="vission-mission-parent">
          {/* Vission Card */}
          <div className="mission-vission-div">
            <div>
              <TbBulb className="text-[#F71C52] text-5xl" />
            </div>
            <h4 className="mission-vission-headin">Vission</h4>
            <p>{vision}</p>
          </div>
          {/* Mission Card */}
          <div className="mission-vission-div">
            <div>
              <IoLayersOutline className="text-[#F71C52] text-5xl" />
            </div>
            <h4 className="mission-vission-headin">Mission</h4>
            <p>{mission}</p>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div></div>
    </div>
  );
};
AboutBanner.propTypes = {
  aboutData: PropTypes.object,
};

export default AboutBanner;
