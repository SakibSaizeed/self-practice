import Avatar from "./Avatar";
import { useState } from "react";

const Card = ({ name, image, role,isOnline ,courses,}) => {
  const [isFollowing, setIsFollowing] = useState(false);   // shuru te follow kora na
  const [followers, setFollowers] = useState(0);   
  
    const handleFollow = () => {
        if (isFollowing) {
            setIsFollowing(false);
            setFollowers(followers - 1);
        } else {
            setIsFollowing(true);
            setFollowers(followers + 1);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64  justify-center items-center">   
            <Avatar image={image} name={name} />
            <p className="text-sm text-center text-gray-500 mt-2">
                {isOnline ? "● Online" : ""}
            </p>
            <h2 className="text-2xl text-center mt-4">{name}{role === "Instructor" ?    <span className="bg-blue-500 text-white px-2 py-1 rounded ml-2">⭐Teacher</span> : <span className="bg-gray-500 text-white px-2 py-1 rounded">⭐ Student</span>}</h2>
            <p className="text-lg text-center text-gray-600 mt-2">{role.toUpperCase()}</p>
            {courses > 0 && <p className="text-sm text-center text-gray-500">{courses} courses</p>}
                 <p className="text-sm text-center">{followers} followers</p>

           <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300"
    onClick={handleFollow}>
   {isFollowing ? "Unfollow" : "Follow"}
           </button>
           
                   </div>
    );
};

export default Card;