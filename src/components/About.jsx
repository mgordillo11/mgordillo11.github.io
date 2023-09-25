import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          esse deserunt ullam voluptate ipsam explicabo ipsum odit vitae
          accusantium numquam eveniet blanditiis, dolorem quibusdam, cupiditate
          minima maiores libero magni fugit?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quo.
          Molestias voluptatibus omnis officiis impedit explicabo doloribus,
          nulla ea quaerat sapiente nostrum ullam, esse distinctio? Doloremque
          accusamus eius obcaecati voluptatem!
        </p>
      </div>
    </div>
  );
};

export default About;
