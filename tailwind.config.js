import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      PlayfairDisplay: ["Playfair Display", "serif"],
      Lora: ["Lora", "serif"],
    },
    colors: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    backgroundImage: {
      career: "url('./assets/career_counseling.jpg')",
      resume: "url('./assets/Resume_review.jpg')",
      talking: "url('./assets/talking_client.jpg')",
      secure: "url('./assets/secure_future.jpg')",
    },
  },
};

export default keepTheme(config);
