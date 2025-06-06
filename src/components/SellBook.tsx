'use client';
import React, { useState } from 'react';
const SellBook = () => {
    const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    condition: 'Good',
    course: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Book Submitted:', formData);
  };
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Sell a Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Book Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="Enter book title"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Author *</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="Enter author name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Price ($) *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Condition *</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            >
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Course (Optional)</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="e.g., CS101, MATH201"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              rows={4}
              placeholder="Describe the condition, edition, and any highlights or notes"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default SellBook