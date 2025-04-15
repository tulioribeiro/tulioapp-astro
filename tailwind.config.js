module.exports = {
  content: ["./src/**/*.{astro}"], // Adjust paths as necessary
  theme: {
    extend: {
      colors: {
        tapp: {
          bg: "var(--tapp-bg)",
          text: "var(--tapp-text)",
          box: "var(--tapp-box)",
          titles: "var(--tapp-titles)",
          links: "var(--tapp-links)",
        },
      },
      typography: {
        tapp: {
          css: {
            "--tw-prose-body": "var(--tapp-text)", // Body text color
            "--tw-prose-headings": "var(--tapp-titles)", // Headings color
            "--tw-prose-links": "var(--tapp-links)", // Links color
            "--tw-prose-links-hover": "var(--tapp-titles)", // Links hover color
            "--tw-prose-code": "var(--tapp-links)", // Code color
            "--tw-prose-bullets": "var(--tapp-titles)", // Bullet points color
            "--tw-prose-quotes": "var(--tapp-text)", // Quote color
            "--tw-prose-quote-borders": "var(--tapp-box)", // Quote border color
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
