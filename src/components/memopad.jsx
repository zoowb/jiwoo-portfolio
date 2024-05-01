import "./memopad.css";
import MoreIcon from "../assets/images/more.svg";
import { useState } from "react";

export const Memopad = () => {
  const [msg, setMsg] = useState(
    `안녕하세요👋\n소통을 통해 창의적인 결과물을\n만들어내는 개발자,\n최지우입니다.\n`
  );

  return (
    <div className="memopad">
      <div className="top">
        <span className="title">memo</span>
        <img className="more" src={MoreIcon} alt={"more"} />
      </div>
      <textarea
        className="bottom"
        spellCheck="false"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      ></textarea>
    </div>
  );
};
