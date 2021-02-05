import { useEffect } from 'react';

import Proud from '../svg/proud.svg';
import Dark from '../svg/dark.svg';

export const FirstSection = () => {
  useEffect(() => {
    window.document.documentElement.className === 'light' ? (
      <img src={Proud} alt="" />
    ) : (
      <img src={Dark} alt="" />
    );
  }, []);
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
          {window.document.documentElement.className === 'light' ? (
            <img src={Proud} alt="" />
          ) : (
            <img src={Dark} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};
