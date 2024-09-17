import Image from "next/image";
import mediaUrl from "../MediaUrl";

export const First = ({ content }: any) => {
  return (
    <section
      id="first"
      className="flex flex-col items-center justify-center w-full max-w-screen-xl p-12 md:p-20 gap-12 md:gap-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-12">
        <a
          href="https://www.firstinspires.org/robotics/frc"
          target="_blank"
          rel="noopener noreferrer"
          className="object-contain w-60 md:w-1/3 h-auto"
        >
          <Image
            src={mediaUrl(content.image)}
            alt="FIRST"
            width="1000"
            height="1000"
            className="w-full h-full"
            priority
          />
        </a>
        <p className="body text-center md:text-left md:w-2/3">{content.body}</p>
      </div>
    </section>
  );
};

export default First;
