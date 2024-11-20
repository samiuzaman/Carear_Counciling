import { Button, Divider, Input, Label } from "keep-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user, handleProfileUpdate } = useContext(AuthContext);
  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    handleProfileUpdate({
      displayName: name,
      photoURL: photo,
    });
  };
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto border-2 border-[#E3E5E8] rounded-xl shadow-lg p-3 lg:p-8 my-12 py-6 md:px-10">
      <h3 className="text-3xl font-semibold text-black">My Profile</h3>
      <Divider size="lg" className="my-6" />

      <div className="flex flex-col lg:flex-row gap-3 ">
        <div className="w-full lg:w-1/2 space-y-5 bg-error-60 lg:p-5">
          <div className="w-28 h-28">
            <img
              src={user?.photoURL}
              className="w-full h-full border-2 border-[#009432]"
            />
          </div>

          <div className="">
            <Label>Full Name</Label>
            <p className="border border-[#E3E5E8] bg-[#EFF2F5] py-3 pl-2 rounded-md">
              {user?.displayName}
            </p>
          </div>
          <div>
            <Label>Email</Label>
            <p className="border-2 border-[#E3E5E8] bg-[#EFF2F5] py-3 pl-2 rounded-md">
              {user?.email}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 border-t-2 md:border-t-0 pt-5 md:pt-0 lg:border-l-2 border-[#d5d6d8] lg:pl-6">
          <h2 className="text-center text-xl font-medium mb-4">Change Profile</h2>
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
              <Button type="submit" className="!mt-3 block w-full bg-[#4E21FF]">
                Update
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
