import {
  Alert,
  AlertDismiss,
  AlertIcon,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  InputIcon,
} from "keep-react";
import { Envelope } from "phosphor-react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";

const Forgate = () => {
  const {
    errorMessage,
    setErrorMessage,
    successMessage,
    setSuccessMessage,
    handleResetPassword,
  } = useContext(AuthContext);
 

  const handleForgateForm = (event) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    const email = event.target.email.value;
    handleResetPassword(email)
      .then(() => {
        setSuccessMessage(
          "Your password reset request was successful. Please check your email for the next steps."
        );
      })
      .catch((error) => setErrorMessage(error.message.slice(22, 42)));
  };

  return (
    <div>
      <Helmet>
        <title>Forget | React App</title>
        <link rel="canonical" href="/login" />
      </Helmet>

      <div className="w-11/12 mx-auto space-y-5 mt-4">
        {successMessage && (
          <Alert withBg={true} color="success">
            <div className="flex gap-3">
              <AlertIcon />
              <p>{successMessage}</p>
            </div>
            <AlertDismiss onClick={() => setSuccessMessage(null)} />
          </Alert>
        )}
      </div>
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
            <CardTitle>Forgotten your password?</CardTitle>
            <p className="mt-4">Enter your email to reset your password</p>
          </CardHeader>
          <form onSubmit={handleForgateForm} className="space-y-2">
            <fieldset className="space-y-3">
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="ps-11 mt-4"
                />
                <InputIcon>
                  <Envelope size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <Button type="submit" className="!mt-3 block w-full bg-[#4E21FF]">
              Reset Password
            </Button>
          </form>
          <div className="text-center"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forgate;
