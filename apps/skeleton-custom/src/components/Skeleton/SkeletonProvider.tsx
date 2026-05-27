import { type ReactNode } from "react";

import { SkeletonContext } from "./context";

export function SkeletonProvider({ children, isLoading }: { children: ReactNode; isLoading: boolean }) {
  return <SkeletonContext.Provider value={isLoading}>{children}</SkeletonContext.Provider>;
}
