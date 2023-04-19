/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // PRIMARY 
                // text
                "very-dark-desaturated-blue":"hsl(238, 29%, 16%)",
                "soft-red":"hsl(14, 88%, 65%)",

                // gradient
                'soft-violet': 'hsl(273, 75%, 66%)',
                'soft-blue':'hsl(240, 73%, 65%)',
                
                // NEUTRAL
                // text
                'very-dark-grayish-blue':'hsl(237, 12%, 33%)',
                'dark-grayish-blue':'hsl(240, 6%, 50%)',

                // dividers
                'light-grayish-blue':'hsl(240, 5%, 91%)',

            },
        },
    },
    plugins: [],
};
