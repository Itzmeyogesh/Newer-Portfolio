import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Submitting...');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('Your message has been sent!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 rounded-xl shadow-xl p-8 md:p-12">

        {/* Form Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-center md:text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {formStatus && (
              <p className={`mt-3 text-sm ${formStatus.includes('sent') ? 'text-green-400' : 'text-red-400'}`}>
                {formStatus}
              </p>
            )}
          </form>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <h3 className="text-2xl font-semibold">Connect With Me</h3>
          <div className="flex space-x-8">
            <a
              href="https://linkedin.com/in/swatigadekar09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-4xl transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SWATIG01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-4xl transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/917499650281"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 text-4xl transition-transform transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
          <p className="text-lg">+91 7499650281</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
