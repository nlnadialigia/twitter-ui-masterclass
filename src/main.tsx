import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  EnvelopeSimple,
  FileText,
  Hash,
  House,
  Sparkle,
  User,
} from "@phosphor-icons/react";
import React from "react";
import ReactDOM from "react-dom/client";
import twitterLogo from "./assets/logo-twitter.svg";
import { Tweet } from "./components/Tweet";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="layout">
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
      <div className="content">
        <main className="timeLine">
          <div className="timeline-header">
            Home <Sparkle />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/nlnadialigia.png"
                alt="Nadia Ligia"
              />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>
          <div className="separator" />
        </main>
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  </React.StrictMode>,
);
