import { useRef } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GoDot } from "react-icons/go";
import SkillsBar from "./SkillsBar";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

export default function AppContent() {
  const rocketRef = useRef(null);

  const handleRocketHover = () => {
    const rocket = rocketRef.current;
    if (!rocket) return;
    rocket.classList.remove("animate-rocket-loop");
    void rocket.offsetWidth;
    rocket.classList.add("animate-rocket-loop");
  };

  return (
    <>
      <section className="flex flex-row">
        <img
          className="w-34 h-34 rounded-full border-4 border-zinc-400 p-1"
          src="/IMG_22552.png"
          alt=""
        />
        <div className="pl-12">
          <h3 className="pt-6 pb-1 text-4xl font-bold flex items-center gap-2">
            Jostein Westrum
            <IoRocketOutline
              ref={rocketRef}
              onMouseEnter={handleRocketHover}
              className="text-white rocket transition-transform duration-300"
              size={24}
            />
          </h3>

          <p className="flex items-center text-zinc-400 pl-1">
            <CiLocationOn />
            Sandefjord, Norway
          </p>

          <p className="flex items-center text-zinc-400 pl-2">23 yrs</p>

          <p className="flex items-center text-zinc-400 pl-1">
            <GoDot className="text-cyan-400" />
            Coding Student
          </p>
          <p className="flex items-center text-zinc-400 pl-1">
            <GoDot className="text-yellow-300" />
            Professional Gymbro
          </p>
          <p className="flex items-center text-zinc-400 pl-1">
            <GoDot className="text-rose-600" />
            Car Enthusiast
          </p>
        </div>
      </section>

      <section className="grid gap-8 pt-12">
        <p className="text-lg">
          Dette er en test portofolie side hvor jeg bl.a tester ut space
          background og tailwind css. Dette er portofolie nr.3 jeg lager.
        </p>
        <p className="text-lg">
          Lager denne portofølien fordi læreren min Joakim ba meg om det.. og
          jeg lærer jo mye nytt da.
        </p>
        <p className="text-lg">
          Har alltid hatt interesse for data. Mest gaming, men det skyldes bare
          fordi jeg ikke har blitt ordentlig introdusert til koding. Jeg var han
          som kalte det hacking, hver gang jeg så noe som lignet kode.
        </p>
        <p className="text-lg">Dette er kode språkene jeg har lært sålangt:</p>
        <SkillsBar />
      </section>

      <section>
        <Projects />
      </section>
      <section>
        <AboutMe />
      </section>
    </>
  );
}
