"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Archive, CaretRight, SquaresFour, X } from "@phosphor-icons/react";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <SquaresFour size={20} /> },
    { name: "Products", path: "/products", icon: <Archive size={20} /> },
  ];

  return (
    <motion.aside
      animate={{ width: isOpen ? 250 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-gray-900 text-white flex flex-col p-4 fixed top-0 left-0 overflow-hidden"
    >
      {/* Toggle Button */}
      <div
        className={`flex items-center ${
          isOpen ? "justify-between" : "justify-center"
        }`}
      >
        <h2
          className={`text-xl font-bold transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          Admin
        </h2>
        <button
          className="p-2 bg-gray-700 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <CaretRight size={20} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col space-y-2 mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="flex items-center gap-3 px-4 py-2 rounded-md text-lg cursor-pointer hover:bg-gray-800"
          >
            <span className="text-xl">{item.icon}</span>
            <motion.span
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className={`text-base transition-opacity ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {item.name}
            </motion.span>
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
};

export default SideBar;
