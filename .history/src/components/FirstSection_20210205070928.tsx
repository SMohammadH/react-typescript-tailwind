import { useState, useEffect } from 'react';

import Proud from '../svg/proud.svg';
import Dark from '../svg/dark.svg';

export const FirstSection = () => {
  let root = window.document.documentElement.className;
  const [theme, setTheme] = useState('');
  useEffect(() => {
    root === 'light' ? setTheme('light') : setTheme('dark');
    console.log(theme);
  }, [root]);
  return (
    <div className="bg-primary text-primary">
      <div className=" flex justify-between  space-x-20 p-10 pt-40 max-w-screen-xl mx-auto md:flex-row">
        <div className="self-center pb-20 mb-20 space-y-2">
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
