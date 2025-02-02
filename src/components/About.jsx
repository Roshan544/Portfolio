import React from "react";
import HTML from "../../public/HTML.svg";
import CSS from "../../public/CSS.svg";
import JS from "../../public/JS.svg";
import REACT from "../../public/REACT.svg";
import TAILWIND from "../../public/TAILWIND.svg";
import PHP from "../../public/php.svg";
import LARAVEL from "../../public/laravel.svg";
import NODEJS from "../../public/nodejs.svg";
import DATABASES from "../../public/databases.svg";
import FIGMA from "../../public/figma.svg";
import FRAMER from "../../public/framer.svg";
import VS from "../../public/vs.svg";
import GIT from "../../public/GIT.svg";
import GITHUB from "../../public/GITHUB.svg";

function About() {
  return (
    <>
      <div
        name="About"
        className=" bg-black text-white flex flex-col justify-center items-center"
      >
        <div className="flex flex-col w-[80vw] justify-center items-center">
          <h1 className="flex text-3xl hover:scale-125 duration-150 hover:text-red-600">
            About
          </h1>
          <p className="pl-1 mt-2 text-justify text-sm opacity-75">
          I am a recent graduate from Mumbai University with a degree in Artificial Intelligence and Machine Learning. I specialize in front-end development, with strong skills in HTML, CSS, and JavaScript, along with proficiency in Tailwind CSS and the React library. Additionally, I have completed a four-month internship, where I gained hands-on experience in PHP, Laravel, MySQL, Figma, Framer, and other technologies. Throughout my journey, I have successfully completed several projects focused on building responsive and user-friendly websites. I am passionate about developing clean, efficient, and visually appealing web applications while continuously learning and exploring new technologies to enhance my expertise.
          </p>
        </div>
        <br />
        <div className="Edu">
          <h1 className="flex justify-center text-2xl mb-3 hover:scale-125 duration-150 hover:text-red-600">
            Education
          </h1>
          <table className="flex flex-row justify-between mx-3">
            <tbody className="">
              <tr className="text-sm flex flex-col gap-0 md:flex-row md:gap-20  px-5 mb-2 mx-4 md:mx-2 border py-3 hover:scale-x-105">
                <td className="flex flex-col mt-2 md:w-[20%]">
                  <span>12/2021 - 06/2024</span>
                  <span className="text-xs opacity-80">
                    Kaman Road - Mumbai
                  </span>
                </td>
                <td className="flex flex-col mt-2 md:w-[50%]">
                  <span>B.E Artificial Intelligence & Machine Learning</span>
                  <span className="text-xs opacity-80">
                    Universal College of Engineering
                  </span>
                </td>
                <td className="flex flex-col mt-2 md:w-[10%]">
                  <span>CGPI 8.12 / 10</span>
                </td>
              </tr>
              <tr className="text-sm flex flex-col gap-0 md:flex-row md:gap-20  px-5 mb-2 mx-4 md:mx-2 border py-3 hover:scale-x-105">
                <td className="flex flex-col mt-2 md:w-[20%]">
                  <span>10/2018 - 05/2021</span>
                  <span className="text-xs opacity-80">Bhayandar - Mumbai</span>
                </td>
                <td className="flex flex-col mt-2 md:w-[50%]">
                  <span>Diploma in Information Technology</span>
                  <span className="text-xs opacity-80">
                    Pravin Patil College of Diploma Engineering
                  </span>
                </td>
                <td className="flex flex-col mt-2 md:w-[10%]">
                  <span>Percentage 82 / 100</span>
                </td>
              </tr>
              <tr className="text-sm flex flex-col gap-0 md:flex-row md:gap-20  px-5 mb-2 mx-4 md:mx-2 border py-3 hover:scale-x-105">
                <td className="flex flex-col mt-2 md:w-[20%]">
                  <span>06/2017 - 04/2018</span>
                  <span className="text-xs opacity-80">Malad - Mumbai</span>
                </td>
                <td className="flex flex-col mt-2 md:w-[50%]">
                  <span>
                    Maharashtra State Board of Secondary and Higher Secondary
                    Education
                  </span>
                  <span className="text-xs opacity-80">
                    Swami Vivekanand High School
                  </span>
                </td>
                <td className="flex flex-col mt-2 md:w-[10%]">
                  <span>Percentage 67.4 / 100</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="Skills mx-3 m-11 flex flex-col items-center justify-center mt-5">
          <h1 className="w-[50vw] text-2xl mt-4 mb-3 flex justify-center hover:scale-125 duration-150 hover:text-red-600">
            Skills
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 w-[90vw]">
            {[
              { src: HTML, label: "HTML" },
              { src: CSS, label: "CSS" },
              { src: JS, label: "JS" },
              { src: REACT, label: "REACT" },
              { src: TAILWIND, label: "TAILWIND" },
              { src: PHP, label: "PHP" },
              { src: LARAVEL, label: "LARAVEL" },
              { src: NODEJS, label: "NODE JS" },
              { src: DATABASES, label: "MySQL" },
              { src: FIGMA, label: "figma" },
              { src: FRAMER, label: "framer" },
              { src: VS, label: "vs" },
              { src: GIT, label: "GIT" },
              { src: GITHUB, label: "GITHUB" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 hover:scale-125"
              >
                <img
                  className="w-[30%] md:w-[20%] mb-2"
                  src={skill.src}
                  alt={skill.label}
                />
                <p className="hidden md:block">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
