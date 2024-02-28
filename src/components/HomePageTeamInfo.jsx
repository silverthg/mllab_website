import React, { useState, useEffect } from "react";
import "../styles/homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { db } from "../firebase";

const HomePageTeamInfo = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await db.collection("users").get();
        const usersData = usersCollection.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setUsers(usersData);
        console.log(usersData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="overlap-group5">
      <h2 className="lab-title">Коллектив</h2>
      <hr className="line-2" />
      <div className="container-team">
        <Swiper
          spaceBetween={200}
          slidesPerView={10}
          navigation
          pagination={{ clickable: true }}
        >
          {users.map((user) => (
            <SwiperSlide key={user.id}>
              <div>
                <img src={user.photoURL} alt="User Image" />
                <div>
                  <h2>{user.displayName}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageTeamInfo;
