import SampleVideo from "../../assets/BabyFloof.mp4"; // Update with your actual video path

const Index = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4  sm:px-6 lg:px-8 ">
        <div className="relative w-full h-auto">
          <video
            className="w-full h-full rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={SampleVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Index;
