import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  EnvelopeSimple,
  FileText,
  Hash,
  House,
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
          Home
        </NavLink>
        <NavLink to="">
          <Hash />
          Explorer
        </NavLink>
        <NavLink to="">
          <Bell />
          Notifications
        </NavLink>
        <NavLink to="">
          <EnvelopeSimple />
          Messages
        </NavLink>
        <NavLink to="">
          <BookmarkSimple />
          Bookmarks
        </NavLink>
        <NavLink to="">
          <FileText />
          Lists
        </NavLink>
        <NavLink to="">
          <User />
          Profile
        </NavLink>
        <NavLink to="">
          <DotsThreeCircle />
          More
        </NavLink>
      </nav>
      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
}
