import React from "react";

const Contact = () => {
  return (
    // <div
    //   name="contact"
    //   className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    // >
    //   <form
    //     action="https://getform.io/f/2698a065-52b8-40bd-b631-e2ee27ec69f4"
    //     method="POST"
    //     className="flex flex-col max-w-[600px] w-full"
    //   >
    //     <div className="pb-8">
    //       <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
    //         Contact
    //       </p>
    //       <p className="py-4 text-gray-300">
    //         // Submit the form below or shoot me an email -
    //         vutukuri.kumar192st.niituniversity.in
    //       </p>
    //     </div>
    //     <input
    //       className="bg-[#ccd6f6] p-2"
    //       type="text"
    //       placeholder="Name"
    //       name="name"
    //     />
    //     <input
    //       className="my-4 p-2 bg-[#ccd6f6]"
    //       type="email"
    //       placeholder="Email"
    //       name="email"
    //     />
    //     <textarea
    //       className="bg-[#ccd6f6] p-2"
    //       name="message"
    //       rows="10"
    //       placeholder="Message"
    //     ></textarea>
    //     <button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-pink-600 hover:border-pink-600">
    //       Let's Collaborate
    //     </button>
    //   </form>
    // </div>
    <section className="p-6 text-gray-100">
      <form
        action="https://getform.io/f/2698a065-52b8-40bd-b631-e2ee27ec69f4"
        method="POST"
        novalidate=""
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
            type="text"
            placeholder="Your name"
            required=""
            className="block w-full px-2 py-3 bg-gray-800 rounded focus:outline-none focus:ring focus:ri"
          />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            required=""
            className="block w-full px-2 py-3 bg-gray-800 rounded focus:outline-none focus:ring focus:ri"
          />
        </div>
        <div>
          <label for="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
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
