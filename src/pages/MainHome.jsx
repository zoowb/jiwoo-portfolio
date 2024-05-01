import React from "react";
import "./MainHome.css";
import { Folder } from "../components/folder";
import { Memopad } from "../components/memopad";

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
  const weekText = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let month = monthText[now.getMonth() % 12] + " ";
  let date = ("00" + now.getDate()).slice(-2);
  let week = weekText[now.getDay()] + " ";
  let hours = ("00" + now.getHours()).slice(-2);
  let minutes = ("00" + now.getMinutes()).slice(-2);

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
          <Folder title={"(주)민트기술\n인턴"} />
        </section>
        <section className="projects">
          <Folder title={"[2021]백신접종\n예약 사이트"} />
          <Folder title={"[2021]병원동행\n모빌리티 앱"} />
          <Folder title={"[2022]중고 옷\n거래 사이트"} />
        </section>
        <section className="memo">
          <Memopad />
        </section>
      </div>
    </div>
  );
};

export default MainHome;
