import LandscapeCard from "../elements/LandscapeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopUp from "../fragments/Popup";
import Dummydata from "../../Dummydata";
import { NextArrow, PrevArrow } from "../elements/Arrows";
import { useContext } from "react";
import { ListContext } from "../state/ContextState";

const LandscapeCardBox = ({ title }) => {
  const { openPopup, selectedMovie, handleOpenPopup } = useContext(ListContext);

  const randomInitialSlide = () => Math.floor(Math.random() * Dummydata.length);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: randomInitialSlide(),
    nextArrow: <NextArrow isLandscape={true} />,
    prevArrow: <PrevArrow isLandscape={true} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='w-11/12 mx-auto flex flex-col gap-5 md:gap-6 lg:gap-8'>
      <div className='w-full flex justify-start'>
        <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
          {title}
        </h3>
      </div>
      <div className='relative w-full'>
        <Slider {...settings}>
          {Dummydata.map((movie) => (
            <LandscapeCard
              key={movie.id}
              src={movie.img[1]}
              title={movie.title}
              genre={movie.genre}
              age={movie.age}
              eps={movie.eps}
              onClick={() => handleOpenPopup(movie)}
            />
          ))}
        </Slider>
        {selectedMovie && (
          <PopUp
            openPopup={openPopup}
            key={selectedMovie.id}
            title={selectedMovie.title}
            genre={selectedMovie.genre}
            age={selectedMovie.age}
            eps={selectedMovie.episode}
          />
        )}
      </div>
    </div>
  );
};

export default LandscapeCardBox;
