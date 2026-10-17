import  { useState } from "react";
import Card from "./Card";
const people = [
  {
    id: 1,
    name: "Alice",
    image: "https://i.pravatar.cc/100?img=1",
    role: "Instructor",
    isOnline: true,
    courses: 3,
  },
  {
    id: 2,
    name: "Bob",
    image: "https://i.pravatar.cc/100?img=2",
    role: "Student",
    isOnline: false,
    courses: 0,
  },
  {
    id: 3,
    name: "Charlie",
    image: "https://i.pravatar.cc/100?img=3",
    role: "Student",
    isOnline: true,
    courses: 1,
  },
  { id: 4, name: "David", role: "Instructor", isOnline: false, courses: 2 },
  { id: 5, name: "Eve", role: "Student", isOnline: true, courses: 0 },
];

const App = () => {   
  const onlineCount = people.filter((person) => person.isOnline).length;
  console.log("Online Count:", onlineCount);
  const [following, setFollowing] = useState([]);   // follow kora manusher id er list

const toggleFollow = (id) => {
    if (following.includes(id)) {
      setFollowing(following.filter((followedId) => followedId !== id));
    } else {
      setFollowing([...following, id]);
    }
}
  return (
    <div>
      <h1 className="text-4xl text-center  bg-blue-500 text-white p-4">
        Practice Hub Self Learning Platform
      </h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        Watch active videos and practice your skills!
      </p>

      {onlineCount > 0 && (
        <p className="text-lg text-center text-green-500 mt-2">
          {onlineCount} {onlineCount === 1 ? "person is" : "people are"} online
        </p>
      )}
      <div className="flex flex-wrap justify-center">
        {people.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            image={person.image}
            role={person.role}
            isOnline={person.isOnline}
            courses={person.courses}
            isFollowing={following.includes(person.id)}
            onToggoleFollow={()=>toggleFollow(following)}
          />
        ))}</div>
      </div>
  
  );
};

export default App;
