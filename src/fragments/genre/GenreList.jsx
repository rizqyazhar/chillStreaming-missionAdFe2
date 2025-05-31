const GenreList = ({ width }) => {
  return (
    <div
      className={`w-[${width}] bg-paperBackground grid grid-cols-[repeat(2,minmax(176px,392px))] md:grid-cols-[repeat(2,minmax(196px,392px))] rounded-lg absolute top-10 -left-36 md:left-0 md:top-11 font-medium text-sm font-lato z-10`}>
      <a
        href=''
        className='px-3 py-2 hover:bg-extraBackground hover:rounded-tl-lg'>
        Aksi
      </a>
      <a
        href=''
        className='px-3 py-2 hover:bg-extraBackground hover:rounded-tr-lg'>
        Anak-anak
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Anime
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Britania
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Drama
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Fantasi Ilmiah & Fantasi
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Kejahatan
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        KDrama
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Komedi
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Petualangan
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Perang
      </a>
      <a href='' className='px-3 py-2 hover:bg-extraBackground'>
        Romantis
      </a>
      <a
        href=''
        className='px-3 py-2 hover:bg-extraBackground hover:rounded-bl-lg'>
        Sains & Alam
      </a>
      <a
        href=''
        className='px-3 py-2 hover:bg-extraBackground hover:rounded-br-lg'>
        Thriller
      </a>
    </div>
  );
};

export default GenreList;
