import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [currentID, setCurrentID] = useState();

  const getUserDetails = async () => {
    const { data: userData } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const { data: imagesData } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos/"
    );

    if (imagesData && userData) {
      userData.map((item, i) => {
        var value = imagesData.filter((x) => x.id === item.id);
        if (value) {
          let final = { ...item, ...value };
          console.log(final, "final");
          setUserData([...userData, final]);
        }
      });
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [currentID]);

  const handleChange = (e) => {
    console.log(e.target.value);
    var data = userData.find((x) => x.id == e.target.value);
    console.log(data);
    setCurrentID(data);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option>Select User</option>
        {userData.map((item, i) => {
          return <option value={item.id}>{item.name}</option>;
        })}
      </select>
      <Carousel data={currentID} />
    </div>
  );
};

export default Home;
