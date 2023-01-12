import React from "react";
import "./MainHome.css";
import { Folder } from "../components/folder";

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
      <div className="body">
        <section className="info">
          <Folder title={"INTRODUCE"} />
        </section>
        <section className="career">
          <Folder title={"(주)민트기술\n_인턴"} />
        </section>
        <section className="projects">
          <Folder title={"2021_백신접종\n예약 사이트"} />
          <Folder title={"2021_병원동행\n모빌리티 앱"} />
          <Folder title={"2022_중고 옷\n거래 사이트"} />
        </section>
      </div>
    </div>
  );
};

export default MainHome;
