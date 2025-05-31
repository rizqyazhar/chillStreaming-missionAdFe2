import Dummydata from "../../Dummydata";
import PotraitCard from "./PotraitCard";

const SimilarRecommend = () => {
  return (
    <div className='w-full bg-pageHeaderBackground text-light-primary px-5 py-2.5 md:px-16 md:py-6 flex flex-col gap-4 md:gap-7'>
      <h6 className='md:font-bold text-sm md:text-2xl'>Rekomendasi Serupa</h6>
      {
        <div className='w-full grid grid-cols-3 gap-x-2.5 md:gap-x-4 gap-y-5 justify-center'>
          {Dummydata.slice(0, 3).map((movie) => (
            <PotraitCard key={movie.id} src={movie.img[0]} />
          ))}
        </div>
      }
    </div>
  );
};

export default SimilarRecommend;
