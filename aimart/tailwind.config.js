module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        all: "url(\"/assets/all.jpg\")",
        smart: "url(\"/assets/smartphones.jpg\")",
        fashion: "url(\"/assets/fashion.jpg\")",
        grocery: "url(\"/assets/grocery.jpg\")",
        electronics: "url(\"/assets/electronics.jpg\")",
        furniture: "url(\"/assets/furniture.jpg\")",
      }
    },
  },
  plugins: [],
}
