import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const notify = () =>
    toast.success("Thank You For Contacting Me !", {
      position: "top-right",
      autoClose: 1000, // Close after 1 second
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false, // Pause on hover should be false to ensure auto-closing
      draggable: true,
      progress: 0, // Default progress bar
      theme: "colored",
      transition: "Bounce",
    });

  return (
    <div
      className="relative z-10 flex flex-col items-center min-h-screen py-12 "
      id="contact"
    >
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl text-white font-bold">Contact</h1>
      </div>

      <div className="w-full max-w-4xl px-4">
        <form className="p-8 rounded-lg shadow-lg border border-gray-700 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring focus:ring-lime-500 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring focus:ring-lime-500 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring focus:ring-lime-500 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Message"
              className="w-full h-32 p-3 border border-gray-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring focus:ring-lime-500 focus:ring-opacity-90"
            ></textarea>
          </div>

          <button
            type="button"
            onClick={notify}
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-lime-500 hover:border-lime-500 transition duration-300 ease-in-out self-end"
          >
            Send
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Contact;
