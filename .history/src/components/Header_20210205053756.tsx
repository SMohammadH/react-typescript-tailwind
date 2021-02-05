import Img from '../img/main.jpg';
export const Header = () => {
  return (
    <div
      className="text-center w-full h-auto bg-cover bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `url(${img})`,
        borderRadius: '0 0 85% 85% / 30%',
      }}
    >
      <div className="w-full h-full p-10 text-secondary shadow-md bg-gradient-to-b from-gray-800 to-gray-600">
        <h1>Simply The Best</h1>
        <h3>Reasons for Choosing US</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum
          quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero
          nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur
          ab.
        </p>
        <br />
        <button>READ MORE</button>
      </div>
    </div>
  );
};
