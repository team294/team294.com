import Image from "next/image";
import mediaUrl from "./MediaUrl";

export default function Footer() {
  const footer = {
    image: "/media/logos/logo-text-white.png",
    copyright: "Copyright © 2024 Beach Cities Robotics",
    contact: { title: "Email Us", link: "mailto:frc.294.business@gmail.com" },
    address: "623 Diamond Street\nRedondo Beach, CA 90277",
    buttons: [
      {
        title: "Instagram",
        link: "https://www.instagram.com/beachcitiesrobotics",
        image: "/media/icons/instagram-color.png",
      },
      {
        title: "The Blue Alliance",
        link: "https://www.thebluealliance.com/team/294",
        image: "/media/icons/tba-color.png",
      },
      {
        title: "YouTube",
        link: "https://www.youtube.com/@294beachcitiesrobotics",
        image: "/media/icons/youtube-color.png",
      },
    ],
  };

  return (
    <footer className="w-full bg-primary py-8">
      <div className="w-full h-full max-w-screen-xl flex flex-col items-center mx-auto gap-8">
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center text-center gap-4 md:gap-24">
          <a href="/">
            <Image
              width="300"
              height="300"
              src={mediaUrl(footer.image)}
              alt="Beach Cities Robotics"
              priority
              className="h-28 w-auto"
            />
          </a>
          <div className="flex flex-col gap-8 md:gap-4 justify-center items-center md:items-end h-28">
            <p className="sub-body text-center md:text-right">
              {footer.address}
            </p>
            <a
              className="button-text-footer button-white"
              href={footer.contact.link}
            >
              {footer.contact.title}
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          {footer.buttons?.map((button: any) => (
            <a
              key={button.title}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button-image-footer button-white"
            >
              <Image
                src={mediaUrl(button.image)}
                alt={button.title}
                width="100"
                height="100"
                className="max-h-full w-auto"
              />
            </a>
          ))}
        </div>
        <p className="sub-body w-full text-center">{footer.copyright}</p>
      </div>
    </footer>
  );
}
