import { Suspense } from "react";
import { connection } from "next/server";

async function Year() {
  // Reading the clock must happen at request time under Cache Components.
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export function CurrentYear() {
  return (
    <Suspense fallback={null}>
      <Year />
    </Suspense>
  );
}
