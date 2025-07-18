import { useEffect } from "react";

export function useBeforePrint(callback: () => void) {
  useEffect(() => {
    window.addEventListener("beforeprint", callback);
    return () => {
      window.removeEventListener("beforeprint", callback);
    };
  }, [callback]);
}
