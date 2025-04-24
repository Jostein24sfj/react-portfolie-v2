import { Link } from "react-router-dom";

export default function Header() {
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="flex justify-end items-center py-8 px-4 md:px-86 
      text-2xl">
        <div className="flex gap-4 md:gap-10 max-w-xl">
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
      </div>
    </>
  );
}
