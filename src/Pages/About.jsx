import { useLoaderData } from "react-router-dom";
import AboutBanner from "../components/AboutLayout/AboutBanner";
import TeamCard from "../components/AboutLayout/TeamCard";
import Parallax from "../components/AboutLayout/Parallax";

const About = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <h2 className="about-heading">{data.title}</h2>
      <AboutBanner aboutData={data}></AboutBanner>
      <Parallax></Parallax>
      <div className="w-11/12 lg:w-5/6 mx-auto">
        <h3 className="text-[#222D35] text-4xl font-bold text-center mt-16 mb-8">
          Our Team Member
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          {data?.team?.map((teamMember, index) => (
            <TeamCard key={index} aboutData={teamMember}></TeamCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
