import React from 'react'
import Image from "next/image";
import Link from "next/link";
import psychology from "../assets/Images/psychlogy.png";
const Cards = () => {
  return (
    <>
     <div className="max-w-sm mx-auto">
      <Link href="/book-details" passHref>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <Image
            src={psychology}
            alt="Psychology Book Cover"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Psychology 101</h2>
            <p className="text-gray-600 mb-1">by Pearson Publications</p>
            <p className="text-gray-500 text-sm mb-2">Course Code: PSY123</p>

            {/* Price and Condition side by side */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-blue-600">₹299</span>
              <span className="text-sm text-green-700 font-medium">Condition: Like New</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
    </>
  )
}

export default Cards