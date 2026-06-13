/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
                'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
            },
            borderWidth: {
                '4': '4px',
                '8': '8px',
            },
            colors: {
                'neo-yellow': '#F4E06D',
                'neo-pink': '#FF9494',
                'neo-blue': '#8CC0DE',
                'neo-green': '#A7D2CB',
                'neo-white': '#FFFBEB',
                'neo-bg': '#FEF9EF',
            },
            fontFamily: {
                'body': [
                    'Poppins',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [],
}