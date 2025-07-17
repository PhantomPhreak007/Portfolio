import React from "react";
import CardSwap, { Card } from "./assets/Components/CardSwap/CardSwap.jsx";
import Back1 from "../public/back1.jpg";
import Back2 from "../public/back2.jpg";
import Back3 from "../public/back3.jpg";
import Back4 from "../public/back4.jpeg";

const Projects = () => {
  return (
    <div className="relative pb-6 min-h-[110vh] w-full overflow-hidden bg-black">
      <div className="text-white flex font-extrabold font-mono text-3xl sm:text-4xl items-center justify-center py-6">
        <h1>
          <span className="text-purple-500 text-4xl sm:text-5xl">P</span>rojects
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 gap-6 md:gap-0 px-4 md:px-16">
        <div className="w-full md:w-1/2 text-lg sm:text-2xl font-mono text-white mb-6 md:mb-0">
          <p>Here are some of my projects that I have made recently</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
              className="w-full"
            >
              <Card className="text-white">
                <a
                  href="https://reactbits.dev/components/card-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-extrabold font-mono text-2xl pl-6">
                    Hult Website
                  </h3>
                  <img src={Back1} className="pt-5 w-full object-cover rounded-lg" />
                </a>
              </Card>
              <Card className="text-white">
                <a
                  href="https://reactbits.dev/components/card-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-extrabold font-mono text-2xl pl-6">
                    E-cell Website
                  </h3>
                  <img src={Back2} className="pt-5 w-full object-cover rounded-lg" />
                </a>
              </Card>
              <Card className="text-white">
                <a
                  href="https://reactbits.dev/components/card-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-extrabold font-mono text-2xl pl-6">
                    Swift Chat
                  </h3>
                  <img src={Back3} className="pt-5 w-full object-cover rounded-lg" />
                </a>
              </Card>
              <Card className="text-white">
                <a
                  href="https://reactbits.dev/components/card-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-extrabold font-mono text-2xl pl-6">
                    FinEasy
                  </h3>
                  <img src={Back4} className="pt-5 w-full object-cover rounded-lg" />
                </a>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;