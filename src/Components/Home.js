import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [currentData, setCurrentData] = useState();

  const getUserDetails = async () => {
    const { data: userData } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const { data: imagesData } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos/"
    );

    if (imagesData && userData) {
      var imagedata = {};
      var array1 = [];
      userData.map((item, i) => {
        var value = imagesData.filter((x) => x.albumId === item.id);
        imagedata["images"] = [...value];
        let final = { ...item, ...imagedata };
        array1.push(final);
      });
    }
    setUserData(array1);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleChange = (e) => {
    var data = userData.find((x) => x.id == e.target.value);
    setCurrentData(data);
  };

  return (
    <div>
      <div className="select">
        <select onChange={handleChange}>
          <option>Select User</option>
          {userData.map((item, i) => {
            return (
              <option key={i} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <Carousel data={currentData?.images} />
    </div>
  );
};

export default Home;
