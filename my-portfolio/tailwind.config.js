/** @type {import('tailwindcss').Config} */
export default {
  // This content array tells Tailwind to scan all these files for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  
  // This is the crucial line that enables dark mode
  darkMode: 'class', 
  
  theme: {
    extend: {
      // These are the custom colors your components are using
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1e293b',   // slate-800
        secondary: '#334155', // slate-700
        accent: '#38bdf8',    // sky-400
        light: '#f1f5f9',     // slate-100
      }
    },
  },
  plugins: [],
}
