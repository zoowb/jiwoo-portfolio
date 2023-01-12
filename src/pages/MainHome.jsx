import React from "react";
import "./MainHome.css";

const MainHome = () => {
  let now = new Date();
  const monthText = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = monthText[now.getMonth() + 1] + " ";
  let date = now.getDate();
  const weekText = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let week = weekText[now.getDay()] + " ";
  let hours = now.getHours();
  let minutes = now.getMinutes();

  return (
    <div className="background">
      <header className="mainHeader">
        <strong className="title">JIWOO CHOI</strong>
        <span className="datetime">
          <span className="date">{week + month + date}</span>
          <span>{hours + ":" + minutes}</span>
        </span>
      </header>
    </div>
  );
};

export default MainHome;
