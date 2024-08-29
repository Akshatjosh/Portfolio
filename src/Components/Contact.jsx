import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const notify = () =>
    toast.success("Thank You For Contacting Me !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: 0,
      theme: "dark",
    });

  return (
    <div
      className="relative z-10 flex flex-col justify-center items-center bg-transparent p-4"
      id="contact"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
        Contact Me
      </h1>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="w-full max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
          notify();
        }}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-3 border border-gray-700 rounded-md bg-transparent text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 border border-gray-700 rounded-md bg-transparent text-white"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            required
            className="p-3 border border-gray-700 rounded-md bg-transparent text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
      <ToastContainer
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Contact;
