import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ children }) {
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

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const oldCanvas = document.querySelector(".finisher-canvas");
        if (oldCanvas) oldCanvas.remove();
        createHeader();
      }, 300); // vent 300ms etter siste resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
      <main className="pt-12 text-white px-4 mb-12 flex flex-col gap-24 overflow-x-hidden">
        {children}
      </main>
    </>
  );
}
