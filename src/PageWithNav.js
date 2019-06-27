import React from "react";
import { NavLink, Route } from "react-router-dom";
import {
  IoMdSearch,
  IoMdHome,
  IoMdTv,
  IoMdList,
  IoMdSettings
} from "react-icons/io";
import "./PageWithNav.css";
import { ReactComponent as Brand } from "./gb-logo.svg";
import Settings from "./Settings";
import Latest from "./Latest";
import Search from "./Search";
import Shows from "./Shows";
import Show from "./Show";
import Header from "./Header";

const PageWithNav = () => {
  return (
    <>
      <div className="navbar">
        <Brand className="brand" />
        <NavLink to="/search">
          <IoMdSearch />
        </NavLink>
        <NavLink exact to="/">
          <IoMdHome />
        </NavLink>
        <NavLink to="/shows">
          <IoMdTv />
        </NavLink>
        <NavLink to="/watchlist">
          <IoMdList />
        </NavLink>
        <NavLink to="/settings">
          <IoMdSettings />
        </NavLink>
      </div>
      <div className="styled-page">
        <Route
          children={({ location: { pathname } }) => (
            <Header pathname={pathname} />
          )}
        />
        <Route path="/" exact component={Latest} />
        <Route path="/search" component={Search} />
        <Route path="/shows" component={Shows} />
        <Route path="/watchlist" render={props => <p>watchlist</p>} />
        <Route path="/settings" component={Settings} />
        <Route path="/show/:id" component={Show} />
      </div>
    </>
  );
};

export default PageWithNav;
