import { Link } from "react-router-dom";

export default function Header() {
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="flex justify-end pt-10 px-6 md:px-86 gap-10
      text-2xl">
        <Link to="/">
          <button className="flex hover:scale-105 cursor-pointer">home</button>
        </Link>

        <button
          onClick={scrollToFooter}
          className="flex hover:scale-105 cursor-pointer">
          socials
        </button>
        <Link to="/projects">
          <button className="flex hover:scale-105 cursor-pointer">
            projects
          </button>
        </Link>

        <button className="flex hover:scale-105 cursor-pointer">
          about me
        </button>
      </div>
    </>
  );
}
