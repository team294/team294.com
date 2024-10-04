import Image from "next/image";
import mediaUrl from "../MediaUrl";

export const Robots = ({ content }: any) => {
  return (
    <section
      id="robots"
      className="flex flex-col justify-center w-full max-w-screen-xl gap-10 md:gap-16 p-8 md:p-20 !pt-0"
    >
      <div className="flex flex-col gap-8">
        {content.map((robot: any) => (
          <div key={robot.title} className="group flex flex-col gap-2">
            <p className="section-title shadow-lg group-[&:nth-child(odd)]:bg-secondary group-[&:nth-child(even)]:bg-primary">
              {robot.title}
            </p>
            <div className="flex flex-col md:flex-row md:justify-between mr-6 gap-4">
              <div className="flex flex-col gap-3 md:gap-6">
                <div>
                  {robot.awards.map((award: string) => (
                    <p
                      key={award}
                      className={`body mx-4 ${
                        award.includes("Winner") ||
                        award.includes("Einstein") ||
                        award.includes("Dean") ||
                        award.includes("Chairman") ||
                        award.includes("Impact")
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      {award}
                    </p>
                  ))}
                </div>
                <div className="flex flex-row flex-wrap mx-4 gap-4">
                  {robot.results && (
                    <a
                      className="button-text-black button-grey"
                      href={robot.results}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Results
                    </a>
                  )}
                  {robot.code && (
                    <a
                      className="button-text-black button-grey"
                      href={robot.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  )}
                  {robot.cad && (
                    <a
                      className="button-text-black button-grey"
                      href={robot.cad}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CAD
                    </a>
                  )}
                </div>
              </div>
              {robot.image && (
                <Image
                  alt={robot.title}
                  src={mediaUrl(robot.image)}
                  width="1000"
                  height="1000"
                  className="md:w-1/3 h-auto object-cover rounded-xl shadow-lg ml-4"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Robots;
