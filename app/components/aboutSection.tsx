"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tabbutton";
import Lottie from "lottie-react";
import portfolio from "../assets/portfolio.json";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Svelte Kit</li>
        <li>Next Js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>Css</li>
      </ul>
    ),
  },

  {
    title: "Jobs",
    id: "jobs",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer, Brianwired ,(2024-Present)</li>
        <li>Junior Software Developer,Orisys India Pvt.Ltd ,(2023-2024)</li>
        <li>Full Stack Intern,OrisysAcademy India Pvt.Ltd ,(2022-2023)</li>
        <li>Academic Coordinator,Homeskul ,(2021-2022)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>6 Months Fullstack Intership</li>
        <li>Computer Science Engineering, Svnce</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt=""
          style={{ borderRadius: 10 }}
        /> */}
        <Lottie
          animationData={portfolio}
          loop={true}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 10,
          }}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Zustand, TanstackQuerry, Node.js,
            Next js,SQL, HTML, CSS, and Git. I am a quick learner and I am
            always looking to expand my knowledge and skill set. I am a team
            player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("jobs")}
              active={tab === "jobs"}
            >
              {" "}
              Jobs{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA?.find((t: any) => t?.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
