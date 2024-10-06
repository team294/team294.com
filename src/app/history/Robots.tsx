import Image from "next/image";

export const Robots = ({ content }: any) => {
  return (
    <section
      id="robots"
      className="flex flex-col justify-center w-full max-w-screen-xl gap-10 md:gap-16 px-4 py-8 md:py-20 !pt-0"
    >
      <div className="flex flex-col gap-8">
        {content.map((robot: any) => (
          <div key={robot.title} className="group flex flex-col gap-2">
            <p className="section-title shadow-lg group-[&:nth-child(odd)]:bg-secondary group-[&:nth-child(even)]:bg-primary">
              {robot.title}
            </p>
            <div className="flex flex-row justify-between mr-6 gap-4">
              <div className="flex flex-col gap-3 md:gap-6 w-1/2">
                <div className="flex flex-col gap-2">
                  {robot.events.map((event: any) => (
                    <div key={event.title} className="body ml-4">
                      <p>{event.title}</p>
                      {event.results.map((result: string) => (
                        <li
                          key={result}
                          className={`ml-2 ${
                            result.includes("Winner") ||
                            result.includes("Einstein") ||
                            result.includes("Dean") ||
                            result.includes("Chairman") ||
                            result.includes("Impact")
                              ? "font-bold"
                              : ""
                          }`}
                        >
                          {result}
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="hidden md:flex flex-row flex-wrap mx-4 gap-4">
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
              <div className="flex flex-col flex-wrap w-1/2 gap-4">
                <div className="aspect-[4/3] h-fit rounded-xl shadow-lg overflow-hidden">
                  {robot.image && (
                    <Image
                      alt={robot.title}
                      src={robot.image}
                      width="1000"
                      height="1000"
                      className="object-cover h-auto"
                    />
                  )}
                </div>
                <div className="md:hidden flex flex-row flex-wrap gap-4 justify-center">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Robots;
