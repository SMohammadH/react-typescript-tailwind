export const Header = () => {
  return (
    <div
      className="text-center w-full h-auto bg-cover bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: "url('../img/main.jpg')",
        borderRadius: '0 0 85% 85% / 30%',
      }}
    >
      <div className="w-full h-full p-10 text-secondary shadow-md bg-gradient-to-r from-gray-600 to-red-400"></div>
    </div>
  );
};
