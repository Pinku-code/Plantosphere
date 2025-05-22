// 


import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-bold mb-2">Plantosphere Pvt. Ltd.</h4>
          <p>
            Empowering communities through sustainable agriculture, food innovation, and carbon consulting.
          </p>
          <p className="mt-2">CIN: [Insert CIN]</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/training" className="hover:underline">Training</a></li>
            <li><a href="/journal" className="hover:underline">Journal</a></li>
            <li><a href="/case-studies" className="hover:underline">Case Studies</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-bold mb-2">Connect With Us</h4>
          <p>Email: <a href="mailto:connect@plantosphere.in" className="underline">connect@plantosphere.in</a></p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <div className="flex gap-4 mt-3 text-xl">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="X"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-800 text-center py-3 text-xs">
        &copy; 2025 Plantosphere Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
