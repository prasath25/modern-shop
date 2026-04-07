import React, { useState } from 'react';
import { items } from '../data/items';
import ItemCard from './ItemCard';

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('none');
  const categories = ['All', ...new Set(items.map(item => item.category))];
  
  // Filter items by category
  let filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  // Sort items by price
  if (sortBy === 'lowToHigh') {
    filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'highToLow') {
    filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-xl text-blue-100">Discover premium products at unbeatable prices</p>
        </div>
      </div>

      {/* Filter & Sort Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Functionality */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Sort by Price</h2>
          <div className="flex gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="none">Default</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
            
            {/* Alternative button-based sorting */}
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('lowToHigh')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  sortBy === 'lowToHigh'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-green-600'
                }`}
              >
                📈 Low to High
              </button>
              <button
                onClick={() => setSortBy('highToLow')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  sortBy === 'highToLow'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-green-600'
                }`}
              >
                📉 High to Low
              </button>
              <button
                onClick={() => setSortBy('none')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  sortBy === 'none'
                    ? 'bg-gray-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-600'
                }`}
              >
                ✕ Reset
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-800">{filteredItems.length}</span> product{filteredItems.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
