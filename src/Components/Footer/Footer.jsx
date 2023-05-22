import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <footer className="bg-gray-300 mx-auto py-10 px-4 mt-20">
        <div className="mb-16 md:mx-36 flex flex-col md:flex-row md:items-center justify-between">
          <div className="grow mt-4 md:mt-0 md:ml-12"></div>
          <div className="flex space-x-3 mt-4 md:mt-0 pe-20">
            <span><FaFacebook size={24} /></span>
            <span><FaTwitter size={24} /></span>
            <span><FaInstagram size={24} /></span>
            <span><FaYoutube size={24} /></span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-12 w-[100%]">
          <div className="mb-4">
            <h4 className="font-medium text-xl md:text-[26px] md:leading-[30.3px] lg:text-[31px] lg:leading-[40.3px] text-black dark:text-black">
              Chef Recipe Hunter
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-black dark:text-black font-medium mt-4 w-[320px] md:w-[391px]">
              Subscribe for newsletter
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex items-center space-x-2"
            >
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black font-semibold dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-8 lg:mt-0">
            <div className="mb-4">
              <p className="text-lg font-semibold text-black dark:text-black mb-6">
                Our Branches
              </p>
              <ul className="flex flex-col space-y-4 font-medium text-[14px] text-black dark:text-black">
                <li>Washington</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Texas</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-black dark:text-black mb-6">
                Services
              </p>
              <ul className="flex flex-col space-y-4 font-medium text-[14px] text-black dark:text-black">
                <li>Menu Planning</li>
                <li>Food Preparation</li>
                <li>Culinary Consulting</li>
                <li>Private Chef</li>
                <li>Cooking Classes</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-black dark:text-black mb-6">
                Legal
              </p>
              <ul className="flex flex-col space-y-4 font-medium text-[14px] text-black dark:text-black">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 font-semibold text-base text-black dark:text-black">
          © 2023 Chef Recipe Hunter. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
