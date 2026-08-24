import Image from "next/image";

export default function Visit({ content }: any) {
  return (
    <section className="w-full max-w-screen-xl px-4 py-8 md:py-20">
      <div className="flex flex-col gap-6 text-center">
        <h1 className="title">{content.title}</h1>
        <p className="body mx-auto max-w-3xl">{content.body}</p>
        <a
          className="button-text button-secondary mx-auto"
          href={content.directionsLink}
          target="_blank"
          rel="noreferrer"
        >
          Get Directions
        </a>
        <div className="mt-4 grid gap-6 md:grid-cols-2 text-left">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="Beach Cities Robotics lab location"
              src={content.mapEmbedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Image
            src={content.entranceImage}
            alt="Beach Cities Robotics lab entrance, marked with a blue circle"
            width={1000}
            height={1000}
            className="h-[420px] w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
