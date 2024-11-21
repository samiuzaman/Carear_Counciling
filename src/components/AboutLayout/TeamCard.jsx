import { Card, CardContent, CardHeader } from "keep-react";
import PropTypes from "prop-types";

const TeamCard = ({ aboutData }) => {
  const { photo, name, role, bio } = aboutData;
  return (
    <Card className="w-96">
      <CardHeader>
        <img src={photo} className="h-72 w-full "></img>
      </CardHeader>
      <CardContent className="team-card">
        <h2>
          <span>Name:</span> {name}
        </h2>
        <p>
          <span> Role:</span> {role}
        </p>
        <p>
          <span>Bio:</span> {bio}
        </p>
      </CardContent>
    </Card>
  );
};

TeamCard.propTypes = {
  aboutData: PropTypes.object,
};

export default TeamCard;
