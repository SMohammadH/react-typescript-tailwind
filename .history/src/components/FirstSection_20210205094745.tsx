import { useContext } from 'react';
import { ThemeContext } from './../dark-mode/themeContext';
import Proud from '../svg/proud.svg';
import Dark from '../svg/dark.svg';

export const FirstSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="bg-primary text-primary">
      <div className=" flex flex-col justify-between space-x-20 p-10 pt-20 md:pt-40 max-w-screen-xl mx-auto md:flex-row">
        <div className="self-center md:pb-20 md:mb-20 space-y-2">
          <h3 className="text-xl">Hi, I'm Mohammad Hashemi</h3>
          <h1 className="text-5xl text-accent">Front-End Dev.</h1>
          <h2 className="text-medium">
            By Using React, Typescript, Tailwind ...
          </h2>
          <button className="btn">Read More!</button>
        </div>
        <div>
          {theme === 'light' ? (
            <img alt="proud" src={Proud} />
          ) : (
            <img alt="dark" src={Dark} />
          )}
        </div>
      </div>
    </div>
  );
};
