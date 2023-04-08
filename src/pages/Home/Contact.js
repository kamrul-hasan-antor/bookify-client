import React from "react";

const Contact = () => {
  return (
    <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto py-12">
      <section className="text-gray-800">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12">
            <h2 className="text-3xl font-bold mb-6">Contact us</h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, modi accusantium ipsum corporis quia asperiores
              dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
              autem omnis fugiat perspiciatis? Ad, veritatis.
            </p>
            <p className="text-gray-500 mb-1">Mymensingh , Bangladesh</p>
            <p className="text-gray-500 mb-1">+ 01 234 567 89</p>
            <p className="text-gray-500 mb">kamrulhasan.antor95@gmail.com</p>
          </div>
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 md:pt-6  lg:px-6">
            <form>
              <div className="w-full mb-3">
                <input
                  className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
                  id="grid-text"
                  name="text"
                  type="text"
                  placeholder="Mr. Jone Doe"
                  required
                />
              </div>
              <div className="w-full mb-3">
                <input
                  className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
                  id="grid-email"
                  name="email"
                  type="email"
                  placeholder="janedoa@gmail.com"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#1c3c6b] text-white py-2 rounded font-semibold w-full mx-auto uppercase"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
