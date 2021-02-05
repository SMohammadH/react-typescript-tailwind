interface Props {
  Img: any;
  imgSize: number;
  imgColor: string;
  imgBack: string;
  header: string;
}

export const Card: React.FC<Props> = ({
  Img,
  imgSize,
  imgColor,
  imgBack,
  header,
}) => {
  return (
    <div className="relative py-1 max-w-xs sm:mx-auto ">
      <div
        className={`absolute mb-10 ml-5 inset-0 bg-gradient-to-r from-${imgBack}-400 to-${imgBack}-200 dark:to-${imgBack}-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl`}
      ></div>
      <div className="relative py-7 px-2 md:mb-0 flex flex-col ">
        <div className="rounded-3xl bg-primary text-primary px-4 py-8 mr-2 transform translate-x-6 -translate-y-6  ">
          <div
            className={` inline-flex w-12 h-12 rounded-full items-center justify-center bg-${imgBack}-100 text-${imgColor} mb-4 flex-shrink-0 p-2`}
          >
            <Img className={`w-${imgSize} h-${imgSize}`} />
            {/* className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              ></path>
            </Img> */}
          </div>
          <div className="flex-grow ">
            <h2 className="text-primary text-xl title-font font-medium mb-3">
              {header}
            </h2>
            <p className="leading-relaxed text-sm text-justify">
              Donner du goût 😍 de la couleur aux applications, je le fais afin
              de rendre vos sites attrayants 🎨. Avant de devenir webdesigner,
              depuis tout petit j'étais déjà familier à la couleur et du dessin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
