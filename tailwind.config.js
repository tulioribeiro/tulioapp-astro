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
            "--tw-prose-code": "var(--tapp-titles)", // Code color
            "--tw-prose-bullets": "var(--tapp-titles)", // Bullet points color
            "--tw-prose-quotes": "var(--tapp-text)", // Quote color
            "--tw-prose-quote-borders": "var(--tapp-box)", // Quote border color
            "--tw-prose-quote-borders": "var(--tapp-box)", // Quote border color
            code: {
              "&::before": { content: "none" }, // Remove the ` before
              "&::after": { content: "none" }, // Remove the ` after,
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "0.25rem", // Rounded corners
              fontWeight: "500", // Medium weight
              fontFamily: "monospace, monospace", // Monospace font
              padding: "0.2rem 0.4rem", // Padding for readability
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
