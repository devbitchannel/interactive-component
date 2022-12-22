import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { RatingCard } from "./components/widgets";

function App() {
  return (
    <main className="bg-neutral-very-dark-blue w-screen h-screen grid place-content-center">
      <RatingCard />
    </main>
  );
}

export default App;
