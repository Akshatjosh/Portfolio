import { IoMdHome } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";

const navbar_items = [
  { icon: <IoMdHome />, name: "Home", path: "#home" },
  { icon: <CiUser />, name: "About", path: "#about" },
  { icon: <GrTechnology />, name: "Skills", path: "#skills" },
  { icon: <FaProjectDiagram />, name: "Projects", path: "#projects" },
  { icon: <FaRegMessage />, name: "Messages", path: "#contact" },
];

function Navbar() {
  return (
    <div className="fixed top-0 right-0 min-h-screen flex flex-col justify-center items-center p-4 z-20">
      <div className="flex flex-col justify-center items-center gap-4 bg-transparent p-4 rounded-full border-2 border-white">
        {navbar_items.map((item, index) => (
          <a
            key={index}
            href={item.path} // Use the anchor path
            className="relative group cursor-pointer"
          >
            <div className="text-xl text-white hover:bg-lime-500 p-2 rounded-full flex items-center">
              {item.icon}
              <span className="absolute right-full mr-2 -translate-y-1/2 hidden group-hover:block text-white text-xs p-1 rounded bg-transparent mb-0">
                {item.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
