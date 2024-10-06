import Image from "next/image";
import mediaUrl from "../MediaUrl";

export const WhoWeAre = ({ content }: any) => {
  return (
    <section
      id="who-we-are"
      className="flex flex-col w-full max-w-screen-xl p-8 md:p-20 gap-12 md:gap-20"
    >
      <div className="flex flex-col gap-4">
        <p className="title">{content.title}</p>
        <p className="body text-justify">{content.body}</p>
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-row gap-8">
          {content.buttons?.map((button: any) =>
            button.image ? (
              <a
                key={button.title}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-image button-secondary"
              >
                <Image
                  src={button.image}
                  alt={button.title}
                  width="100"
                  height="100"
                  className="max-h-full w-auto"
                />
              </a>
            ) : (
              ""
            )
          )}
        </div>
        {content.buttons?.map((button: any) =>
          button.image ? (
            ""
          ) : (
            <a
              key={button.title}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button-text button-secondary"
            >
              {button.title}
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;
