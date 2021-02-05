import { Card } from './Card';
import { FaSass } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux, SiReact } from 'react-icons/si';
import { BiLink } from 'react-icons/bi';

const text = [
  {
    react: `React 17 is used on this website with it's great features such as Hooks.`,
  },
  { redux: 'sdfsdf' },
  { typescript: 'sdfsdf' },
  { reactRouter: 'sdfsdf' },
  { tailwind: 'sdfsdf' },
  { sass: 'sdfsdf' },
];
console.log(text[0].react);

export const SecondSection = () => {
  return (
    <div className="bg-secondary text-secondary">
      <div className="max-w-screen-xl mx-auto px-5 py-24">
        <div className="text-center mb-20">
          <h1 className="text-accent mb-4 text-4xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Technologies That I am using currently on this website are listed
            below with details.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <Card
            Img={SiReact}
            imgSize={10}
            header="React"
            imgColor="blue-600"
            imgBack="blue"
            text={text[0].react}
          />
          <Card
            Img={SiRedux}
            imgSize={10}
            header="Redux"
            imgColor="purple-500"
            imgBack="purple"
            text={text[0].redux}
          />
          <Card
            Img={SiTypescript}
            imgSize={7}
            header="Typescript"
            imgColor="blue-700"
            imgBack="blue"
            text={text[0].typescript}
          />

          <Card
            Img={BiLink}
            imgSize={10}
            header="React-Router"
            imgColor="red-600"
            imgBack="red"
            text={text[0].reactRouter}
          />
          <Card
            Img={SiTailwindcss}
            imgSize={10}
            header="Tailwind"
            imgColor="green-500"
            imgBack="green"
            text={text[0].tailwind}
          />

          <Card
            Img={FaSass}
            imgSize={10}
            header="Sass"
            imgColor="pink-600"
            imgBack="pink"
            text={text[0].sass}
          />
        </div>
      </div>
    </div>
  );
};
