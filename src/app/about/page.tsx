"use client";

import { client } from "../../../tina/__generated__/client";
import { useState } from "react";

import First from "./First";
import Subteams from "./Subteams";
import Mentors from "./Mentors";
import StudentLeads from "./StudentLeads";
import ParentVolunteers from "./ParentVolunteers";

export default function About() {
  const [retrieved, setRetrieved] = useState(false);

  const [first, setFIRST] = useState({ image: "/media/other/blank.png", body: "" });
  const [subteams, setSubteams] = useState({ title: "", subteams: [] });
  const [mentors, setMentors] = useState({ title: "", mentors: [] });
  const [studentLeads, setStudentLeads] = useState({ title: "", leads: [] });
  const [parentVolunteers, setParentVolunteers] = useState({
    title: "",
    volunteers: [],
  });

  const retrieveContent = async () => {
    let content: any = null;
    try {
      content = await client?.queries?.about({ relativePath: "about.md" });
      content = content.data.about;
      if (content.first) setFIRST(content.first);
      if (content.subteams) setSubteams(content.subteams);
      if (content.mentors) setMentors(content.mentors);
      if (content.studentLeads) setStudentLeads(content.studentLeads);
      if (content.parentVolunteers)
        setParentVolunteers(content.parentVolunteers);
      setRetrieved(true);
    } catch {
      console.log("Failed to fetch.");
    }
  };

  if (!retrieved) retrieveContent();

  return (
    <div id="about" className="flex flex-col items-center w-full">
      <First content={first} />
      <Subteams content={subteams.subteams} />
      <Mentors content={mentors} />
      {/* <StudentLeads content={studentLeads} />
      <ParentVolunteers content={parentVolunteers} /> */}
    </div>
  );
}
