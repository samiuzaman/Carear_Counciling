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
import { Envelope, Lock } from "phosphor-react";
import { useContext } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const myName = useContext(AuthContext);
  console.log(myName);
  return (
    <div>
      <Card className="max-w-sm mx-auto mt-12">
        <CardContent className="space-y-3">
          <CardHeader className="text-center">
            <CardTitle>Log In</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-between gap-3">
            <Button variant="outline" color="secondary" className="w-full">
              <FaGoogle size={20} className="mr-1.5 text-[#4285F4] font-bold" />
              Google
            </Button>
            <Button variant="outline" color="secondary" className="w-full">
              <FaTwitter size={20} className="mr-1.5 text-[#1DA1F2]" />
              Twitter
            </Button>
          </div>
          <Divider>Or</Divider>
          <form className="space-y-2">
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
            <p>Forgot Password</p>
            <Button type="submit" className="!mt-3 block w-full bg-[#4E21FF]">
              Log in
            </Button>
          </form>
          <div className="text-center">
            <Link to="/register" className="text-primary-600 text-center">
              Create your account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
