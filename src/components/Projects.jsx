import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="">
        <h3 className="flex bg-zinc-400/30 w-31 p-1 rounded text-zinc-300">
          Recent Projects
        </h3>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between pt-6 gap-10">
        <div className="flex flex-col w-96 md:w-86 h-74 rounded-xl p-6 bg-gradient-to-b from-black/40 to-zinc-800 from-85% hover:bg-zinc-800 border-zinc-400/20 border-2">
          <img
            className="flex rounded-xl border-zinc-400/20 border-2 opacity-90"
            src="/gymTracker.webp"
            alt="bilde av en gym nettside"
          />
          <a
            className="flex pt-1 font-medium text-2xl cursor-pointer hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gym-tracker-sooty.vercel.app/">
            Gym Tracker
          </a>
          <p className="pt-4">
            En nettside hvor du kan se og følge opp treningen din.
          </p>
        </div>
        <div className="flex flex-col w-96 md:w-86 h-74 rounded-xl p-6 bg-gradient-to-b from-black/40 to-zinc-800 from-85% hover:bg-zinc-800 border-zinc-400/20 border-2">
          <img
            className="flex rounded-xl border-zinc-400/20 border-2 opacity-90"
            src="/onScrollTestPage.png"
            alt="bilde av bil nettsiden"
          />
          <a
            className="flex pt-1 font-medium text-2xl cursor-pointer hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwind-first-test-project.vercel.app/">
            Bmw e36 on scroll
          </a>
          <p className="pt-4">
            En nettside hvor lysene på bilen skrur seg på ved scroll.
          </p>
        </div>
      </section>

      <Link to="/projects">
        <button className="flex justify-center items-center hover:scale-105 cursor-pointer pt-6">
          More Projects{" "}
          <IoIosArrowRoundForward className="flex items-center justify-center text-3xl" />
        </button>
      </Link>
    </>
  );
}
