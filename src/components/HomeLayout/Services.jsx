import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = useLoaderData();
  console.log(servicesData);

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
    </div>
  );
};

export default Services;
