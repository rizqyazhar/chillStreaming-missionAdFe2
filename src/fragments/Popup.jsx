import { useContext } from "react";
import { ListContext } from "../state/ContextState";
import { IoVolumeMuteSharp } from "react-icons/io5";
import EpisodeList from "../elements/EpisodeList";
import SimilarRecommend from "../elements/SimilarRecommend";
import PopupMessage from "../elements/popupMessage/PopupMessage";
import { useLocation } from "react-router";

const PopUp = ({ id, title, genre, age, eps }) => {
  const {
    openPopup,
    handleClosePopup,
    handleAddBtn,
    message,
    messageAfterMovieAdded,
  } = useContext(ListContext);

  const location = useLocation();
  const searchLocation = () => {
    const seriesLocation = location.pathname === "/series";
    const filmsLocation = location.pathname === "/films";
    if (seriesLocation) {
      return "seriesPage";
    } else if (filmsLocation) {
      return "filmsPage";
    } else {
      return null;
    }
  };
  return (
    <>
      {openPopup && (
        <>
          {message && (
            <PopupMessage
              boolForIcon={messageAfterMovieAdded}
              text={
                messageAfterMovieAdded
                  ? "Successfully added to my list"
                  : "This item is already in your list"
              }
            />
          )}
          <div
            className='
            fixed inset-0 pt-20 z-10 flex justify-center items-start transition-colors visible bg-black/70'>
            <div
              key={id}
              className='relative w-11/12 md:w-1/2 h-11/12 font-lato rounded-tl-sm md:rounded-tl-2xl rounded-tr-sm md:rounded-tr-2xl overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-pageHeaderBackground'>
              <div
                className='relative w-full h-48 md:h-[554px] md:px-16 bg-cover bg-center flex flex-col justify-end items-start md:pb-[106px]'
                style={{
                  backgroundImage: "url(/img/landscape/popupimage.png)",
                }}>
                <div
                  className='absolute top-2 right-2 md:top-5 md:right-5 flex items-center justify-center text-light-secondary text-lg rounded-full p-1 md:p-2 w-4 h-4 md:w-[30px] md:h-[30px] bg-pageHeaderBackground cursor-pointer z-50'
                  onClick={handleClosePopup}>
                  <img
                    src='/img/icon/close-btn.svg'
                    className='w-1.5 h-1.5 md:w-3.5 md:h-3.5'
                  />
                </div>
                <div className='relative w-full z-50 flex flex-col gap-2 md:gap-6 px-5 py-2.5 md:px-0 md:py-0'>
                  <p className='font-bold text-base md:text-[32px] text-white'>
                    {title}
                  </p>
                  <div className='w-full flex justify-between z-30'>
                    <div className='flex gap-2 md:gap-2.5'>
                      <button className='bg-primary-300 text-light-primary font-bold text-xs md:text-base h-6 md:h-11 px-3 py-1 md:px-10 md:py-2.5 rounded-full cursor-pointer'>
                        Mulai
                      </button>
                      <button
                        className='w-6 md:w-11 h-6 md:h-11 border border-light-secondary rounded-full text-light-secondary text-sm md:text-2xl font-bold cursor-pointer hover:bg-paperBackground transition-all'
                        onClick={handleAddBtn}>
                        +
                      </button>
                    </div>
                    <button className='w-6 md:w-11 h-6 md:h-11 rounded-full border border-light-secondary flex justify-center items-center cursor-pointer'>
                      <IoVolumeMuteSharp className='w-3 h-3 md:w-[18px] md:h-[18px] text-light-secondary' />
                    </button>
                  </div>
                </div>
                <div className='absolute inset-0 bg-black/20 z-10'></div>
                <div className='absolute inset-x-0 bottom-0 w-full h-60 bg-linear-to-t from-pageHeaderBackground from-10% to-black/0 to-99%'></div>
              </div>
              <div className='bg-pageHeaderBackground text-light-primary px-5 py-2.5 md:px-16 md:py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2.5'>
                <div className='flex flex-col gap-1'>
                  <div className='flex gap-4 items-center text-light-secondary font-normal'>
                    <p className='text-xs md:text-base'>2020</p>
                    <p className='text-xs md:text-base'>{eps}</p>
                    <p className='text-[8px] md:text-sm w-5 h-5 md:w-10 md:h-10 border border-light-secondary rounded-full flex items-center justify-center'>
                      {age}
                    </p>
                  </div>
                  <p className='text-light-primary font-normal text-xs md:text-base'>
                    Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi
                    ke London untuk mengelola AFC Richmond, tim sepak bola Liga
                    Utama Inggris yang kesulitan.
                  </p>
                </div>
                <table className='md:p-2.5 font-normal text-xs md:text-base w-full'>
                  <tbody>
                    <tr>
                      <th
                        scope='row'
                        className='flex items-start text-start w-28'>
                        Cast
                      </th>
                      <td>
                        <div className='flex gap-1'>
                          :
                          <span>
                            Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick
                            Mohammed, dan lain-lain
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope='row'
                        className='flex items-start text-start w-28'>
                        Genre
                      </th>
                      <td>
                        <div className='flex gap-1'>
                          : <span>{genre}</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope='row'
                        className='flex items-start text-start w-28'>
                        Pembuat Film
                      </th>
                      <td>
                        <div className='flex gap-1'>
                          :<span>Brendan Hunt, Joe Killy, Bill Lawrence</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {searchLocation() === "seriesPage" ||
              searchLocation() === null ? (
                <EpisodeList />
              ) : (
                <SimilarRecommend />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopUp;
