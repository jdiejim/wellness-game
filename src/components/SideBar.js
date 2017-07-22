import React from 'react';
import { NavLink } from 'react-router-dom';
import { Aside, Avatar, IconTab, SideNav } from '../elements';
import dashboard from '../assets/dashboard.svg';
import trophy from '../assets/trophy.svg';
import add from '../assets/add.svg';
import loyalty from '../assets/loyalty.svg';
import badge from '../assets/badge.svg';
import profile from '../assets/profile.jpg';

import './styles/SideBar.css';

const SideBar = () => {
  return (
    <Aside className="side-bar">
      <Avatar id="avatar" src={profile} />
      <SideNav>
        <IconTab
          to="/dashboard"
          activeClassName="tab-selected"
          icon={dashboard}
        />
        {/* <IconTab selected={false} icon={trophy} /> */}
        <IconTab
          to="/activities"
          activeClassName="tab-selected"
          icon={add}
        />
        {/* <IconTab selected={false} icon={loyalty} />
        <IconTab selected={false} icon={badge} /> */}
      </SideNav>
    </Aside>
  );
}

export default SideBar;
