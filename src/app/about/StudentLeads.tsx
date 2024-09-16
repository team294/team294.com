export const StudentLeads = ({ content }: any) => {
  return (
    <section
      id="student-leads"
      className="flex flex-col items-center justify-center w-full max-w-screen-xl p-12 md:p-20 gap-8 md:gap-12"
    >
      <p className="title">{content.title}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 justify-items-center">
        {content.leads?.map((lead: any) => (
          <div key={lead.role} className="flex flex-row justify-start">
            <p className="body font-bold text-primary">{lead.role}</p>
            <p className="body text-primary">&nbsp;-&nbsp;</p>
            <p className="body text-primary">{lead.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentLeads;
