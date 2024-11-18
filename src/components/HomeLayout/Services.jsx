import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Button } from "keep-react";
import { useEffect, useState } from "react";

const Services = () => {
  const [moreButton, setMoreButton] = useState(false);
  const [servicesData, setServicesData] = useState([]);
  const allData = useLoaderData();
  useEffect(() => {
    if (moreButton) {
      setServicesData(allData);
    } else {
      setServicesData(allData.slice(0, 6));
    }
  }, [moreButton]);

  return (
    <div className="pt-20">
      <h2 className="text-3xl lg:text-5xl text-black font-bold text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {servicesData?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-6">
        {moreButton ? (
          <Button onClick={() => setMoreButton(false)}>Show Less</Button>
        ) : (
          <Button onClick={() => setMoreButton(true)}>Show More</Button>
        )}
      </div>
    </div>
  );
};

export default Services;
