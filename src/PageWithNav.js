import React from "react";
import { NavLink, Route } from "react-router-dom";
import Settings from "./Settings";
import ListVideos from "./ListVideos";

const PageWithNav = () => {
  return (
    <>
      <div>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <Route path="/" exact component={ListVideos} />
      <Route path="/search" render={props => <p>search</p>} />
      <Route path="/shows" render={props => <p>shows</p>} />
      <Route path="/watchlist" render={props => <p>watchlist</p>} />
      <Route path="/settings" component={Settings} />
    </>
  );
};

export default PageWithNav;
