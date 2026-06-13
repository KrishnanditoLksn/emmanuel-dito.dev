/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
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
            animation: {
                'neo-float': 'float 3s ease-in-out infinite',
                'neo-float-slow': 'float 5s ease-in-out infinite',
                'neo-float-reverse': 'float-reverse 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(1deg)' },
                },
                'float-reverse': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
                }
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