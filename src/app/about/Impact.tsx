const Impact = ({ content }: any) => {
  return (
    <section
      id="impact"
      className="w-full px-6 py-12 text-primary md:px-20 md:py-20"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 md:gap-12">
        <p className="title text-center">{content.title}</p>

        <div className="flex flex-col gap-3">
          <div className="body flex flex-col gap-4 text-justify md:text-left">
            {content.mission?.split(/\n+/).map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid gap-6 md:grid-cols-2">
            {content.initiatives?.map((initiative: any) => (
              <article key={initiative.title} className="rounded-3xl bg-white p-6 text-primary shadow-lg md:p-8">
                <h3 className="title text-2xl lg:text-3xl">{initiative.title}</h3>
                <p className="body mt-3 text-justify md:text-left">
                  {initiative.link ? (
                    <>
                      {initiative.body.split("The Friendship Foundation")[0]}
                      <a
                        href={initiative.link}
                        className="underline decoration-2 underline-offset-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        The Friendship Foundation
                      </a>
                      {initiative.body.split("The Friendship Foundation")[1]}
                    </>
                  ) : (
                    initiative.body
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
