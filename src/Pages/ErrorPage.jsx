import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Error | React App</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <h2 className="text-4xl text-black font-bold">{error.status}</h2>
      <p className="text-xl font-semibold">
        {error ? error.statusText : error.data}
      </p>
      <p>{error.data}</p>
    </div>
  );
};

export default ErrorPage;
