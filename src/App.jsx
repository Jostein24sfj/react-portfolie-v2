import { CiLocationOn } from "react-icons/ci";

import { useEffect } from "react";
import "./App.css";
import SkillsBar from "./components/SkillsBar";

export default function App() {
  useEffect(() => {
    // let finisherInstance;

    function createHeader() {
      if (window.FinisherHeader) {
        const finisherInstance = new window.FinisherHeader({
          count: 60,
          size: { min: 1, max: 9, pulse: 0 },
          speed: {
            x: { min: 0.1, max: 0.1 },
            y: { min: 0.1, max: 0.1 },
          },
          colors: {
            background: "#161616",
            particles: ["#acf4ea", "#d7f3fe", "#a7ffff"],
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
      // Remove old canvas if needed
      const oldCanvas = document.querySelector(".finisher-canvas");
      if (oldCanvas) oldCanvas.remove();

      createHeader();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="header finisher-header pt-12 md:pl-86 md:pr-86"
      style={{ width: "100%", height: "100vh" }}>
      <div className="flex flex-row">
        <img
          className="flex w-36 h-36 rounded-full border-4 border-zinc-400 p-1 "
          src="/IMG_22552.png"
          alt=""
        />
        <div className="pl-12">
          <h3 className="flex justify-center pt-6 pb-1 text-4xl font-bold">
            Jostein Westrum
          </h3>

          <p className="flex text-start items-center text-zinc-400">
            <CiLocationOn />
            Sandefjord, Norway
          </p>
        </div>
      </div>
      <div className="">
        <p className="flex text-2xl pt-12">
          Dette er en test portofolie side hvor jeg bl.a tester ut space
          background og tailwind css. Dette er portofolie nr.3 jeg lager.
        </p>
        <p className="flex text-2xl pt-6">
          Lager denne portofølien fordi læreren min Joakim ba meg om det.. og
          jeg lærer jo mye nytt da.
        </p>
        <p className="flex text-2xl pt-6">
          Har alltid hatt interesse for data. Mest gaming, men det skyldes bare
          fordi jeg ikke har blitt ordentlig introdusert til koding. Jeg var han
          som kalte det hacking, hver gang jeg så noe som lignet kode.
        </p>
        <p className="flex text-2xl pt-12">
          Dette er kode språkene jeg har lært sålangt:
        </p>
      </div>
      <br />
      <SkillsBar />
    </div>
  );
}
