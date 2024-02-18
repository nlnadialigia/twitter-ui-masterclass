import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Separator } from "./components/Separator";
import { Sidebar } from "./components/Sidebar";
import { Tweet } from "./components/Tweet";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeLine">
          <Header title="Home" />
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
        </main>

        <Separator />

        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  </React.StrictMode>,
);
