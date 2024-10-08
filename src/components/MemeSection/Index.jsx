import SectionDivider from "./SectionDivider";
import Memes from "./Memes";
// import CursorAnimation from "../home/CursorAnimation";

const Index = () => {
  return (
    <div>
      <div className="sm:pt-20 lg:pt-0 md:mt-80">
        {/* <CursorAnimation /> */}
        <SectionDivider />
        <Memes />
      </div>
    </div>
  );
};

export default Index;
