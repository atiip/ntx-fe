"use client";

import React, { ReactNode, useState } from "react";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-white transition-all">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.main
        key={pathname}
        animate={{
          marginLeft: isOpen ? 250 : 80,
          width: isOpen ? "calc(100% - 250px)" : "calc(100% - 80px)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-6"
      >
        {children}
      </motion.main>
    </div>
  );
}
