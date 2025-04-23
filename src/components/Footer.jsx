import { FaSnapchat } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <div id="footer" className="w-full">
        <div className="bg-zinc-700/70 p-12 w-full">
          <div className="">
            <div className="flex gap-8 text-5xl">
              <a
                className="hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://snapchat.com/t/cr6CaOt7">
                <FaSnapchat />
              </a>
              <a
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.instagram.com/josteinwestrum">
                <FaInstagram />
              </a>
              <a
                className="hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@josteinwestrum">
                <FaTiktok />
              </a>
              <a
                className="hover:text-[#9046fc]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitch.tv/josteinwestrum">
                <FaTwitch />
              </a>
              <a
                className="hover:text-[#1973e9]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.no/maps/place/Sandefjord/@59.1383346,10.2073827,13z/data=!3m1!4b1!4m6!3m5!1s0x4646c090553a802b:0xc35b51a25c3ce1a2!8m2!3d59.1313095!4d10.2165948!16zL20vMDE4ODMz?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">
                <IoLocationOutline />
              </a>
            </div>
          </div>
          <div className="copyRightText flex justify-center pt-6 pb-6">
            <p>
              &copy; {new Date().getFullYear()} Jostein Westrum. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
