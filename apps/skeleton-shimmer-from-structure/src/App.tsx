import { Card } from "@components/Card/Card";
import { useState } from "react";

export function App() {
  const [, setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoading(currentIsLoading => !currentIsLoading)}>Toggle loading</button>
      <Card />
    </div>
  );
}
