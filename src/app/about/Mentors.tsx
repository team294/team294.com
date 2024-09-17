import Image from "next/image";
import mediaUrl from "../MediaUrl";

export const Mentors = ({ content }: any) => {
  return (
    <section
      id="mentors"
      className="flex flex-col items-center text-center w-full max-w-screen-xl p-12 md:p-20 gap-8 md:gap-12"
    >
      <p className="title">{content.title}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {content.mentors.map((mentor: any) => (
          <div key={mentor.name}>
            <div className="flex flex-col items-center gap-2">
              <Image
                src={mediaUrl(mentor.image)}
                alt={mentor.name}
                width="100"
                height="100"
                className="h-full w-full rounded-full"
              />
              <div>
                <p className="body font-bold text-primary">{mentor.name}</p>
                <p className="body text-primary">{mentor.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
