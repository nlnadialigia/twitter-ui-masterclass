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
import twitterLogo from "../assets/logo-twitter.svg";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />
      <nav className="main-navigation">
        <a href="#" className="active">
          <House weight="fill" />
          Home
        </a>
        <a href="#">
          <Hash />
          Explorer
        </a>
        <a href="#">
          <Bell />
          Notifications
        </a>
        <a href="#">
          <EnvelopeSimple />
          Messages
        </a>
        <a href="#">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="#">
          <FileText />
          Lists
        </a>
        <a href="#">
          <User />
          Profile
        </a>
        <a href="#">
          <DotsThreeCircle />
          More
        </a>
      </nav>
      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
}
