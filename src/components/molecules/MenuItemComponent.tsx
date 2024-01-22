import IconCaretDown from '@icon/IconCaretDown';
import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { NavLink } from 'react-router-dom';

interface SubMenuItem {
  label: string;
  url: string;
}

interface MenuItemConfig {
  title: string;
  icon?: any;
  subMenuItems?: SubMenuItem[];
  directRoute?: string;
}

const MenuItemComponent: React.FC<{ config: MenuItemConfig }> = ({ config }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const { title, icon, subMenuItems, directRoute } = config;

  const renderSubMenu = () => {
    return (
      <>
        <AnimateHeight duration={300} height={isSubMenuOpen ? 'auto' : 0}>
          <ul className="text-gray-500 sub-menu">
            {subMenuItems &&
              subMenuItems.map((subMenuItem, index) => (
                <li key={index}>
                  <NavLink to={subMenuItem.url}>{subMenuItem.label}</NavLink>
                </li>
              ))}
          </ul>
        </AnimateHeight>
      </>
    );
  };

  return (
    <li className={directRoute ? 'nav-item' : 'menu nav-item'}>
      {directRoute ? (
        <NavLink to={directRoute} className={`nav-link group w-full ${isSubMenuOpen ? 'active' : ''}`}>
          <div className="flex items-center">
            {icon} {/* Render the icon component */}
            <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{title}</span>
          </div>
        </NavLink>
      ) : (
        <>
          <button type="button" className={`nav-link group w-full ${isSubMenuOpen ? 'active' : ''}`} onClick={toggleSubMenu}>
            <div className="flex items-center">
              {icon} {/* Render the icon component */}
              <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{title}</span>
            </div>

            {subMenuItems && (
              <div className={!isSubMenuOpen ? 'rtl:rotate-90 -rotate-90' : ''}>
                <IconCaretDown />
              </div>
            )}
          </button>
          {renderSubMenu()}
        </>
      )}
    </li>
  );
};

export default MenuItemComponent;
