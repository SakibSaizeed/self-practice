const Avatar = ({ image,name }) => {
    if (!image) {
        return (
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mt-4 flex items-center justify-center">
{name.charAt(0).toUpperCase()}
            </div>
        );
    }
    
  return (
    <>
      <img
        src={image}
        alt="cat"
        className="w-32 h-32 rounded-full mx-auto mt-4"
      />
    </>
  );
};

export default Avatar;
