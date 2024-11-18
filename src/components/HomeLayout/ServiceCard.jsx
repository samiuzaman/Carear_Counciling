import { Button, Card, CardContent, CardHeader } from "keep-react";

const ServiceCard = ({ service }) => {
  const { image, service_name, category, pricing, counselor } = service;
  return (
    <div className="mt-8">
      <Card>
        <CardHeader>
          <img src={image}></img>
        </CardHeader>
        <CardContent className="space-y-3">
          <h2 className="text-xl text-black font-bold font-PlayfairDisplay">
            {service_name}
          </h2>
          <p className="card-text">
            Counselor Name :
            <span className="font-medium text-[#2f3542] pl-2">{counselor}</span>
          </p>
          <p className="card-text"> Category : {category}</p>
          <p className="card-text"> Price: {pricing}</p>
          <Button>Learn More</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;
