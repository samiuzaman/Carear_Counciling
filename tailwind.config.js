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
      black: "#000000",
      white: "#ffffff",
    },
    backgroundImage: {
      career: "url('https://i.ibb.co.com/LQqr4f8/career-counseling.jpg')",
      resume: "url('https://i.ibb.co.com/W5Z3BvM/Resume-review.jpg')",
      talking: "url('https://i.ibb.co.com/TkBcPFb/secure-future.jpg')",
      secure: "url('https://i.ibb.co.com/t3m97Tq/talking-client.jpg')",
      aboutbg:
        "url('https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
  },
};

export default keepTheme(config);
