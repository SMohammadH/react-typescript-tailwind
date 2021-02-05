import { Toggle } from '../dark-mode/toggle';

export const Navbar = () => {
  return (
    <div className="bg-gray-800 text-gray-100  fixed  w-full z-10">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div>
            <h1 className="text-3xl font-gold">
              <button>MH</button>
            </h1>
          </div>
          <div className="flex">
            <div className="flex space-x-9 text-lg">
              <ul>
                <li>
                  <button className="hover: animate-pulse">Home</button>
                </li>
              </ul>
              <ul>
                <li>
                  <button>Projects</button>
                </li>
              </ul>
              <ul>
                <li>
                  <button>About</button>
                </li>
              </ul>
            </div>
            <div className="ml-9 self-center">
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
