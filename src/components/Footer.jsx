// export default function Footer() {
//   return (
//     <footer className="bg-green-700 text-white mt-12">
//       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div>
//           <h4 className="font-bold text-lg mb-2">Plantosphere</h4>
//           <p className="text-sm">Empowering farmers with innovation in food processing, training, and consultancy.</p>
//         </div>
//         <div>
//           <h4 className="font-bold text-lg mb-2">Quick Links</h4>
//           <ul className="text-sm space-y-1">
//             <li><a href="/about">About Us</a></li>
//             <li><a href="/products">Products</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold text-lg mb-2">Connect With Us</h4>
//           <p className="text-sm">Email: info@plantosphere.in</p>
//           <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
//           <div className="flex gap-4 mt-2">
//             <a href="#"><img src="/icons/facebook.svg" alt="fb" className="h-5" /></a>
//             <a href="#"><img src="/icons/instagram.svg" alt="ig" className="h-5" /></a>
//             <a href="#"><img src="/icons/linkedin.svg" alt="li" className="h-5" /></a>
//           </div>
//         </div>
//       </div>
//       <div className="bg-green-800 text-center py-3 text-xs">&copy; 2025 Plantosphere. All rights reserved.</div>
//     </footer>
//   );
// }







import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-lg mb-2">Plantosphere</h4>
          <p className="text-sm">Empowering farmers with innovation in food processing, training, and consultancy.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Connect With Us</h4>
          <p className="text-sm">Email: info@plantosphere.in</p>
          <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
          <div className="flex gap-4 mt-2 text-white text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="bg-green-800 text-center py-3 text-xs">&copy; 2025 Plantosphere. All rights reserved.</div>
    </footer>
  );
}
