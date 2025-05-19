
// export default function HeroSection() {
//   return (
//     <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
//       <div className="absolute inset-0 bg-black bg-opacity-60" />
//       <div className="relative z-10 text-white text-center px-4">
//         <h2 className="text-4xl md:text-5xl font-bold leading-tight">Innovating Food, Empowering Farmers</h2>
//         <p className="mt-4 text-lg md:text-xl">Transforming agriculture through innovation and sustainability</p>
//         <button className="mt-6 bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-100 transition">Explore Our Work</button>
//       </div>
//     </section>
//   );
// }













import { motion } from "framer-motion";
import TeaImage from "../assets/tea.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] bg-center bg-no-repeat bg-cover overflow-hidden m-1.5 rounded-xl shadow-lg"
      style={{ backgroundImage: `url(${TeaImage})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div> */}

      {/* Animated Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md"
        >
          Innovating Food, <br className="hidden sm:block" />
          Empowering Farmers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl"
        >
          Transforming agriculture through innovation, sustainability, and technology.
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 inline-block px-8 py-3 bg-white text-green-700 font-semibold text-lg rounded-full shadow-lg hover:bg-green-100 transition duration-300"
        >
          Explore Our Work
        </motion.a>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-green-400 rounded-full opacity-30 blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 bg-green-600 rounded-full opacity-30 blur-xl"
        animate={{ y: [0, 25, 0], x: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
    </section>
  );
}
