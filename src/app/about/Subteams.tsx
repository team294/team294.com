import Image from "next/image";
import { useState } from "react";
import mediaUrl from "../MediaUrl";

const Subteams = ({ content }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="subteams"
      className="w-full h-full lg:px-20 py-12 bg-primary flex justify-center"
    >
      <div className="relative w-full overflow-hidden max-w-screen-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {content.map((subteam: any, index: number) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-16 pb-10 grid grid-cols-6 gap-10"
            >
              <div className="col-span-6 xl:col-span-4">
                <div className="inline-flex gap-6 mb-2">
                  {subteam.icon && (
                    <Image
                      src={mediaUrl(subteam.icon)}
                      alt={subteam.title}
                      height="100"
                      width="100"
                      className="h-12 md:h-16 w-auto"
                    />
                  )}
                  {subteam.title && (
                    <p className="title text-white">{subteam.title}</p>
                  )}
                </div>
                {subteam.body && (
                  <p className="body text-white">{subteam.body}</p>
                )}
              </div>
              <div className="hidden xl:flex col-span-2 m-auto">
                <Image
                  src={mediaUrl(subteam.image)}
                  alt={subteam.title}
                  priority
                  height="1000"
                  width="1000"
                  className="object-cover aspect-square rounded-3xl border-white border-8 bg-white"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 transition-all text-5xl hover:text-6xl"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 transition-all text-5xl hover:text-6xl"
          onClick={handleNext}
        >
          &#10095;
        </button>
        <div
          style={{
            bottom: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            position: "absolute",
            display: "flex",
            gap: "8px",
          }}
        >
          {content.map((_: any, index: number) => (
            <div
              key={index}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                opacity: index === currentIndex ? "100%" : "50%",
                cursor: "pointer",
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subteams;
