"use client";
import { PageOne } from "@/components/PageOne"; // Check the path if necessary
import { PageTwo } from "@/components/pageTwo";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1); // Track the current page

  return (
    <>
      {page === 1 && <PageOne setPage={setPage} page={page} />} {/* Render PageOne */}
      {page === 2 && <PageTwo setPage={setPage} page={page} />} {/* Render PageTwo */}
    </>
  );
}
