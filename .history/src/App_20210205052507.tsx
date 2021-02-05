import './App.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from './dark-mode/themeContext';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { FirstSection } from './components/FirstSection';
import { SecondSection } from './components/SecondSection';

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <div className="body bg-primary text-primary">
          <Header />
          <FirstSection />
          <SecondSection />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
