import { Card } from "@components/Card/Card";
import { SkeletonProvider } from "@components/Skeleton";
import { useState } from "react";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoading(currentIsLoading => !currentIsLoading)}>Toggle loading</button>
      <SkeletonProvider isLoading={isLoading}>
        <Card
          data={
            isLoading
              ? undefined
              : {
                  imageURL: "https://placehold.co/400x225",
                  videoURL: "/shared-assets/videos/flower.webm",
                  header: (
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </>
                  ),
                  paragraph1: "",
                  paragraph2: "",
                }
          }
        />
      </SkeletonProvider>
    </div>
  );
}
