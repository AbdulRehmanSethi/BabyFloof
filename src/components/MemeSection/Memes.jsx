import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Meme from "../../assets/memeImg.png";
import BrandOne from "../../assets/meme-one.jpg";
import BrandTwo from "../../assets/meme-two.jpeg";
import BrandThree from "../../assets/meme-three.jpeg";
import BrandFour from "../../assets/meme-four.jpeg";
import BrandFive from "../../assets/meme-five.jpeg";
import BrandSix from "../../assets/meme-six.jpeg";
import BrandSeven from "../../assets/meme-seven.jpeg";
import BrandEight from "../../assets/meme-nine.jpeg";
import BrandNine from "../../assets/meme-ten.jpeg";

function Memes() {
  const commonSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brands = [
    BrandOne,
    BrandTwo,
    BrandThree,
    BrandFour,
    BrandFive,
    BrandSix,
    BrandSeven,
    BrandEight,
    BrandNine,
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 my-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center pb-4 flex justify-center">
        <img src={Meme} alt="Meme Title" className="w-80 h-auto" />
      </h2>

      <div className="max-w-full mx-auto mt-8">
        <Slider {...commonSettings} className="md:pl-4">
          {brands.map((brand, index) => (
            <div key={index} className="p-2">
              <img
                alt={`Brand ${index + 1}`}
                className="h-40 md:h-60 lg:h-72 w-full object-fill mx-auto border-4 border-gray-200 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
                src={brand}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Memes;
