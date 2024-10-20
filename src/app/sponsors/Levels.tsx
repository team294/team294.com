"use client";

export const Levels = ({ content }: any) => {
  console.log(content);
  return (
    <section
      id="levels"
      className="flex flex-col items-center text-center w-full max-w-screen-2xl py-12 px-8 md:p-20 gap-8 md:gap-12"
    >
      <p className="title text-secondary">{content.title}</p>
      <div className="flex flex-col flex-wrap w-full max-w-screen-lg justify-center items-center gap-4 md:gap-8 text-left">
        {content.levels.map((level: any) => (
          <div
            key={level.title}
            className="flex flex-col items-start md:items-center justify-center w-full shadow-lg rounded-3xl p-4 md:p-8"
          >
            <div className="flex flex-col items-start justify-center gap-4">
              <div className="flex flex-row items-end justify-start gap-4">
                <p
                  className="title -mb-1 md:-mb-2"
                  style={{ color: level.color ?? "#000000" }}
                >
                  {level.title}
                </p>
                <div
                  className="text-lg lg:text-3xl whitespace-pre-line font-title"
                  style={{ color: level.color ?? "#000000" }}
                >
                  {level.value.split("or")[0]}{" "}
                  {level.value.includes("or") && (
                    <p className="text-xs lg:text-base">
                      or {level.value.split("or")[1]}{" "}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <ul className="list-disc list-outside ml-4 md:ml-6">
                  {level.benefits.map((benefit: any) => (
                    <li key={benefit} className="body">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Levels;
