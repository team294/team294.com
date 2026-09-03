import { client } from "../../../tina/__generated__/client";

import Interest from "./Interest";
import Faq from "./Faq";
import Visit from "../Visit";

export default async function Join() {
  const fallbackVisit = {
    title: "",
    body: "",
    directionsLink: "",
    mapEmbedUrl: "",
    entranceImage: "/media/other/blank.png",
  };
  const response = await client.queries.join({ relativePath: "join.md" });
  const content = response.data.join;
  const interest = content.interest ?? { groups: [] };
  const visit = content.visit ?? fallbackVisit;
  const faq = content.faq ?? { title: "", questions: [] };

  return (
    <div id="join" className="flex flex-col items-center w-full">
      <Interest content={interest} />
      <div className="bg-primary h-[1px] w-1/2 rounded" />
      <Visit content={visit} />
      <Faq content={faq} />
    </div>
  );
}
