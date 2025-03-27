import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Categories from './components/Categories';

const ShopEase: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none"
      />
      <Navbar />
      <motion.div 
        style={{ scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/category/:categoryId" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </motion.div>
    </div>
  );
};

export default ShopEase;