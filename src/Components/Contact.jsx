import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";

// Initialize Firebase and Firestore
const firebaseConfig = {
  apiKey: "AIzaSyCbkwBlmufLUfSpjiNhnGeGSTy_mmpfODk",
  authDomain: "portfolio-f8cbf.firebaseapp.com",
  projectId: "portfolio-f8cbf",
  storageBucket: "portfolio-f8cbf.appspot.com",
  messagingSenderId: "856835135790",
  appId: "1:856835135790:web:0cb4e8ebf28197a4a682bf",
  measurementId: "G-D6WRJWVSTE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save message to Firestore
      const docRef = await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);

      // Send email using EmailJS
      const emailParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          "service_1s1oi7w",
          "template_by6d603",
          emailParams,
          "Kdg2Jb7QCCZ_zKGvR"
        )
        .then((response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          notify();
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send message, please try again.", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
        });

      // Clear the form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to send message, please try again.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "dark",
      });
    }
  };

  return (
    <div
      className="relative z-10 flex flex-col justify-center items-center bg-transparent p-4"
      id="contact"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-gray-700 rounded-md bg-transparent text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-700 rounded-md bg-transparent text-white"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
