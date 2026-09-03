import { client } from "../../tina/__generated__/client";

import Intro from "./home/Intro";
import WhoWeAre from "./home/WhoWeAre";
import Countdown from "./home/Countdown";
import Visit from "./Visit";

export default async function Home() {
  const fallbackIntro = {
    prefix: "",
    title: "",
    image: "/media/other/blank.png",
  };

  const fallbackWhoWeAre = {
    title: "",
    body: "",
    buttons: [],
  };

  const fallbackVisit = {
    title: "",
    body: "",
    directionsLink: "",
    mapEmbedUrl: "",
    entranceImage: "/media/other/blank.png",
  };

  const fallbackCountdown = {
    title: "",
    date: "",
  };
  const response = await client.queries.home({ relativePath: "home.md" });
  const content = response.data.home;
  const intro = content.intro ?? fallbackIntro;
  const whoWeAre = content.whoWeAre ?? fallbackWhoWeAre;
  const visit = content.visit ?? fallbackVisit;
  const countdown = content.countdown ?? fallbackCountdown;

  return (
    <div id="home" className="flex flex-col items-center w-full">
      <Intro content={intro} />
      <WhoWeAre content={whoWeAre}>
        <Visit content={visit} className="p-0" showTitle={false} />
      </WhoWeAre>
      {countdown.date && (
        <>
          <div className="bg-primary h-[1px] w-1/2 rounded" />
          <Countdown content={countdown} />
        </>
      )}
    </div>
  );
}
