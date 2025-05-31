const LandscapeBox = ({ src, onClick }) => {
  return (
    <div className='cursor-pointer' onClick={onClick}>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default LandscapeBox;
