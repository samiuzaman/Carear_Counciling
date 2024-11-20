import { useLoaderData } from "react-router-dom";

const About = () => {
  const AboutData = useLoaderData();
  console.log(AboutData);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <h2 className="text-4xl text-black font-bold mx-auto text-center my-5">
        {AboutData[0]?.title}
      </h2>
    </div>
  );
};

export default About;
