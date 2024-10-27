// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#3B82F6', // Blue
        primaryPurple: '#9333EA', // Purple
        accentYellow: '#FBBF24', // Bright yellow
        accentTeal: '#14B8A6', // Teal
        darkText: '#1F2937', // Dark text
        lightGray: '#F3F4F6', // Light gray background
      },
    },
  },
  plugins: [],
};
