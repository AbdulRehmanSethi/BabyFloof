const Button = () => {
  return (
    <div>
      <div className=" my-20 pb-36 flex flex-col items-center justify-center max-w-full md:max-w-6xl px-2 md:px-6 py-12 mx-auto md:flex-row">
        <button className="font-bold px-6 py-4 min-w-[200px] text-center text-white bg-[#c2000e] border border-[#fc3e4b] rounded hover:bg-[#f8424e] hover:text-white focus:outline-none focus:ring">
          Play Game
        </button>
      </div>
    </div>
  );
};

export default Button;
