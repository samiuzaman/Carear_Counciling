import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | React App</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <h2 className="text-red-500">This is Home Page</h2>
    </div>
  );
};

export default Home;
