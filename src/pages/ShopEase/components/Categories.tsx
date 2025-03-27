import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { categories } from '../data/categories';

const Categories: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-32 py-20"
    >
      {categories.map((category, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={category.id}
            className={`flex items-center gap-12 ${isEven ? '' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div 
              className="flex-1"
              style={{
                translateX: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [isEven ? -100 : 100, 0]
                )
              }}
            >
              <Link to={`/category/${category.id}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-200">Explore our collection</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex-1 space-y-4"
              style={{
                translateX: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [isEven ? 100 : -100, 0]
                )
              }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Discover our curated selection of {category.name.toLowerCase()} products.
                Each item is carefully selected to ensure the highest quality and value.
              </p>
              <Link
                to={`/category/${category.id}`}
                className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Shop Now
              </Link>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Categories;