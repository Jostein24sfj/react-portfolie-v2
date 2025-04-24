import { Link } from "react-router-dom";

export default function Header() {
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="flex justify-end items-center py-8 px-4 sm:px-12 md:px-24 gap-4 md:gap-10
      text-2xl">
        <Link to="/">
          <button className="text-base md:text-lg flex hover:scale-105 cursor-pointer">
            home
          </button>
        </Link>
        <button
          onClick={scrollToFooter}
          className="text-base md:text-lg flex hover:scale-105 cursor-pointer">
          socials
        </button>
        <Link to="/projects">
          <button className="text-base md:text-lg flex hover:scale-105 cursor-pointer">
            projects
          </button>
        </Link>

        <button className="text-base md:text-lg flex hover:scale-105 cursor-pointer">
          about me
        </button>
      </div>
    </>
  );
}
