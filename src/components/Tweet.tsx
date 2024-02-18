interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

export function Tweet(props: Readonly<TweetProps>) {
  return (
    <div>
      <strong className="">{props.user}</strong>
      <p>{props.children}</p>
      <button>Like {props.likes ?? 0}</button>
    </div>
  );
}
