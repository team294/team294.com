export const Intro = ({ content }: any) => {
  const Banner = ({ banner }: any) => (
    <div className="banner">
      <img src="/media/first-logo.png" alt="First Logo" />
      <div
        className={banner.title.length < 18 ? "award-name" : "award-name-long"}
      >
        <span>{banner.title}</span>
      </div>
      <div
        className={
          banner.title.length < 12 ? "award-event" : "award-event-long"
        }
      >
        <span>{banner.award}</span>
      </div>
    </div>
  );

  // Scrolling marquee on smaller screens
  const Marquee = ({ content }: any) => (
    <div className="w-full overflow-hidden relative">
      <div className="flex md:hidden overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex flex-row gap-4 animate-marquee-1 whitespace-nowrap pr-4">
          {content.banners.map((banner: any) => (
            <Banner banner={banner} key={banner.award} />
          ))}
        </div>
        <div className="flex flex-row absolute gap-4 animate-marquee-2 whitespace-nowrap">
          {content.banners.map((banner: any) => (
            <Banner banner={banner} key={banner.award} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center w-full max-w-screen-xl overflow-hidden p-8 md:py-20 gap-12 md:gap-20"
    >
      <div className="w-full flex flex-col md:flex-row items-start justify-center md:-ml-16">
        <p className="title transform md:-rotate-90 md:mt-16 md:-mr-12">
          {content.title}
        </p>
        <p className="body text-justify md:w-2/3">{content.body}</p>
      </div>

      <div className="hidden md:flex flex-row flex-wrap gap-4 max-w-screen-lg justify-center">
        {content.banners.map((banner: any) => (
          <Banner banner={banner} key={banner.award} />
        ))}
      </div>

      <Marquee content={content} />
    </section>
  );
};

export default Intro;
