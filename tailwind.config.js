/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/common/Navbar.jsx",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/Components/core/Aboutus.jsx",
    "./src/Components/core/Services.jsx",
    "./src/Components/core/Internship.jsx",
    "./src/Components/core/ContactForm.jsx",
    "./src/Components/core/CTA.jsx",
    "./src/Components/core/Footer.jsx",
    "./src/Components/core/NotFound.jsx",
    "./src/Components/core/Team.jsx",
    "./src/Components/core/InternLayout.jsx",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

