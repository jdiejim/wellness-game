import React from 'react';
import { Aside, Avatar, IconTab, SideNav } from '../elements';
import dashboard from '../assets/dashboard.svg';
import trophy from '../assets/trophy.svg';
import add from '../assets/add.svg';
import loyalty from '../assets/loyalty.svg';
// import badge from '../assets/badge.svg';
import './styles/SideBar.css';

const SideBar = ({ user: { first_name, last_name, avatar } }) => {
  const name = `${first_name[0]}${last_name[0]}`;

  return (
    <Aside className="side-bar">
      <Avatar id="avatar" color={avatar} size={80} fontSize={2}>
        {name}
      </Avatar>
      <SideNav>
        <IconTab
          className="side-nav-tab"
          to="/dashboard"
          activeClassName="tab-selected"
          icon={dashboard}
        />
        <IconTab
          className="side-nav-tab"
          to="/activities"
          activeClassName="tab-selected"
          icon={add}
        />
        <IconTab
          className="side-nav-tab"
          to="/leaderboards"
          activeClassName="tab-selected"
          icon={trophy}
        />
        <IconTab
          className="side-nav-tab"
          to="/accountability"
          activeClassName="tab-selected"
          icon={loyalty}
        />
        {/* <IconTab
          className="side-nav-tab"
          to="/rewards"
          activeClassName="tab-selected"
          icon={badge}
        /> */}
      </SideNav>
    </Aside>
  );
}

export default SideBar;
