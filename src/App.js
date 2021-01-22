import React from 'react';
import * as s from './App.styles';

//Components Import
import Sidebar from './components/Sidebar/Sidebar';
import MainViewContainer from './components/MainView/MainView';
import { userImage, userName, menuItems } from './components/Sidebar/SidebarData';

const App = () => {

  return (
    <s.App>
      <Sidebar userImage={userImage} userName={userName} menuItems={menuItems}/>
      <MainViewContainer />
    </s.App>
  );
}

export default App;
