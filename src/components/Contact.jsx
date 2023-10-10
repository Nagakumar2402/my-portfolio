import React from "react";

const Contact = () => {
  return (
    <section className="p-6 text-gray-100">
      <form
        action="https://getform.io/f/2698a065-52b8-40bd-b631-e2ee27ec69f4"
        method="POST"
        className="container w-full max-w-xl p-8 mx-auto space-y-6 bg-gray-900 rounded-md shadow"
      >
        <h2 className="inline mb-4 text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
          Contact us
        </h2>
        <div>
          <label for="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required=""
            className="block w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring focus:ri"
          />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required=""
            className="block w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring focus:ri"
          />
        </div>
        <div>
          <label for="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            placeholder="Message..."
            className="block w-full p-2 bg-gray-800 rounded h-60 focus:outline-none focus:ring focus:ri"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-gray-900 rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-violet-400 hover:ri"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
