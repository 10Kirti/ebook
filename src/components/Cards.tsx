import React from 'react'
import Image from "next/image";
import Link from "next/link";
import psychology from "../assets/Images/psychlogy.png";
import economics from "../assets/Images/economics.png";
import chemistry from "../assets/Images/organicchemistry.png";
import calculus from "../assets/Images/calculus.png";
// Step 1: Book data array
const books = [
  {
    id: 1,
    title: 'Chemistry Essentials',
    author: 'NCERT',
    course: 'CHEM101',
    price: '₹250',
    condition: 'Good',
    image: chemistry
  },
  {
    id: 2,
    title: 'Psychology 101',
    author: 'Pearson Publications',
    course: 'PSY123',
    price: '₹299',
    condition: 'Like New',
    image: psychology
  },
  {
    id: 3,
    title: 'Intro to Economics',
    author: 'Oxford Publications',
    course: 'ECO201',
    price: '₹275',
    condition: 'Fair',
    image: economics
  },
  {
    id: 4,
    title: 'Calculus Concepts',
    author: 'Cambridge',
    course: 'CALC101',
    price: '₹310',
    condition: 'Excellent',
    image: calculus
  }
  
]
const Cards = () => {
  return (
    <>
<div className="container mx-auto px-4 py-8">
  {/* Section Title */}
      <h2 className="text-2xl font-bold mb-4 text-center">Available Books</h2>

      {/* Show 1 card per row on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Image
              src={book.image}
              alt={`${book.title} Cover`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h2>
              <p className="text-gray-600 mb-1">by {book.author}</p>
              <p className="text-gray-500 text-sm mb-2">Course Code: {book.course}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-blue-600">{book.price}</span>
                <span className="text-sm text-green-700 font-medium">Condition: {book.condition}</span>
              </div>
              <Link href="/details">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Cards