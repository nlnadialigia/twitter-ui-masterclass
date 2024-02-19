import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  EnvelopeSimple,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import twitterLogo from "../assets/logo-twitter.svg";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />
      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/explorer">
          <Hash />
          <span>Explorer</span>
        </NavLink>
        <NavLink to="/notifications">
          <Bell />
          <span>Notifications</span>
        </NavLink>
        <NavLink to="/messages">
          <EnvelopeSimple />
          <span>Messages</span>
        </NavLink>
        <NavLink to="/bookmarks">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/lists">
          <FileText />
          <span>Lists</span>
        </NavLink>
        <NavLink to="/profile">
          <User />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/more">
          <DotsThreeCircle />
          <span>More</span>
        </NavLink>
      </nav>
      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
