import Img from '../img/main.jpg';

export const Header = () => {
  return (
    <div className="h-5/6">
      <div
        className="text-center w-full bg-cover bg-fixed relative overflow-hidden"
        style={{
          backgroundImage: `url(${Img})`,
          borderRadius: '0 0 85% 85% / 30%',
        }}
      >
        <div className="w-full p-10 text-secondary shadow-md bg-gradient-to-b  to-gray-600 from-transparent">
          <h1>Simply The Best</h1>
          <h3>Reasons for Choosing US</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum quis, odio veniam itaque ullam debitis qui magnam
            consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis
            qui magnam consequatur ab.
          </p>
          <br />
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};
