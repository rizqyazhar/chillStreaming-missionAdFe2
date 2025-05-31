import Content from "./Content";
import { useContext } from "react";
import { ListContext } from "../state/ContextState";
import PotraitCard from "../elements/PotraitCard";
import PopupMessage from "../elements/popupMessage/PopupMessage";

const MyList = () => {
  const {
    movieLists,
    setMovieLists,
    timer,
    message,
    messageAfterMovieAdded,
    setMessageAfterMovieAdded,
  } = useContext(ListContext);

  const handleDeleteLists = () => {
    const movieListsLength = movieLists.length > 0;
    setMovieLists([]);
    localStorage.removeItem("movieLists");
    setMessageAfterMovieAdded(movieListsLength);
    timer();
  };

  return (
    <Content>
      <section className='w-11/12 relative flex flex-col mx-auto gap-5 md:gap-8 py-5 md:py-10'>
        {message && (
          <PopupMessage
            boolForIcon={messageAfterMovieAdded}
            text={
              messageAfterMovieAdded
                ? "Your list has been cleared"
                : "There's nothing to clear"
            }
          />
        )}
        <div className='flex justify-between items-center'>
          <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
            Daftar Saya
          </h3>
          <div onClick={handleDeleteLists} className='cursor-pointer'>
            <p className='font-lato font-medium text-xs md:text-lg text-white'>
              Delete All
            </p>
          </div>
        </div>
        <div className='w-full grid grid-cols-4 md:flex md:flex-wrap gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-8'>
          {movieLists.map((movie) => (
            <PotraitCard key={movie.id} src={movie.img[0]} />
          ))}
        </div>
      </section>
    </Content>
  );
};

export default MyList;
