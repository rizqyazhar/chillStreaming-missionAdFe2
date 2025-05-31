import { createContext, useState, useEffect } from "react";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [addSelectedMovie, setAddSelectedMovie] = useState(null);
  const [movieLists, setMovieLists] = useState([]);
  const [openPopup, setPopup] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageAfterMovieAdded, setMessageAfterMovieAdded] = useState(null);

  const handleOpenPopup = (movie) => {
    setSelectedMovie(movie);
    setAddSelectedMovie(movie);
    setPopup((prev) => !prev);
  };

  const handleClosePopup = () => {
    setPopup((prev) => !prev);
  };

  useEffect(() => {
    const savedMovies = localStorage.getItem("movieLists");
    if (savedMovies) {
      setMovieLists(JSON.parse(savedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movieLists", JSON.stringify(movieLists));
  }, [movieLists]);

  const handleAddBtn = () => {
    const isMovieAdded = movieLists.some((m) => m.id === addSelectedMovie.id);
    if (!isMovieAdded) {
      setMovieLists((prev) => [...prev, addSelectedMovie]);
      setMessageAfterMovieAdded(true);
    } else {
      setMessageAfterMovieAdded(false);
    }
    timer();
  };

  const timer = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 1000);
  };

  return (
    <ListContext.Provider
      value={{
        openPopup,
        setPopup,
        selectedMovie,
        handleOpenPopup,
        handleClosePopup,
        handleAddBtn,
        movieLists,
        setMovieLists,
        message,
        timer,
        messageAfterMovieAdded,
        setMessageAfterMovieAdded,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, ListProvider };
