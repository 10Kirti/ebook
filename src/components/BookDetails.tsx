import React from 'react'
import Image from "next/image";
import psychology from "../assets/Images/psychlogy.png";
const BookDetails = () => {
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow-md mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Image */}
        <Image
          src={psychology} 
          alt="Book"
          className="w-full md:w-1/2 rounded-md object-cover"
        />

        {/* Book Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Psychology</h1>
          <p className="text-gray-600 mb-2">by David G. Myers</p>
          <p className="text-lg font-semibold text-blue-600 mb-2">$32.75 <span className="text-sm text-gray-600">Good</span></p>
          <p className="mb-4"><span className="font-semibold">Course:</span> PSY101</p>

          <h2 className="font-semibold text-gray-700 mb-1">Description</h2>
          <p className="text-gray-600 mb-4">Eleventh edition. Minimal highlighting, good condition.</p>

          <p className="text-sm text-gray-500 mb-2"><span className="font-medium">Seller:</span> James Smith</p>
          <p className="text-sm text-gray-500 mb-4"><span className="font-medium">Listed on:</span> 2023-07-02</p>

          <button className="w-full bg-gray-800 text-white py-2 rounded-md mb-2 hover:bg-gray-700">Contact Seller</button>
          <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300">Save for Later</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookDetails