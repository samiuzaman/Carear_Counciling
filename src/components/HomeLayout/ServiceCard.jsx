import { Button, Card, CardContent, CardHeader } from "keep-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, image, service_name, category, pricing, counselor } = service;
  const navigate = useNavigate();
  return (
    <div className=" mt-8">
      <Card>
        <CardHeader>
          <img src={image} className="h-52"></img>
        </CardHeader>
        <CardContent className="space-y-3 bg-[#f1f2f6]">
          <h2 className="text-xl text-black font-bold font-PlayfairDisplay">
            {service_name}
          </h2>
          <p className="card-text">
            Counselor Name :
            <span className="font-medium text-[#2f3542] pl-2">{counselor}</span>
          </p>
          <p className="card-text"> Category : {category}</p>
          <p className="card-text"> Price: {pricing}</p>
          <Button onClick={() => navigate(`/secvice/${id}`)}>Learn More</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;
