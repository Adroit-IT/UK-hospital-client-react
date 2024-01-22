import menuConfig from '@config/menuConfig';
import IconCaretDown from '@icon/IconCaretDown';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface SubMenuItem {
  label: string;
  url: string;
}

interface MenuItemConfig {
  title: string;
  icon?: any;
  subMenuItems?: SubMenuItem[];
}

const MainMenu: React.FC = () => {
  return (
    <ul className="horizontal-menu hidden py-1.5 font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse bg-white border-t border-[#ebedf2] dark:border-[#191e3a] dark:bg-black text-black dark:text-white-dark">
      {menuConfig.map((menuItem, index) => (
        <MenuItemComponent key={index} config={menuItem} />
      ))}
    </ul>
  );
};

const MenuItemComponent: React.FC<{ config: MenuItemConfig }> = ({ config }) => {
  const [isSubMenuOpen, setSubMenuOpen] = React.useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const { title, icon, subMenuItems } = config;

  return (
    <li className="menu nav-item">
      <button type="button" className={`nav-link group w-full ${isSubMenuOpen ? 'active' : ''}`} onClick={toggleSubMenu}>
        <div className="flex items-center">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{title}</span>
        </div>

        <div className={isSubMenuOpen ? 'rtl:rotate-90 -rotate-90' : ''}>
          <IconCaretDown />
        </div>
      </button>

      {subMenuItems && (
        <ul className="text-gray-500 sub-menu">
          {subMenuItems.map((subMenuItem, index) => (
            <li key={index}>
              <NavLink to={subMenuItem.url}>{subMenuItem.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MainMenu;
