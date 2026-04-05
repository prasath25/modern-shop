import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full hover:scale-105 transform">
        <div className="h-64 overflow-hidden bg-gray-200">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded mb-2">
            {item.category}
          </span>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {item.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">
              ${item.price}
            </span>
            <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition text-sm">
              ➕
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}