export const ParentVolunteers = ({ content }: any) => {
  return (
    <section
      id="parent-volunteers"
      className="flex flex-col items-center justify-center w-full max-w-screen-xl p-12 md:p-20 gap-8 md:gap-12"
    >
      <p className="title text-center">{content.title}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 justify-items-center">
        {content.volunteers?.map((volunteer: any) => (
          <p key={volunteer.name} className="body text-primary">
            {volunteer.name}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ParentVolunteers;
