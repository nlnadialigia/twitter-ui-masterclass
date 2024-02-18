import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";

const answers = ["Concordo", "Olha, faz sentido", "Parabéns pelo progresso"];
const originalTweet =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim quis doloremque veritatis minima, id illo inventore cum fugit magnam. Dolorum illum eos, pariatur placeat nam libero eum inventore perferendis.";

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content={originalTweet} />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/nlnadialigia.png" alt="Nadia Ligia" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}
