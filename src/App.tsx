import { useState } from "react";
import "./App.css";

export function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <main className="landing">
      <p className="landing__eyebrow">Welcome</p>
      <h1 className="landing__title">The simplest way to get started with your product</h1>
      <p className="landing__subtitle">
        Discover what it can do for you in just one click.
      </p>
      <button className="landing__button" type="button" onClick={() => setClicked(true)}>
        Click here
      </button>
      <p className="landing__feedback" role="status">
        {clicked ? "Thanks for clicking! We are glad you are here." : ""}
      </p>
    </main>
  );
}
