import React from "react";
import { NavLink, Route } from "react-router-dom";
import Settings from "./Settings";
import Latest from "./Latest";
import Search from "./Search";

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
      <Route path="/" exact component={Latest} />
      <Route path="/search" component={Search} />
      <Route path="/shows" render={props => <p>shows</p>} />
      <Route path="/watchlist" render={props => <p>watchlist</p>} />
      <Route path="/settings" component={Settings} />
    </>
  );
};

export default PageWithNav;
