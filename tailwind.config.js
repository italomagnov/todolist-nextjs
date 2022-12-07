/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,js}"],
    theme: {
        extend: {
            backgroundImage: {
                task: "url('../assets/task.png')",
            },
        },
    },
    plugins: [],
};
