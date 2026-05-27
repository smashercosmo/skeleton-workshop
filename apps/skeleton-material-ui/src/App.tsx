import { Card } from "@components/Card/Card";
import { useState } from "react";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoading(currentIsLoading => !currentIsLoading)}>Toggle loading</button>
      <Card isLoading={isLoading} />
    </div>
  );
}
