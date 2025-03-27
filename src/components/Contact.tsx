import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4 group-hover:scale-110 transition" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition">
                    realamanvats@gmail.com
                  </span>
                </div>
                <div className="flex items-center group">
                  <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4 group-hover:scale-110 transition" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition">
                    +91 7461894499
                  </span>
                </div>
                <div className="flex items-center group">
                  <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4 group-hover:scale-110 transition" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition">
                    ITI College, Panhas, Begusarai, Bihar 851218
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://getform.io/f/bllyxqkb"
              method="POST"
              className="space-y-6 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              {/* Hidden Honeypot for Spam Prevention */}
              <input type="hidden" name="_gotcha" style={{ display: "none" }} />

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none"
                />
                <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-indigo-600 peer-focus:text-sm">
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none"
                />
                <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-indigo-600 peer-focus:text-sm">
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="peer w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none"
                ></textarea>
                <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-indigo-600 peer-focus:text-sm">
                  Message
                </label>
              </div>

              {/* Checkbox (Newsletter Subscription) */}
              <div className="flex items-center">
                <input type="hidden" name="subscribe" value="no" />
                <input type="checkbox" name="subscribe" value="yes" defaultChecked className="mr-2" />
                <label className="text-gray-600 dark:text-gray-300">Subscribe to Newsletter</label>
              </div>

              {/* Radio Buttons (Gender Selection) */}
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="gender" value="male" defaultChecked className="mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Male</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="female" className="mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Female</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="other" className="mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Other</span>
                </label>
              </div>

              {/* Dropdown (Work Experience) */}
              <div>
                <label className="text-gray-600 dark:text-gray-300 block mb-1">Work Experience</label>
                <select
                  name="work-experience"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none"
                >
                  <option value="one-year">0-1 years</option>
                  <option value="one-five-years">1-5 years</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Send Message <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
