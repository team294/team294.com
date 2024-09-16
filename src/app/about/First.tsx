import Image from "next/image";

export const First = ({ content }: any) => {
  return (
    <section
      id="first"
      className="flex flex-col items-center justify-center w-full max-w-screen-xl p-12 md:p-20 gap-12 md:gap-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-12">
        <Image
          src={content.image}
          alt="FIRST"
          width="1000"
          height="1000"
          className="object-contain w-60 md:w-1/3 h-auto"
        />
        <p className="body text-center md:text-left md:w-2/3">{content.body}</p>
      </div>
    </section>
  );
};

export default First;
