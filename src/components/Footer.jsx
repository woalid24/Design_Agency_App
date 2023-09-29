"use client"

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";




const Footer = () => {
  return <footer className="bg-black">
    <div className="container mx-auto text-white py-24">
      <div className="flex justify-between mb-10">
        <div>
          <h2 className="uppercase font-bold text-4xl mb-10">Web Logo</h2>
          <p className="font-thin text-lg max-w-xs mb-6">Some footer text about the  Agency. Just a little description to help people understand you better</p>
          <div className="flex gap-3">
            <div className="bg-brand h-10 w-10 rounded-full flex justify-center items-center"> <FaFacebookF/> </div>
            <div className="bg-brand h-10 w-10 rounded-full flex justify-center items-center"> <FaXTwitter/> </div>
            <div className="bg-brand h-10 w-10 rounded-full flex justify-center items-center"> <FaLinkedinIn/> </div>
            <div className="bg-brand h-10 w-10 rounded-full flex justify-center items-center"> <FaInstagram/> </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-2">Quick Links</p>
          <ul className="flex flex-col gap-3">
            <li className="font-thin text-lg">Services</li>
            <li className="font-thin text-lg">Portfolio</li>
            <li className="font-thin text-lg">About Us </li>
            <li className="font-thin text-lg">Contact Us</li>
          </ul>
        </div>
        <div>
        <p className="font-semibold text-xl mb-2">Address</p>
        <p className="text-lg font-thin max-w-xs">Design Agency Head Office. Airport Road United Arab Emirate</p>
        </div>
      </div>
      <div className="text-lg">Copyright Design Agency 2022</div>
    </div>
  </footer>;
};
export default Footer;