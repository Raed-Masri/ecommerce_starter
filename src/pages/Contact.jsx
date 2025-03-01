import React, { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { sendEmail } from "../lib/emailService";
const Contact = () => {
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send the email using the utility function
    const result = await sendEmail(form.current);

    // Notify the user
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }

    // Reset the form after submission
    e.target.reset();
  };
  return (
    <>
      <main>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 class="text-4xl font-bold text-center mb-12">Contact Us</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-2xl font-semibold mb-6">Get in Touch</h2>
              <form ref={form} onSubmit={handleSubmit} class="space-y-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <Mail size={24} color="blue" />
                  <div>
                    <h3 class="font-medium">Email</h3>
                    <p class="text-gray-600">support@shophub.com</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <Phone size={24} color="blue" />
                  <div>
                    <h3 class="font-medium">Phone</h3>
                    <p class="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <MapPin size={24} color="blue" />
                  <div>
                    <h3 class="font-medium">Address</h3>
                    <p class="text-gray-600">123 Shop Street City, Country</p>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-6">Business Hours</h2>
                <div class="space-y-2">
                  <p>
                    <span class="font-medium">Monday - Friday:</span> 9:00 AM -
                    6:00 PM
                  </p>
                  <p>
                    <span class="font-medium">Saturday:</span> 10:00 AM - 4:00
                    PM
                  </p>
                  <p>
                    <span class="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
