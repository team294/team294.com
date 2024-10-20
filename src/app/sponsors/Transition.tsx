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

const Transition = ({ content }: any) => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    const checkImages = async () => {
      const mediaUrl = "/media/other/robot.png";
      const otherUrl = "/other/robot.png";

      const isMediaValid = await isValidImage(mediaUrl);
      if (isMediaValid) setBgImage(mediaUrl);
      else {
        const isOtherValid = await isValidImage(otherUrl);
        setBgImage(isOtherValid ? otherUrl : null);
      }
    };

    checkImages();
  }, []);

  return (
    <section
      id="transition"
      className={`flex flex-col items-center justify-center text-center gap-8 w-full p-12 md:p-20 md:min-h-[90vh] px-4 bg-black bg-opacity-70 bg-blend-multiply bg-cover bg-center ${bgImage}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className="flex flex-col gap-4 animate-fade-in items-center">
        <p className="text-white font-text text-lg md:text-2xl">
          {content.prefix}
        </p>
        <p className="text-white font-title text-7xl md:text-9xl">
          {content.title}
        </p>
        <a
          className="button-white button-text text-black"
          href={content.contact.link}
        >
          {content.contact.title}
        </a>
      </div>
    </section>
  );
};

export default Transition;
