// import './App.css';
// import 'tailwindcss/tailwind.css';
// import { ThemeProvider } from './dark-mode/themeContext';
// import { Navbar } from './components/Navbar';
// import { FirstSection } from './components/FirstSection';
// import { SecondSection } from './components/SecondSection';

const App: React.FC = () => {
  return (
    <div>
      {/* <ThemeProvider>
        <Navbar />
        <FirstSection />
        <SecondSection />
      </ThemeProvider> */}
      <nav className="abbas">
        <div>
          <h1>Abbas haghayeghi</h1>
        </div>
        <div>
          <ul className="abbas2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default App;
