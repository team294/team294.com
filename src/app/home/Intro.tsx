import Image from "next/image";
import mediaUrl from "../MediaUrl";

export const Intro = ({ content }: any) => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center text-center gap-8 w-full h-96 md:h-[90vh] px-8 bg-black bg-opacity-70 bg-blend-multiply bg-[url('/media/team.jpg')] bg-cover bg-center"
    >
      <div className="flex flex-col gap-4 animate-fade-in">
        <p className="text-white font-text text-lg md:text-2xl">
          {content.prefix}
        </p>
        <p className="text-white font-title text-7xl md:text-9xl">
          {content.title}
        </p>
      </div>
      <Image
        src={mediaUrl(content.image)}
        alt="Squid"
        width="100"
        height="100"
        className="object-cover w-16 h-16 md:w-24 md:h-24 animate-fade-in-wiggle-large"
      />
    </section>
  );
};

export default Intro;
