"use client";

import { client } from "../../../tina/__generated__/client";
import { useState } from "react";

import Intro from "./Intro";
import Transition from "./Transition";
import Levels from "./Levels";

export default function Sponsors() {
  const [retrieved, setRetrieved] = useState(false);

  const [intro, setIntro] = useState({
    title: "",
    body: "",
    sponsors: {
      large: [],
      small: [],
      text: [],
    },
  });

  const [transition, setTransition] = useState({
    prefix: "",
    title: "",
    contact: {
      link: "",
      title: "",
    },
  });

  const [levels, setLevels] = useState({
    title: "",
    levels: [],
  });

  const retrieveContent = async () => {
    let content: any = null;
    try {
      content = await client?.queries?.sponsors({
        relativePath: "sponsors.md",
      });
      content = content.data.sponsors;
      if (content.intro) setIntro(content.intro);
      if (content.transition) setTransition(content.transition);
      if (content.levels) setLevels(content.levels);
      setRetrieved(true);
    } catch {
      console.log("Failed to fetch.");
    }
  };

  if (!retrieved) retrieveContent();

  return (
    <div id="sponsors" className="flex flex-col items-center w-full">
      <Intro content={intro} />
      <Transition content={transition} />
      <Levels content={levels} />
    </div>
  );
}
