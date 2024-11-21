import { useLoaderData } from "react-router-dom";
import AboutBanner from "../components/AboutLayout/AboutBanner";
import TeamCard from "../components/AboutLayout/TeamCard";
import Parallax from "../components/AboutLayout/Parallax";
import { Helmet } from "react-helmet-async";

const About = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>About | React App</title>
        <link rel="canonical" href="//about" />
      </Helmet>
      <h2 className="about-heading">{data.title}</h2>
      <AboutBanner aboutData={data}></AboutBanner>
      <Parallax></Parallax>
      <div className="w-11/12 lg:w-5/6 mx-auto">
        <h3 className="text-[#222D35] text-4xl font-bold text-center mt-16 mb-8">
          Our Team Member
        </h3>
        <div className="team-card-container">
          {data?.team?.map((teamMember, index) => (
            <TeamCard key={index} aboutData={teamMember}></TeamCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
