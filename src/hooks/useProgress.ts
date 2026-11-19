import { useCallback, useEffect, useState } from "react";

const KEY = "clipblox-learning-progress-v1";

function read(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

/** Lesson completion, persisted on the visitor's own device (localStorage). */
export function useProgress() {
  const [done, setDone] = useState<string[]>(read);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(done));
    } catch {
      /* storage unavailable — progress just won't persist */
    }
  }, [done]);

  const isDone = useCallback((id: string) => done.includes(id), [done]);
  const toggle = useCallback(
    (id: string) =>
      setDone((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    []
  );
  const markDone = useCallback(
    (id: string) => setDone((prev) => (prev.includes(id) ? prev : [...prev, id])),
    []
  );
  const reset = useCallback(() => setDone([]), []);

  return { done, isDone, toggle, markDone, reset };
}
