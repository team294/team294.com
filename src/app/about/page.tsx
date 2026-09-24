import { client } from "../../../tina/__generated__/client";

import First from "./First";
import Subteams from "./Subteams";
import Impact from "./Impact";
import Mentors from "./Mentors";
import StudentLeads from "./StudentLeads";
import ParentVolunteers from "./ParentVolunteers";

export default async function About() {
  const response = await client.queries.about({ relativePath: "about.md" });
  const content = response.data.about;
  const first = content.first ?? { image: "/media/other/blank.png", body: "" };
  const subteams = content.subteams ?? { title: "", subteams: [] };
  const impact = (content as any).impact ?? { title: "", mission: "", initiatives: [] };
  const mentors = content.mentors ?? { title: "", mentors: [] };

  return (
    <div id="about" className="flex flex-col items-center w-full">
      <First content={first} />
      <Subteams content={subteams.subteams} />
      <Impact content={impact} />
      <Mentors content={mentors} />
      {/* <StudentLeads content={studentLeads} />
      <ParentVolunteers content={parentVolunteers} /> */}
    </div>
  );
}
