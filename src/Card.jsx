import Avatar from "./Avatar";


const Card = ({ name, image, role,isOnline ,courses}) => {

    return (
        <div>   
            <Avatar image={image} name={name} />
            <p className="text-sm text-center text-gray-500 mt-2">
                {isOnline ? "● Online" : ""}
            </p>
            <h2 className="text-2xl text-center mt-4">{name}{role === "Instructor" ?    <span className="bg-blue-500 text-white px-2 py-1 rounded ml-2">⭐Teacher</span> : <span className="bg-gray-500 text-white px-2 py-1 rounded">⭐ Student</span>}</h2>
            <p className="text-lg text-center text-gray-600 mt-2">{role.toUpperCase()}</p>
            {courses > 0 && <p className="text-sm text-center text-gray-500">{courses} courses</p>}
        </div>
    );
};

export default Card;