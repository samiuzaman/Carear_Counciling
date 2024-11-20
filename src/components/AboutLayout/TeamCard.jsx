import { Card, CardContent, CardHeader } from "keep-react";

const TeamCard = ({ aboutData }) => {
  const { photo, name, role, bio } = aboutData;
  return (
    <Card className="w-96">
      <CardHeader>
        <img src={photo} className="h-72 w-full "></img>
      </CardHeader>
      <CardContent className="space-y-3 bg-[#f1f2f6]">
        <h2 className="text-2xl text-black font-bold font-PlayfairDisplay ">
          <span className="font-semibold text-[#2f3542]">Name:</span> {name}
        </h2>
        <p className="card-text">
          <span className="font-semibold text-[#2f3542]"> Role:</span> {role}
        </p>
        <p className="card-text text-justify">
          <span className="font-semibold text-[#2f3542] ">Bio:</span> {bio}
        </p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
