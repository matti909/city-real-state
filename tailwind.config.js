/** @type {import('tailwindcss').Config} */
import primeui from "tailwindcss-primeui";
export const darkMode = ["selector", '[class="app-dark"]'];
export const content = ["./src/**/*.{html,ts,scss,css}", "./index.html"];
export const plugins = [primeui];
export const theme = {
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1920px",
  },
};
