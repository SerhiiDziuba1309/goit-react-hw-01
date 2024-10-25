import React from "react";
import Profile from "./Profile/Profile.jsx";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList.jsx";

const App = () => {
  return (
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
  );
};
<FriendList />;
export default App;
