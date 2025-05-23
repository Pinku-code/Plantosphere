// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//         <h1 className="text-2xl font-bold tracking-wide">Plantosphere</h1>
//         <nav className="hidden md:flex gap-6 text-sm font-medium">
//           <Link to="/">Home</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/training">Training & Events</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/incubation">Incubation</Link>
//           <Link to="/team">Team</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }






































import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training & Courses" },
    { to: "/journal", label: "Journal" },
    { to: "/blog", label: "Blog" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/team", label: "Team" },
    { to: "/collaborate", label: "Collaborate" },
    { to: "/contact", label: "Contact" },
  ];

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle theme toggle
  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  // On first render, check user's theme preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50 rounded-2xl backdrop-blur bg-white/80 dark:bg-gray-900/70 shadow-lg transition-all p-1">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
          Plantosphere
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700 dark:text-gray-200">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              {label}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleDark}
            className="ml-4 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* Profile Menu */}
          {/* <Menu as="div" className="relative ml-3">
            <Menu.Button className="focus:outline-none">
              <UserCircleIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 dark:bg-gray-700" : ""
                        }`}
                      >
                        Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/logout"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 dark:bg-gray-700" : ""
                        }`}
                      >
                        Logout
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleDark}>
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 rounded-b-2xl px-4 pb-4 space-y-2 text-sm font-medium">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/profile"
              className="block text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              Profile
            </Link>
            <Link
              to="/logout"
              className="block text-red-600 dark:text-red-400 hover:underline"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
