import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <Mail className="w-7 h-7 text-indigo-600 dark:text-indigo-400 mr-4 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-gray-800 dark:text-gray-300 transition-colors duration-200 group-hover:text-indigo-500">
                    realamanvats@gmail.com
                  </span>
                </div>
                <div className="flex items-center group">
                  <Phone className="w-7 h-7 text-indigo-600 dark:text-indigo-400 mr-4 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-gray-800 dark:text-gray-300 transition-colors duration-200 group-hover:text-indigo-500">
                    +91 7461894499
                  </span>
                </div>
                <div className="flex items-center group">
                  <MapPin className="w-7 h-7 text-indigo-600 dark:text-indigo-400 mr-4 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-gray-800 dark:text-gray-300 transition-colors duration-200 group-hover:text-indigo-500">
                    ITI College, Panhas, Begusarai, Bihar 851218
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://getform.io/f/bllyxqkb"
              method="POST"
              className="space-y-6 bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl transition transform hover:scale-105"
            >
              {/* Hidden Honeypot */}
              <input type="hidden" name="_gotcha" style={{ display: "none" }} />

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                ></textarea>
                <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
