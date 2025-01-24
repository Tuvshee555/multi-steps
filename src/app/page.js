"use client";

import PageOne from "@/components/PageOne";
import PageTwo from "@/components/pageTwo";
import PageThird from "@/components/PageThird";
import { PageLast } from "@/components/pageLast";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1); // Track the current page

  return (
    <>
      {page === 1 && <PageOne setPage={setPage} />}
      {page === 2 && <PageTwo setPage={setPage} />}
      {page === 3 && <PageThird setPage={setPage} />}
      {page === 4 && <PageLast setPage={setPage} />}

    </>
  );
}
