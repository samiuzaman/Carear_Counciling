import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
} from "keep-react";
import { Envelope, Image, Lock, Person } from "phosphor-react";
import { useContext } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { handleSigninGoogle, setUser, setErrorMessage, handleSigninTwitter } =
    useContext(AuthContext);
  // Handle Google Login Functionality
  const handleGoogleLogin = () => {
    handleSigninGoogle()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  // Handle Twitter Login Functionality
  const handleTwitterLogin = () => {
    handleSigninTwitter()
      .then((result) => setUser(result.user))
      .catch((error) => setErrorMessage(error));
  };
  // const regex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){2,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  return (
    <div>
      <Card className="max-w-sm mx-auto mt-12">
        <CardContent className="space-y-3">
          <CardHeader className="text-center">
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-between gap-3">
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              color="secondary"
              className="w-full"
            >
              <FaGoogle size={20} className="mr-1.5 text-[#4285F4] font-bold" />
              Google
            </Button>
            <Button
              onClick={handleTwitterLogin}
              variant="outline"
              color="secondary"
              className="w-full"
            >
              <FaTwitter size={20} className="mr-1.5 text-[#1DA1F2]" />
              Twitter
            </Button>
          </div>
          <Divider>Or</Divider>
          <form className="space-y-2">
            <fieldset className="space-y-1">
              <Label htmlFor="email">Full Name</Label>
              <div className="relative">
                <Input
                  name="name"
                  type="name"
                  placeholder="Enter Full Name"
                  className="ps-11"
                />
                <InputIcon>
                  <Person size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="email">Email*</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  className="ps-11"
                />
                <InputIcon>
                  <Envelope size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="email">Photo URL</Label>
              <div className="relative">
                <Input
                  name="photo"
                  type="text"
                  placeholder="Your Photo URL"
                  className="ps-11"
                />
                <InputIcon>
                  <Image size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="password">Password*</Label>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Enter password"
                  type="password"
                  className="ps-11"
                />
                <InputIcon>
                  <Lock size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <Button type="submit" className="!mt-3 block w-full bg-[#4E21FF]">
              Register
            </Button>
          </form>
          <div className="flex gap-2 justify-center ">
            <p>Already have an account ? </p>
            <Link to="/login" className="text-primary-600">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
