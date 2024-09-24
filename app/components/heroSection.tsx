"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/avatar.jpeg", "/images/hero-image.png"]; // Add your images here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev: any) => (prev + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="from-primary-400 to-secondary-600 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Abhiram R.",
                1000,
                "A Web Developer.",
                1000,
                "A UI/UX Designer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-6 mb-6">
            An adept software developer with a strong aptitude for problem
            solving and a demonstrated track record in developing and designing
            software within a test driven framework.
          </p>

          <div>
            <Link
              href="/#contact"
              className="px-6 from-primary-400 to-secondary-600 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/Files/Abhiram CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 180 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={images[currentImage]}
                alt="alternate Image"
                width={500}
                height={300}
                className="rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
