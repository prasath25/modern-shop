import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { items } from '../data/items';

export default function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const item = items.find(i => i.id === parseInt(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Item not found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
        >
          ← Back to Products
        </button>

        {/* Detail Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Image Section */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-yellow-500">⭐ 4.8 (125 reviews)</span>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {item.name}
                </h1>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="border-t border-b border-gray-200 py-6 mb-6">
                  <p className="text-5xl font-bold text-blue-600 mb-2">
                    ${item.price}
                  </p>
                  <p className="text-gray-500">Free shipping on orders over $100</p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <label className="font-semibold text-gray-700">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-l border-r border-gray-300 py-2"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                    added
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
                </button>
                <button className="w-full py-4 px-6 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition">
                  💖 Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">🚚 Fast Delivery</h3>
            <p className="text-gray-600">Get your items within 2-3 business days</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">🔒 Secure Payment</h3>
            <p className="text-gray-600">Your payment information is always safe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">↩️ Easy Returns</h3>
            <p className="text-gray-600">30-day return policy on all items</p>
          </div>
        </div>
      </div>
    </div>
  );
}