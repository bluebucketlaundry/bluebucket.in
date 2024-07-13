"use client"

import { useState } from "react";
import InvoiceGenerator from "./components/InvoiceGen";
import Image from "next/image";
import logo from "../../public/images/bblogo.png"


const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Invoice Generator");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar stuff */}
      <aside className="w-64 bg-sec text-white">
        <Image
          src={logo}
          alt={""}
          className="relative my-10 p-4"
        />
        <ul>
          {/* Menu shit */}
          <li>
            <button
              className={`block w-full text-left p-5 hover:bg-main-accent hover:text-white ${selectedOption === "Invoice Generator" ? "bg-gray-700" : ""
                }`}
              onClick={() => setSelectedOption("Invoice Generator")}
            >
              Invoice Generator
            </button>
          </li>
        </ul>
      </aside>
      {/* Main screen */}
      <main className="flex-1 px-36 py-24">
        {selectedOption === "Invoice Generator" && <InvoiceGenerator />}
      </main>
    </div>
  );
};

export default Home;