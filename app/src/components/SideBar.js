import React from 'react';
import { Aside, Avatar, IconTab, SideNav } from '../elements';
import dashboard from '../assets/dashboard.svg';
import trophy from '../assets/trophy.svg';
import add from '../assets/add.svg';
import loyalty from '../assets/loyalty.svg';
import badge from '../assets/badge.svg';
import profile from '../assets/profile.jpg';

const SideBar = () => {
  return (
    <Aside className="side-bar">
      <Avatar id="avatar" src={profile} />
      <SideNav>
        <IconTab selected={true} icon={dashboard} />
        <IconTab selected={false} icon={trophy} />
        <IconTab selected={false} icon={add} />
        <IconTab selected={false} icon={loyalty} />
        <IconTab selected={false} icon={badge} />
      </SideNav>
    </Aside>
  );
}

export default SideBar;
