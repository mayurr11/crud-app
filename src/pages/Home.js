import React, { useState } from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import ProfileContent from '../components/ProfileContent';
import FollowersContent from '../components/FollowersContent';
import FriendsContent from '../components/FriendsContent';
import GalleryContent from '../components/GalleryContent';
import "./Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const userName = "Mayur Chauhan";

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileContent userName={userName}/>;
      case "Followers":
        return <FollowersContent />;
      case "Friends":
        return <FriendsContent />;
      case "Gallery":
        return <GalleryContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <main className='main-body'>
      <Header />
      <Profile userName={userName} ctiveTab={activeTab} setActiveTab={setActiveTab}/>
      <div className='main-content'>
      {renderContent()}
      </div>
    </main>
  )
}

export default Home;