/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/Home.jsx",
    "./src/components/core/Aboutus.jsx",
    "./src/components/core/Services.jsx",
    "./src/components/core/Internship.jsx",
    "./src/components/core/ContactForm.jsx",
    "./src/components/core/CTA.jsx",
    "./src/components/core/Footer.jsx",
    "./src/components/core/NotFound.jsx",
    "./src/components/core/Team.jsx",
    "./src/components/core/InternLayout.jsx",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

