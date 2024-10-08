import MainImage from "../../assets/mainImage.jpg";
// import Button from "../button/Button";
import Footer from "../MemeSection/Footer";
import MemeSection from "../MemeSection/Index";
import Navbar from "../navbar/Navbar";
import ThirdSection from "../ThirdSection/Index";
import CursorAnimation from "./CursorAnimation"; // Import the cursor animation component

const Home = () => {
  return (
    <div className="relative">
      <CursorAnimation />{" "}
      <div
        className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${MainImage})`,
          cursor: "pointer",
        }}
      >
        <div className="absolute inset-0">
          <Navbar />
          {/* <Button /> */}
          <MemeSection />
          <ThirdSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
