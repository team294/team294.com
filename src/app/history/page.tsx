"use client";

import { client } from "../../../tina/__generated__/client";
import { useState } from "react";

import Intro from "./Intro";

export default function About() {
  const [retrieved, setRetrieved] = useState(false);

  const [intro, setIntro] = useState({ title: "", body: "", banners: [] });

  const retrieveContent = async () => {
    let content: any = null;
    try {
      content = await client?.queries?.history({ relativePath: "history.md" });
      content = content.data.history;
      if (content.intro) setIntro(content.intro);
      setRetrieved(true);
    } catch {
      console.log("Failed to fetch.");
    }
  };

  if (!retrieved) retrieveContent();

  return (
    <div id="about" className="flex flex-col items-center w-full">
      <Intro content={intro} />
    </div>
  );
}
