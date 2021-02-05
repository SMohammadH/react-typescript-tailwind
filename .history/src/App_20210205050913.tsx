import './App.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from './dark-mode/themeContext';
import { Navbar } from './components/Navbar';
import { FirstSection } from './components/FirstSection';
import { SecondSection } from './components/SecondSection';

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <div className="body bg-primary text-primary">
          <FirstSection />
          <svg
            height="100%"
            width="100%"
            id="bg-svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 149.7333333333333,218.66666666666666 299.4666666666666,237.33333333333331 466,223 C 632.5333333333334,208.66666666666669 815.8666666666668,161.33333333333334 981,152 C 1146.1333333333332,142.66666666666666 1293.0666666666666,171.33333333333331 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              stroke-width="0"
              fill="--color-bg-secondary"
              className="transition-all duration-300 ease-in-out delay-150"
            ></path>
          </svg>
          <SecondSection />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
