import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">The Burger's Corner</h2>
          <p>Contact Us</p>
          <p>Email: contact@burgerscorner.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Products</h3>
          <ul className="list-disc list-inside font-semibold">
            <li>Burgers</li>
            <li>Fries</li>
            <li>Drinks</li>
            <li>Desserts</li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Opening Hours</h3>
          <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
        </div>
        <div className="flex space-x-4 text-2xl">
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="text-center">
        <p>&copy; 2024 The Burger's Corner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
