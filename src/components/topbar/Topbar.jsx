import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Christian's Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBag'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBag'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://media-exp3.licdn.com/dms/image/C4E03AQEPsaC8q_P3CA/profile-displayphoto-shrink_200_200/0/1597904091976?e=1629936000&v=beta&t=52hiujiIDo5jzU2EXbY3vWitg-nKSHSfVVSxzBqNlLs'
            alt='chris ware'
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}
