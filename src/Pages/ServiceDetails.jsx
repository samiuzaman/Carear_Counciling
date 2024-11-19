import { Helmet } from "react-helmet-async";
import { Outlet, useLoaderData } from "react-router-dom";
import { Button, CardHeader, Divider } from "keep-react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { createContext, useState } from "react";

export const ReviewDataContext = createContext();
const ServiceDetails = () => {
  const [review, setReview] = useState([]);
  const service = useLoaderData();
  const {
    id,
    image,
    service_name,
    category,
    pricing,
    counselor,
    duration,
    rating,
    target_audience,
    availability,
    description,
  } = service;
  return (
    <div className="w-11/12 md:8/12 lg:w-5/6 mx-auto my-12">
      <Helmet>
        <title>Details | React App</title>
        <link rel="canonical" href={`secvice/${id}`} />
      </Helmet>
      <div className="details-card-container">
        <CardHeader>
          <img
            src={image}
            className="h-96 w-full rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl"
          ></img>
        </CardHeader>
        <div className="details-card-Itmes">
          <h2 className="text-4xl text-black font-bold ">{service_name}</h2>
          <p className="card-text">
            Counselor Name :
            <span className="font-medium text-[#2f3542] pl-2">{counselor}</span>
          </p>
          <p className="card-text"> Target Audience: {target_audience}</p>
          <p className="card-text"> Availability: {availability}</p>
          <p className="card-text"> Price: {pricing}</p>

          <Button className="w-28">Apply Now</Button>
        </div>
      </div>

      <div className="w-full md:w-4/6 lg:w-3/6 mx-auto py-6">
        <TableHeader className="">
          <TableRow>
            <TableHead>
              <div className="">Duration</div>
            </TableHead>
            <TableHead>
              <div className="">Category</div>
            </TableHead>
            <TableHead>
              <div className="">Rating</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-64">{duration}</TableCell>
            <TableCell className="w-16">{category}</TableCell>
            <TableCell className="w-36 md:w-44 flex flex-col md:flex-row gap-2">
              <Rating
                className="text-lg"
                initialRating={rating}
                emptySymbol={<FaStar className="text-metal-400" />}
                fullSymbol={<FaStar className="text-warning-400" />}
              />
              {rating}
            </TableCell>
          </TableRow>
        </TableBody>
      </div>
      <Divider />
      <div className="w-11/12 mdw-4/5 mx-auto my-8">
        <h2 className="text-4xl underline font-semibold text-black text-center mb-6">
          About this Service
        </h2>
        <p className="text-[#202225] text-justify">{description}</p>
      </div>
      <Divider />
      <div>
        <ReviewDataContext.Provider value={[review, setReview]}>
          <Outlet></Outlet>
        </ReviewDataContext.Provider>
      </div>
    </div>
  );
};

export default ServiceDetails;
