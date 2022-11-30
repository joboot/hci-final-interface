import React from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { 
        SidebarMenuNav,
        SidebarMenuNavLink,
        SidebarMenuNavIcon,
        SidebarMenuSub,
        SidebarMenuSubCollapse,
        SidebarMenuSubToggle,
       } from 'react-bootstrap-sidebar-menu';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <SidebarMenu>
        <SidebarMenuNav>
          Intro
        </SidebarMenuNav>
      </SidebarMenu>
    </div>
  );
};

export default Sidebar;

