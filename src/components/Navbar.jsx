// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones para o menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-apple-gray dark:bg-dark-bg p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="font-semibold text-apple-dark dark:text-dark-text">
          <Link to="/" className="hover:text-apple-blue transition-colors duration-300">
            <img src="https://i.postimg.cc/LsVgn6vY/DALL-E-2024-07-30-17-06-20-A-modern-minimalist-logo-with-an-Apple-aesthetic-for-a-beach-house-n.png" className="max-w-[15%]" alt="" />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-apple-dark dark:text-dark-text focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-6 w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block mt-4 md:mt-0 md:inline-block text-apple-dark dark:text-dark-text hover:text-apple-blue transition-colors duration-300">
            Dashboard
          </Link>
          <Link to="/reservations" className="block mt-4 md:mt-0 md:inline-block text-apple-dark dark:text-dark-text hover:text-apple-blue transition-colors duration-300">
            Reservas
          </Link>
          <Link to="/new-reservation" className="block mt-4 md:mt-0 md:inline-block text-apple-dark dark:text-dark-text hover:text-apple-blue transition-colors duration-300">
            Nova Reserva
          </Link>
          <div className="mt-4 md:mt-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
