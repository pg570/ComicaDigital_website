import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  let history = useHistory();
  const handleClick = () =>{
    localStorage.removeItem('persist:root')
    history.push("/admin/login");
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">comicadigital</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://lh3.googleusercontent.com/ogw/AOh-ky1JDu1zHwPpt1LCTgYXS1ZBdfBS1Fxh_D5XS8IuYQ=s32-c-mo" alt="" className="topAvatar" />
          <button onClick={handleClick} style={{marginLeft:"10px",border:"none", borderRadius:"10px", backgroundColor:"black",color:"white", cursor:"pointer"}} >Logout</button>
        </div>
      </div>
    </div>
  );
}
