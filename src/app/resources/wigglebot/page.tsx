"use client";

import { client } from "../../../../tina/__generated__/client";
import { useState } from "react";

export default function WiggleBot() {
  const [retrieved, setRetrieved] = useState(false);

  const [tutorial, setTutorial] = useState({
    title: "",
    note: "",
    header: "",
    time: "",
    materials: [],
    tools: [],
    instructions: [
      {
        text: "",
        images: [],
      },
    ],
  });

  const retrieveContent = async () => {
    let content: any = null;
    try {
      content = await client?.queries?.tutorial({
        relativePath: "wigglebot.md",
      });
      content = content.data.tutorial;
      if (content) setTutorial(content);
      setRetrieved(true);
    } catch {
      console.log("Failed to fetch.");
    }
  };

  if (!retrieved) retrieveContent();

  return (
    <section
      id="wigglebot"
      className="flex flex-col text-left w-full max-w-screen-2xl p-8 md:p-20 gap-8 md:gap-12 overflow-hidden"
    >
      <p className="title">{tutorial.title}</p>
      <span className="body flex flex-col space-y-6">
        <div className="flex flex-row flex-wrap gap-8">
          <div className="max-w-md w-full mr-8 space-y-6">
            <div>
              <b>Time:</b>
              {tutorial.time}
            </div>
            <div>
              <b>{tutorial.note}</b>
            </div>
            <div>
              <b>{tutorial.materials ? "Materials:" : ""}</b>
              <ul className="list-disc list-outside ml-5 md:ml-8">
                {tutorial.materials?.map((material) => (
                  <li key={material}>{material}</li>
                ))}
              </ul>
            </div>
            <div>
              <b>{tutorial.tools ? "Tools:" : ""}</b>
              <ul className="list-disc list-outside ml-5 md:ml-8">
                {tutorial.tools?.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-md w-full">
            {tutorial.header.includes(".com") ? (
              <iframe
                width="560"
                height="315"
                src={tutorial.header}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={tutorial.header}
                width={1000}
                height={1000}
                className="rounded-md"
              />
            )}
          </div>
        </div>
        <div className="bg-primary h-[1px] w-full rounded" />
        <div>
          <b>Instructions:</b>
          <ol className="list-decimal list-outside ml-5 md:ml-8 space-y-6">
            {tutorial.instructions?.map((step, key) => (
              <div
                key={key}
                className="flex flex-row flex-wrap gap-x-8 gap-y-2"
              >
                <li className="max-w-md">{step.text}</li>
                <div className="flex flex-row flex-wrap gap-4">
                  {step.images?.map((image, key) => (
                    <img
                      src={image}
                      width={1000}
                      height={1000}
                      key={key}
                      className="max-w-64 w-64 h-auto rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </ol>
        </div>
      </span>
    </section>
  );
}
