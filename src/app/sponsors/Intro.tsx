"use client";

import Image from "next/image";

export const Intro = ({ content }: any) => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center text-center w-full max-w-screen-2xl py-12 px-8 md:p-20 gap-8 md:gap-12"
    >
      <p className="title">{content.title}</p>
      <p className="body">
        {content.body1}
        <br />
        {content.body2}
      </p>
      <div className="flex flex-row flex-wrap w-full max-w-screen-md justify-center items-center gap-4 md:gap-8">
        {content.sponsors.large.map((sponsor: any) => (
          <a
            key={sponsor.title}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={sponsor.image}
              alt={sponsor.title}
              width="1000"
              height="1000"
              className="w-auto h-auto max-w-sm md:max-w-2xl max-h-32 md:max-h-60 object-contain transition-transform hover:scale-105 ease-in-out duration-300"
            />
          </a>
        ))}
      </div>
      <div className="flex flex-row flex-wrap w-full max-w-screen-md justify-center items-center gap-8 md:gap-16">
        {content.sponsors.small.map((sponsor: any) => (
          <a
            key={sponsor.title}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={sponsor.image}
              alt={sponsor.title}
              width="1000"
              height="1000"
              className="w-auto h-auto max-w-xs md:max-w-sm max-h-8 md:max-h-16 object-contain transition-transform hover:scale-105 ease-in-out duration-300"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Intro;
