import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
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
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    handleSigninGoogle,
    setUser,
    setErrorMessage,
    errorMessage,
    handleSigninTwitter,
    handleCreateAccount,
    handleProfileUpdate,
  } = useContext(AuthContext);
  
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

  // Handle Register Form
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;

    // Check password validation
    const CheckPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6}$/;
    if (!CheckPassword.test(password)) {
      return setErrorMessage(
        "Must be used 6 characters, one capital, and one lowercase letter"
      );
    }

    handleCreateAccount(email, password)
      .then((result) => {
        setUser(result.user);
        handleProfileUpdate({
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message.slice(22, 44));
      });
  };

  return (
    <div>
      <Helmet>
        <title>Register | React App</title>
        <link rel="canonical" href="/register" />
      </Helmet>
      <div className="w-11/12 mx-auto space-y-5 mt-4">
        {errorMessage && (
          <Alert withBg={true} color="error">
            <div className="flex gap-3">
              <AlertIcon />
              <p>{errorMessage}</p>
            </div>
            <AlertDismiss onClick={() => setErrorMessage(null)} />
          </Alert>
        )}
      </div>
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
          <form onSubmit={handleRegisterSubmit} className="space-y-2">
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
                  name="email"
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
                  name="password"
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
