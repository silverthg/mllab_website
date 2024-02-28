import React from "react";
import "../styles/homepage.css";
import HomePageHeader from "components/HomePageHeader";
import HomePageAboutLab from "components/HomePageAboutLab";
import HomePageProblem from "components/HomePageProblem";
import HomePageTeamInfo from "components/HomePageTeamInfo";
import image4 from "../img/4.png";
import Navigation from "components/Navigation";

const UserHomePage = () => {
  return (
    <div className="container-center-horizontal">
      <div className="homepage">
        <Navigation />
        <div className="main-content">
          <HomePageHeader />
          <HomePageAboutLab />
          <HomePageProblem />
          <HomePageTeamInfo />
          <div
            className="overlap-group"
            style={{ backgroundImage: `url(${image4})` }}
          ></div>
        </div>
        <div className="footerPlaceholder" />
        <footer>
          <p>Многомасштабные модели пониженного порядка 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default UserHomePage;
