import { Card } from "@components/Card/Card";
import { useState } from "react";
import "@aejkatappaja/phantom-ui";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoading(currentIsLoading => !currentIsLoading)}>Toggle loading</button>
      <phantom-ui loading={isLoading} animation="pulse">
        <Card />
      </phantom-ui>
    </div>
  );
}
