import { client } from "../../../tina/__generated__/client";

import Intro from "./Intro";
import Robots from "./Robots";

export default async function About() {
  const response = await client.queries.history({ relativePath: "history.md" });
  const content = response.data.history;
  const intro = content.intro ?? { title: "", body: "", banners: [] };
  const robots = content.robots ?? [];

  return (
    <div id="about" className="flex flex-col items-center w-full">
      <Intro content={intro} />
      <Robots content={robots} />
    </div>
  );
}
