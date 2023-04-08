import React from "react";

const Footers = () => {
  return (
    <footer className="bg-white">
      <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto pt-12">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h4 className="self-center pb-3 md:pb-0 text-3xl uppercase font-semibold whitespace-nowrap">
            Bookify
          </h4>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <a
                href="https://github.com/kamrul-hasan-antor"
                className="mr-4 hover:underline md:mr-6"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kamrul-hasan-antor-a08919210/"
                className="mr-4 hover:underline md:mr-6 "
              >
                Linked In
              </a>
            </li>
            <li>
              <a
                className="mr-4 hover:underline md:mr-6"
                rel="noreferrer"
                target="_blank"
                href="https://wa.me/01975429584"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100027525450053"
                rel="noreferrer"
                target="_blank"
                className="hover:underline"
              >
                Fackebook
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 text-center ">
          © 2023 Developed By Kamrul Hasan Antor ❤️
        </span>
      </div>
    </footer>
  );
};

export default Footers;
