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
import { createContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="w-11/12 md:8/12 lg:w-5/6 mx-auto my-12">
      <Helmet>
        <title>Details | Career Climb</title>
        <link rel="canonical" href={`secvice/${id}`} />
      </Helmet>
      <div className="details-card-container">
        <CardHeader>
          <img src={image}></img>
        </CardHeader>
        <div
          className="details-card-Itmes"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>{service_name}</h2>
          <p>
            Counselor Name :<span>{counselor}</span>
          </p>
          <p> Target Audience: {target_audience}</p>
          <p> Availability: {availability}</p>
          <p> Price: {pricing}</p>

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
            <TableCell className="w-12">{category}</TableCell>
            <TableCell className="w-32 md:w-44 flex flex-col md:flex-row items-center gap-2">
              <Rating
                className="text-sm md:text-md"
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
        <h2 className="service-detail-about">About this Service</h2>
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
