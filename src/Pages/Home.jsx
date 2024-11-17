import { Helmet } from "react-helmet-async";
import App from "../components/HomeLayout/Banner";

const Home = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <Helmet>
        <title>Home | React App</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="my-12">
        <App></App>
      </div>
    </div>
  );
};

export default Home;
