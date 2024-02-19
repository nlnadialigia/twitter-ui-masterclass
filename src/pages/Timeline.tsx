import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

let newTweet = "";

export function Timeline() {
  const [tweets, setTweets] = useState(["A", "B", "C"]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([...tweets, newTweet]);
  }

  return (
    <main className="timeLine">
      <Header title="Home" />

      <form className="new-tweet-form" onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img src="https://github.com/nlnadialigia.png" alt="Nadia Ligia" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            onChange={(event) => {
              newTweet = event.target.value;
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}
