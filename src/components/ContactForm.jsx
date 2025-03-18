// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = ({ formData, setFormData, handleSubmit }) => (
  <div className="py-20">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-lg border-none bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-lg border-none bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="h-32 w-full rounded-lg border-none bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="!rounded-button cursor-pointer bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 whitespace-nowrap"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default ContactForm;