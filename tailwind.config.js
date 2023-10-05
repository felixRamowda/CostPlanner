/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            transitionProperty: {
                height: "height",
            },
        },
    },
    plugins: [
        require("tailwindcss-animated"),
    ],
};
