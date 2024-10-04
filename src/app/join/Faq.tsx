import Image from "next/image";
import mediaUrl from "../MediaUrl";

export const Faq = ({ content }: any) => {
  return (
    <section
      id="faq"
      className="flex flex-col justify-center w-full max-w-screen-xl gap-10 md:gap-16 p-8 md:p-20"
    >
      <p className="title text-center">{content.title}</p>
      <div className="flex flex-col gap-8">
        {content.questions?.map((question: any) => (
          <div key={question.question} className="group flex flex-col gap-2">
            <p className="section-title shadow-lg group-[&:nth-child(odd)]:bg-secondary group-[&:nth-child(even)]:bg-primary">
              {question.question}
            </p>
            <p className="body text-justify mx-4">{question.answer}</p>
            {question.images ? (
              <div className="flex flex-col md:flex-row gap-4 mx-4 max-w-3xl">
                {question.images.map((image: any) => (
                  <Image
                    key={image.title}
                    alt={image.title}
                    src={mediaUrl(image.image)}
                    width="1000"
                    height="1000"
                    className="w-full md:w-1/2 h-auto object-cover rounded-xl max-h-60 shadow-lg"
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
