import { Toggle } from '../dark-mode/toggle';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className="bg-gray-800 text-gray-100  fixed  w-full z-10">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div>
            <h1 className="text-3xl font-gold">
              <button className="focus:outline-none">MH</button>
            </h1>
          </div>

          <div>
            <div>
              <ul className="block py-1 space-x-9 text-lg">
                <li>
                  <button className="hover:text-accent focus:outline-none">
                    Home
                  </button>
                </li>
              </ul>
              <ul>
                <li>
                  <button className="hover:text-accent focus:outline-none">
                    Projects
                  </button>
                </li>
              </ul>
              <ul>
                <li>
                  <button className="hover:text-accent focus:outline-none">
                    About
                  </button>
                </li>
              </ul>
            </div>
            <div className="ml-9 self-center">
              <Toggle />
            </div>
          </div>
          <div className="px-4 cursor-pointer md:hidden">
            <FaBars className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
