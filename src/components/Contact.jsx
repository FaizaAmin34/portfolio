import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myzdvbkk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("Thank you for contacting me! I’ll get back to you soon.");
        form.reset();
      } else {
        setFormStatus("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      setFormStatus("Oops! Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => setFormStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-indigo-400"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-4 sm:px-6">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700/40"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium text-sm sm:text-base">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 sm:p-3 rounded-lg bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-sm sm:text-base">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full p-2 sm:p-3 rounded-lg bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-sm sm:text-base">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              required
              className="w-full p-2 sm:p-3 rounded-lg bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 sm:py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm sm:text-base transition"
          >
            Send Message
          </button>
          {formStatus && (
            <p className="mt-4 text-center text-green-400 text-sm sm:text-base">{formStatus}</p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 sm:gap-6 text-center px-4 sm:px-0"
        >
          <p className="text-gray-400 text-sm sm:text-base max-w-sm">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let’s connect!
          </p>

          <div className="flex gap-4 sm:gap-6 mt-4">
            <a
              href="https://github.com/FaizaAmin34"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/60 border border-gray-700 hover:bg-indigo-500/20 hover:text-indigo-400 transition"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/faizaamin32/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/60 border border-gray-700 hover:bg-indigo-500/20 hover:text-indigo-400 transition"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
