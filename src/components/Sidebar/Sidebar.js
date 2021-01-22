import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as s from "./Sidebar.styles";

const Sidebar = (props) => {
  const { userImage = "", userName = "", menuItems = [] } = props;

  // --------->>>>>>>>> States Define Starts Here <<<<<<<<<-------
  const [selected, setSelectedMenuItem] = useState(menuItems[0].title);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [subMenuItemsState, setSubmenus] = useState({});
  // --------->>>>>>>>> States Define Ends Here <<<<<<<<<-------

  // --------->>>>>>>>> Effect Starts Here <<<<<<<<<-------
  //........ Update for Sidebar State .........
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280 && isSidebarOpen) setSidebarState(false);
      else setSidebarState(true);
    };
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);

  //........ Add Index of Menu Items that contain Sub Menu State .........
  useEffect(() => {
    const newSubmenus = {};
    menuItems.forEach((item, index) => {
      const hasSubmenus = !!item.subMenuItems;

      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]["isOpen"] = false;
        newSubmenus[index]["isSelected"] = null;
      }
    });
    setSubmenus(newSubmenus);
  }, [menuItems]);

  // --------->>>>>>>>> Event Handler Function <<<<<<<<<-------
  const handelMenuItemClick = (title, index) => {
    setSelectedMenuItem(title);

    const subMenuItemsStateCopy = JSON.parse(JSON.stringify(subMenuItemsState));
    if (subMenuItemsState.hasOwnProperty(index)) {
      subMenuItemsStateCopy[index]["isOpen"] = !subMenuItemsStateCopy[index][
        "isOpen"
      ];
      setSubmenus(subMenuItemsStateCopy);
    }
    else {
      for (let item in subMenuItemsState) {
        subMenuItemsStateCopy[item]['isOpen'] = false;
        subMenuItemsStateCopy[item]['isSelected'] = null;
      }
    }
    setSubmenus(subMenuItemsStateCopy);

  };
  // --------->>>>>>>>> Effect Ends Here <<<<<<<<<-------

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.title;
    const hasSubmenus = !!item.subMenuItems;
    const isOpen = subMenuItemsState[index]?.isOpen;

    const handelSubMenuItemClick = (menuItemIndex, subMenuItemIndex) => {
      const subMenuItemsStateCopy = JSON.parse(JSON.stringify(subMenuItemsState));
      subMenuItemsStateCopy[menuItemIndex]['isSelected'] = subMenuItemIndex;
      setSubmenus(subMenuItemsStateCopy);
    };

    const subMenusJSX =
      hasSubmenus &&
      item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {

        const isSubMenuItemSelected = subMenuItemsState[index]?.isSelected === subMenuItemIndex;

        return (
          <s.SubMenuItem
            key={subMenuItemIndex}
            onClick={() => handelSubMenuItemClick(index, subMenuItemIndex)}
            selected = {isSubMenuItemSelected}
          >
            <s.SubIcon isSidebarOpen={isSidebarOpen}>
              {subMenuItem.icon}
            </s.SubIcon>
            <s.SubTitle isSidebarOpen={isSidebarOpen}>
              {subMenuItem.title}
            </s.SubTitle>
          </s.SubMenuItem>
        );
      });

    return (
      <s.ItemContainer key={index}>
        <s.MenuItem
          selected={isItemSelected}
          onClick={() => handelMenuItemClick(item.title, index)}
          isSidebarOpen={isSidebarOpen}
          isOpen={isOpen}
        >
          <s.TitleIconDropdown>
            <s.Icon isSidebarOpen={isSidebarOpen}>{item.icon}</s.Icon>
            <s.Title isSidebarOpen={isSidebarOpen}>{item.title}</s.Title>
            {hasSubmenus && isSidebarOpen && (
              <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} />
            )}
          </s.TitleIconDropdown>
        </s.MenuItem>

        {/* Display SubMenu Items if Exist */}
        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -90 }}
            >
              <s.SubMenuItemsContainer>{subMenusJSX}</s.SubMenuItemsContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    );
  });

  return (
    <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
      {/* User Panel Starts here */}
      <s.UserPanel>
        <s.ImageArea>
          <s.UserImage userImage={userImage}></s.UserImage>
        </s.ImageArea>
        <s.UserInfo isSidebarOpen={isSidebarOpen}>
          <s.UserName>{userName}</s.UserName>
        </s.UserInfo>
      </s.UserPanel>
      {/* User Panel End here */}

      {/* Menu Item Starts from here */}
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      {/* Menu Item Ends from here */}

      {/* Toggler Container Starts Here */}
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler></s.Toggler>
      </s.TogglerContainer>
      {/* Toggler Container Ends Here */}
    </s.SidebarContainer>
  );
};

export default Sidebar;
