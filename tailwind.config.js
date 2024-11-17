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
  },
};

export default keepTheme(config);
