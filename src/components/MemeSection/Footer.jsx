import Navbar from "../navbar/Navbar";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgb(226, 37, 37) 0%, rgb(211, 49, 49) 82.8%)",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Email Section */}
        <h2 className="max-w-full md:max-w-lg mx-auto my-8 text-white text-3xl md:text-4xl font-bold text-center py-4 flex justify-center bg-[#c2000e] rounded-full border-4 border-[#fc3e4b]">
          babyfloof@gmail.com
        </h2>

        {/* Text Section */}
        <h2 className="max-w-full md:max-w-4xl mx-auto text-white mt-8 text-3xl md:text-4xl font-bold text-center py-4 flex justify-center bg-[#c2000e] rounded-full border-4 border-[#fc3e4b]">
          SDKJABDKJBJASBDIADWHIESDLKNASDBMDKAS
        </h2>

        {/* Navbar */}
        <div className="mt-10">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Footer;
