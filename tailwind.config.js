/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            backgroundImage: {
                'compass-body': "url('src/assets/widget-illustrations/compass-body_366x366.svg')"
            }
        },
        fontFamily: {
            'body': []
        }
    },
    plugins: [],
}
