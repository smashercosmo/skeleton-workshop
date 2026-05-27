import { Card } from "@components/Card/Card";
import { Skeleton } from "boneyard-js/react";
import { useState } from "react";

import "./bones/registry";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoading(currentIsLoading => !currentIsLoading)}>Toggle loading</button>
      <Skeleton loading={isLoading} name="card">
        <Card />
      </Skeleton>
    </div>
  );
}
