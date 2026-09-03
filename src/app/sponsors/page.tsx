import { client } from "../../../tina/__generated__/client";

import Intro from "./Intro";
import Transition from "./Transition";
import Levels from "./Levels";

export default async function Sponsors() {
  const fallbackIntro = {
    title: "",
    body: "",
    sponsors: {
      large: [],
      medium: [],
      small: [],
      text: [],
    },
  };

  const fallbackTransition = {
    prefix: "",
    title: "",
    contact: {
      link: "",
      title: "",
    },
  };

  const fallbackLevels = {
    title: "",
    levels: [],
  };
  const response = await client.queries.sponsors({ relativePath: "sponsors.md" });
  const content = response.data.sponsors;
  const intro = content.intro ?? fallbackIntro;
  const transition = content.transition ?? fallbackTransition;
  const levels = content.levels ?? fallbackLevels;

  return (
    <div id="sponsors" className="flex flex-col items-center w-full">
      <Intro content={intro} />
      <Transition content={transition} />
      <Levels content={levels} />
    </div>
  );
}
