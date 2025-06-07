// src/data/products.js
import AppleJuice from "../assets/AppleJuice.jpg";
import Atta from "../assets/Atta.jpg";
import Tea from "../assets/DarjlingTea.jpg";
import Turmeric from "../assets/Turmeric.jpg";
import Chili from "../assets/Chilli.jpg";

const products = [
  {
    id: "ice-apple-juice",
    name: "Ice Apple Juice",
    category: "Food Products",
    price: "₹120",
    image: AppleJuice,
    ingredients: "Ice Apple, Lemon, Cane Sugar",
    benefits: "Hydrating, Rich in nutrients",
    packaging: "250ml glass bottle",
    description: "A refreshing juice made from seasonal ice apples and lemon.",
  },
  {
    id: "multigrain-atta",
    name: "Multigrain Atta",
    category: "Food Products",
    price: "₹90",
    image: Atta,
    ingredients: "Wheat, Jowar, Bajra, Ragi, Barley",
    benefits: "High in fiber, Good for digestion",
    packaging: "1kg eco-pack",
    description: "Nutritious flour mix made with multiple grains for daily health.",
  },
  {
    id: "darjeeling-tea",
    name: "Darjeeling Tea",
    category: "Tea",
    price: "₹200",
    image: Tea,
    ingredients: "Darjeeling loose-leaf",
    benefits: "Antioxidant-rich, Refreshing",
    packaging: "100g pouch",
    description: "Premium Darjeeling tea sourced from Himalayan plantations.",
  },
  {
    id: "organic-turmeric",
    name: "Organic Turmeric",
    category: "Spices",
    price: "₹60",
    image: Turmeric,
    ingredients: "Dried turmeric root",
    benefits: "Anti-inflammatory, Immunity booster",
    packaging: "200g packet",
    description: "Pure organic turmeric sourced directly from farmers.",
  },
  {
    id: "chili-powder",
    name: "Chili Powder",
    category: "Spices",
    price: "₹50",
    image: Chili,
    ingredients: "Sun-dried red chili",
    benefits: "Spicy, Adds flavor",
    packaging: "100g packet",
    description: "Fiery red chili powder, sun-dried for maximum flavor.",
  },
];

export default products;
