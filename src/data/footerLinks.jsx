import {
  IconHome,
  IconUser,
  IconSettings,
  IconBell,
  IconMessage,
  IconSearch,
} from "@tabler/icons-react";
import { FaSnapchat } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const footerItems = [
  {
    title: "Snapchat",
    icon: (
      <FaSnapchat
        className="hover:text-yellow-300"
        size={20}
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
    // target: "_blank",
    // rel: "noopener noreferrer",
    href: "https://snapchat.com/t/cr6CaOt7",
  },
  {
    title: "Profile",
    icon: <FaInstagram className="hover:text-pink-500" size={20} />,
    href: "http://www.instagram.com/josteinwestrum",
  },
  {
    title: "Tiktok",
    icon: <FaTiktok size={20} />,
    href: "https://www.tiktok.com/@josteinwestrum",
  },
  {
    title: "Twitch",
    icon: <FaTwitch className="hover:text-[#9046fc]" size={20} />,
    href: "https://www.twitch.tv/josteinwestrum",
  },
  {
    title: "Github",
    icon: <FaGithub size={20} />,
    href: "https://github.com/Jostein24sfj",
  },
  {
    title: "Location",
    icon: <IoLocationOutline className="hover:text-[#1973e9]" size={20} />,
    href: "https://www.google.no/maps/place/Sandefjord/@59.1383346,10.2073827,13z/data=!3m1!4b1!4m6!3m5!1s0x4646c090553a802b:0xc35b51a25c3ce1a2!8m2!3d59.1313095!4d10.2165948!16zL20vMDE4ODMz?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
  },
];
