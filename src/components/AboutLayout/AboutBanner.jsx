import { TbBulb } from "react-icons/tb";
import { IoLayersOutline } from "react-icons/io5";

const AboutBanner = ({ aboutData }) => {
  const { heading, description, vision, mission } = aboutData;
  return (
    <div className="about-container">
      {/* First Section */}
      <div className="w-full md:w-6/12 lg:w-7/12 bg-[#fafafae7] p-4 lg:p-0 lg:pl-10 lg:pr-6">
        <h2 className="text-[#222D35] text-4xl font-semibold mb-6 leading-snug pt-12">
          {heading}
        </h2>
        <p>{description}</p>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-5 mt-6 py-16">
          {/* Vission Card */}
          <div className="bg-[#ffffff] w-72 h-60 flex flex-col justify-center items-center py-8 px-5 text-center space-y-5">
            <div>
              <TbBulb className="text-[#F71C52] text-5xl" />
            </div>
            <h4 className="text-xl font-bold text-[#222D35]">Vission</h4>
            <p>{vision}</p>
          </div>
          {/* Mission Card */}
          <div className="bg-[#ffffff] w-72 h-60 flex flex-col justify-center items-center py-8 px-5 text-center space-y-5">
            <div>
              <IoLayersOutline className="text-[#F71C52] text-5xl" />
            </div>
            <h4 className="text-xl font-bold text-[#222D35]">Mission</h4>
            <p>{mission}</p>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div></div>
    </div>
  );
};

export default AboutBanner;
