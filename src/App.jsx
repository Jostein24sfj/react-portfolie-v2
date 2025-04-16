import { CiLocationOn } from "react-icons/ci";
import { GoDot } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";
import "./App.css";
import SkillsBar from "./components/SkillsBar";
import Header from "./components/Header";
import StyledP from "./components/Text";

export default function App() {
  useEffect(() => {
    function createHeader() {
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          count: 100,
          size: { min: 2, max: 2, pulse: 0 },
          speed: {
            x: { min: 0.01, max: 0.1 },
            y: { min: 0.01, max: 0.1 },
          },
          colors: {
            background: "#161616",
            particles: ["#ec003f", "#00d3f2", "#ffdf20"],
          },
          blending: "overlay",
          opacity: { center: 1, edge: 0.2 },
          skew: 0,
          shapes: ["c"],
        });
      }
    }

    createHeader();

    const handleResize = () => {
      const oldCanvas = document.querySelector(".finisher-canvas");
      if (oldCanvas) oldCanvas.remove();
      createHeader();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rocketRef = useRef(null);

  const handleRocketHover = () => {
    const rocket = rocketRef.current;
    if (!rocket) return;

    rocket.classList.remove("animate-rocket-loop");

    // Trigger reflow for å kunne re-animere
    void rocket.offsetWidth;

    rocket.classList.add("animate-rocket-loop");
  };

  return (
    <>
      <Header />
      {/* Fixed background container */}
      <div
        className="finisher-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />

      {/* Scrollable content */}
      <div className="pt-12 px-6 md:px-96 text-white">
        <div className="flex flex-row">
          <img
            className="w-34 h-34 rounded-full border-4 border-zinc-400 p-1"
            src="/IMG_22552.png"
            alt=""
          />
          <div className="pl-12">
            <h3 className="pt-6 pb-1 text-4xl font-bold flex items-center gap-2">
              Jostein Westrum
              <span className="relative inline-block">
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                  <span className="rocket-smoke" />
                </span>
                <IoRocketOutline
                  ref={rocketRef}
                  onMouseEnter={handleRocketHover}
                  className="text-white rocket transition-transform duration-300"
                  size={24}
                />
              </span>
            </h3>

            <StyledP text="Sandefjord, Norway" className="pl-1">
              <CiLocationOn />
            </StyledP>

            <p className="flex items-center text-zinc-400 pl-2">23 yrs</p>

            <StyledP className="pl-1 pt-3" text="Coding Student">
              <GoDot className="text-cyan-400" />
            </StyledP>
            <p className="flex items-center text-zinc-400 pl-1">
              <GoDot className="text-yellow-300" />
              Professional Gymbro
            </p>
            <p className="flex items-center text-zinc-400 pl-1">
              <GoDot className="text-rose-600" />
              Car Enthusiast
            </p>
          </div>
        </div>

        <div>
          <p className="text-lg pt-12">
            Dette er en test portofolie side hvor jeg bl.a tester ut space
            background og tailwind css. Dette er portofolie nr.3 jeg lager.
          </p>
          <p className="text-lg pt-6">
            Lager denne portofølien fordi læreren min Joakim ba meg om det.. og
            jeg lærer jo mye nytt da.
          </p>
          <p className="text-lg pt-6">
            Har alltid hatt interesse for data. Mest gaming, men det skyldes
            bare fordi jeg ikke har blitt ordentlig introdusert til koding. Jeg
            var han som kalte det hacking, hver gang jeg så noe som lignet kode.
          </p>
          <p className="text-lg pt-12">
            Dette er kode språkene jeg har lært sålangt:
          </p>
        </div>
        <br />
        <SkillsBar />
        <div className="h-[100vh]" />
      </div>
    </>
  );
}
