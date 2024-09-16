"use client";

import { client } from "../../../tina/__generated__/client";
import { useState } from "react";

import Interest from "./Interest";
import Faq from "./Faq";

export default function Join() {
  const [retrieved, setRetrieved] = useState(false);

  const [interest, setInterest] = useState({
    groups: [],
  });

  const [faq, setFAQ] = useState({
    title: "",
    questions: [],
  });

  const retrieveContent = async () => {
    let content: any = null;
    try {
      content = await client?.queries?.join({ relativePath: "join.md" });
      content = content.data.join;
      if (content.interest) setInterest(content.interest);
      if (content.faq) setFAQ(content.faq);
      setRetrieved(true);
    } catch {
      console.log("Failed to fetch.");
    }
  };

  if (!retrieved) retrieveContent();

  return (
    <div id="join" className="flex flex-col items-center w-full">
      <Interest content={interest} />
      <div className="bg-primary h-[1px] w-1/2 rounded" />
      <Faq content={faq} />
    </div>
  );
}
