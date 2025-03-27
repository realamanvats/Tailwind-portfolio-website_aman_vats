import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '../store';
import { products } from '../data/products';
import { ShoppingCart } from 'lucide-react';

const ProductList: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const addToCart = useStore((state) => state.addToCart);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const categoryProducts = products.filter(
    (product) => product.category === categoryId
  );

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12"
    >
      <motion.h1 
        className="text-4xl font-bold text-center mb-16"
        style={{
          translateY: useTransform(scrollYProgress, [0, 0.2], [0, -50]),
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
        }}
      >
        {categoryId?.charAt(0).toUpperCase() + categoryId?.slice(1)}
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categoryProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    ${product.price}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductList;