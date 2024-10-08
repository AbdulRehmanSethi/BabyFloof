import { SlSupport } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { GiEagleHead } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="flex flex-col items-center justify-center max-w-full md:max-w-6xl px-2 md:px-6 py-12 mx-auto md:flex-row">
        <nav className="z-10">
          <ul className="flex flex-row items-center px-6 py-2 text-indigo-100 bg-[#c2000e] rounded-full border-4   border-[#fc3e4b]">
            <li className="p-4 mx-6">
              <Link>
                <FaTelegramPlane size={36} />
              </Link>
            </li>
            <li className="mx-6">
              <Link>
                <FaXTwitter size={36} />
              </Link>
            </li>
            <li className="mx-6">
              <Link>
                <GiEagleHead size={36} />
              </Link>
            </li>
            <li className="mx-6">
              <Link>
                <SlSupport size={36} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
