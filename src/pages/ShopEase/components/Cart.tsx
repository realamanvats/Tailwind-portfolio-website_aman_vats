import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStore } from '../store';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useStore();
  
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-32"
      >
        <h2 className="text-3xl font-bold mb-6">Your cart is empty</h2>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Shopping Cart</h2>
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    ${item.price}
                  </span>
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-2">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={20} />
                    </motion.button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Plus size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => removeFromCart(item.id)}
                className="p-3 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <Trash2 size={24} />
              </motion.button>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-600 pt-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">Total:</span>
            <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              ${total.toFixed(2)}
            </span>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;