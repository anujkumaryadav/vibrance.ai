import React from 'react'
import Logo from './../../assets/logo-dark.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import AboutUs from './Aboutus'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
        <img src={Logo} width={200}/>
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
      Transforming Ideas into Intelligent Solutions
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Home </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Services </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Careers </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href='/'> About </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Contact Us </a>
      </li>
      
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="https://www.linkedin.com/company/vibrance-ai-innovations/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin />

          
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Instagram</span>
          <FaInstagram />

        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Twitter</span>
          <FaSquareXTwitter />

        </a>
      </li>

      <li>
        <a
          href="mailto:official.vibranceaiinnovations@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Mail To</span>
          <IoMdMail />


        </a>
      </li>

    
    </ul>
  </div>
</footer>
    </>
  )
}

export default Footer