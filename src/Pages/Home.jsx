import { Helmet } from "react-helmet-async";
import App from "../components/HomeLayout/Banner";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <Helmet>
        <title>Home | React App</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="my-12">
        {/* App is Banner Component */}
        <App></App>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
