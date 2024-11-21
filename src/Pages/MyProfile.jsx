import { Button, Divider, Input, Label, toast } from "keep-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user, handleProfileUpdate } = useContext(AuthContext);
  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    if (name.length === 0 && photo.length === 0) {
      return;
    }

    handleProfileUpdate({
      displayName: name.length === 0 ? user.displayName : name,
      photoURL: photo.length === 0 ? user.photoURL : photo,
    }).then(() => {
      toast.success("Profile Updated Successfully");
    });
  };
  return (
    <div>
      <Helmet>
        <title>My Profile | Career Climb</title>
        <link rel="canonical" href="/myprofile" />
      </Helmet>
      <div className="myProfile-container">
        <h3>My Profile</h3>
        <Divider size="lg" className="my-6" />

        <div className="flex flex-col lg:flex-row gap-3 ">
          <div className="current-profile-div ">
            <div className="w-28 h-28">
              <img
                src={user?.photoURL}
                className="w-full h-full border-2 border-[#009432]"
              />
            </div>

            <div>
              <Label>Full Name</Label>
              <p>{user?.displayName}</p>
            </div>
            <div>
              <Label>Email</Label>
              <p>{user?.email}</p>
            </div>
          </div>
          <div className="update-profile-div">
            <h2 className="text-center text-xl font-medium mb-4">
              Change Profile
            </h2>
            <div>
              <form onSubmit={handleUpdateProfile} className="space-y-2">
                <fieldset className="space-y-1">
                  <Label htmlFor="email">Full Name</Label>
                  <div className="relative">
                    <Input
                      name="name"
                      type="name"
                      placeholder="Enter Full Name"
                      className="border-2 border-[#b7b8b9]"
                    />
                  </div>
                </fieldset>
                <fieldset className="space-y-1">
                  <Label htmlFor="email">Photo URL</Label>
                  <div className="relative">
                    <Input
                      name="photo"
                      type="text"
                      placeholder="Your Photo URL"
                      className="border-2 border-[#b7b8b9]"
                    />
                  </div>
                </fieldset>
                <Button className="!mt-3 block w-full bg-[#4E21FF]">
                  Update Profile
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
