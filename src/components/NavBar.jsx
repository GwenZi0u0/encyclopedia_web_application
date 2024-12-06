import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const getBgColor = () => {
    switch (location.pathname) {
      case "/pokemon":
        return "bg-red-500";
      case "/digimon":
        return "bg-orange-500";
      default:
        return "bg-amber-500";
    }
  };

  return (
    <>
      <header
        className={`h-16 flex items-center justify-between fixed top-0 left-0 w-full ${getBgColor()} px-4 z-10`}
      >
        <div className="flex items-center">
          <Link to="/" className="text-2xl text-white font-bold">
            Encyclopedia
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "X" : "☰"}
        </button>

        <nav className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/pokemon"
            className="text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Pokemon
          </Link>
          <Link
            to="/digimon"
            className="text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Digimon
          </Link>
        </nav>

        {isMenuOpen && (
          <div
            className={`lg:hidden absolute top-16 left-0 w-full ${getBgColor()} p-4`}
          >
            <Link
              to="/"
              className="block text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/pokemon"
              className="block text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pokemon
            </Link>
            <Link
              to="/digimon"
              className="block text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Digimon
            </Link>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};
