"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const isValidImage = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

const Intro = ({ content }: any) => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    const checkImages = async () => {
      const mediaUrl = "/media/other/team.jpg";
      const otherUrl = "/other/team.jpg";

      const isMediaValid = await isValidImage(mediaUrl);
      if (isMediaValid) {
        setBgImage(mediaUrl);
      } else {
        const isOtherValid = await isValidImage(otherUrl);
        setBgImage(isOtherValid ? otherUrl : null);
      }
    };

    checkImages();
  }, []);

  return (
    <section
      id="intro"
      className={`flex flex-col items-center justify-center text-center gap-8 w-full h-[90vh] px-4 bg-black bg-opacity-70 bg-blend-multiply bg-cover bg-center ${bgImage}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className="flex flex-col gap-4 animate-fade-in -mt-[20vh] md:mt-0">
        <p className="text-white font-text text-lg md:text-2xl">
          {content.prefix}
        </p>
        <p className="text-white font-title text-7xl md:text-9xl">
          {content.title}
        </p>
      </div>
      <Image
        src={content.image}
        alt="Squid"
        width="100"
        height="100"
        className="object-cover w-16 h-16 md:w-24 md:h-24 animate-fade-in-wiggle-large"
      />
    </section>
  );
};

export default Intro;
