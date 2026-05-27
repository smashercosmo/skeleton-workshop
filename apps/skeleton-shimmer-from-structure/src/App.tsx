import { Card } from "@components/Card/Card";
import { Shimmer } from "@shimmer-from-structure/react";
import { useState } from "react";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoading(currentIsLoading => !currentIsLoading)}>Toggle loading</button>
      <Shimmer loading={isLoading} backgroundColor="rgba(0,0,0,0.05)">
        <Card />
      </Shimmer>
    </div>
  );
}
