"use client";

import PageOne from "@/components/PageOne";
import PageTwo from "@/components/pageTwo";
import PageThird from "@/components/PageThird";


import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(3); // Track the current page

  return (
    <>
      {page === 1 && <PageOne setPage={setPage} />}
      {page === 2 && <PageTwo setPage={setPage} />}
      {page === 3 && <PageThird setPage={setPage} />}
    </>
  );
}
