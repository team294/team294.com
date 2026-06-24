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
      <div className="flex flex-row flex-wrap w-full max-w-screen-md justify-center items-center gap-4 md:gap-8">
        {content.sponsors.medium.map((sponsor: any) => (
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
      <div className="flex flex-row flex-wrap w-full max-w-screen-md justify-center items-center gap-4 md:gap-8">
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
              className="w-auto h-auto max-w-72 md:max-w-xs max-h-10 md:max-h-12 object-contain transition-transform hover:scale-105 ease-in-out duration-300"
            />
          </a>
        ))}
      </div>

      <p className="body md:text-xl text-primary font-bold tracking-widest">Friends and Alumni of Team 294</p>
    </section>
  );
};

export default Intro;
