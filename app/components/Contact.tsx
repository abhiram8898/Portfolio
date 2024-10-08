\"use client";
import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import animations from "../assets/animations.json";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-4 my-12 py-24 gap-4 relative"
    >
      <h2 className="text-4xl font-bold text-white my-2 col-span-full">
        Let's Connect{" "}
      </h2>

      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="z-10 md:col-span-2">
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities; my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-[#ADB7BE]">
            Email:{" "}
            <Link href="mailto:grp.abhiram@gmail.com" className="text-blue-400">
              grp.abhiram@gmail.com
            </Link>
          </h3>
          <h3 className="text-xl text-[#ADB7BE]">
            Ph:{" "}
            <Link href="tel:8943120775" className="text-blue-400">
              8943120775
            </Link>
          </h3>
        </div>
      </div>

      <Lottie
        animationData={animations}
        loop={true}
        style={{ width: 100, height: 100 }}
      />
      <div className="socials flex flex-row gap-4 z-10">
        <Link
          href="https://github.com/abhiram8898"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abhiram8898/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
