"use client";

import { client } from "../../tina/__generated__/client";
import { useState } from "react";

import Intro from "./home/Intro";
import WhoWeAre from "./home/WhoWeAre";
import Countdown from "./home/Countdown";

export default function Home() {
  const [retrieved, setRetrieved] = useState(false);

  const [intro, setIntro] = useState({
    prefix: "",
    title: "",
    image: "/media/other/blank.png",
  });

  const [whoWeAre, setWhoWeAre] = useState({
    title: "",
    body: "",
    buttons: [],
  });

  const [countdown, setCountdown] = useState({
    title: "",
    date: "",
  });

  const retrieveContent = async () => {
    let content: any = null;
    try {
      content = await client?.queries?.home({ relativePath: "home.md" });
      content = content.data.home;
      if (content.intro) setIntro(content.intro);
      if (content.whoWeAre) setWhoWeAre(content.whoWeAre);
      if (content.countdown) setCountdown(content.countdown);
      setRetrieved(true);
    } catch {
      console.log("Failed to fetch.");
    }
  };

  if (!retrieved) retrieveContent();

  return (
    <div id="home" className="flex flex-col items-center w-full">
      <Intro content={intro} />
      <WhoWeAre content={whoWeAre} />
      <div className="bg-primary h-[1px] w-1/2 rounded" />
      <Countdown content={countdown} />
    </div>
  );
}
