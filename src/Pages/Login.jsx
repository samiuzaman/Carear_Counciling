import {
  Alert,
  AlertDismiss,
  AlertIcon,
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
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    user,
    setUser,
    setErrorMessage,
    errorMessage,
    handleSigninGoogle,
    handleSigninTwitter,
    handleSigninEmailPassword,
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

  // Handle Login Form
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setErrorMessage(null);
    // Check password validation
    const CheckPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6}$/;
    if (!CheckPassword.test(password)) {
      return setErrorMessage(
        "Must be used 6 characters, one capital, and one lowercase letter"
      );
    }

    handleSigninEmailPassword(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setErrorMessage(error.message.slice(22, 42)));
  };

  return (
    <div>
      <Helmet>
        <title>Login | React App</title>
        <link rel="canonical" href="/login" />
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
            <CardTitle>Log In</CardTitle>
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
          <form onSubmit={handleLoginSubmit} className="space-y-2">
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
            <Link to="/forgate">
              <Label htmlFor="password">Forgot Password</Label>
            </Link>
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
