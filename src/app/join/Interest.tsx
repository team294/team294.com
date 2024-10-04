export const Interest = ({ content }: any) => {
  return (
    <section
      id="interest"
      className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-screen-xl p-8 md:p-20"
    >
      {content.groups?.map((group: any) => (
        <div
          key={group.title}
          className="flex flex-col shadow-lg max-w-lg p-8 rounded-xl text-center items-center border border-primary"
        >
          <p className="title">{group.title}</p>
          <p className="body text-justify">{group.body}</p>
          <a
            href={group.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button-text button-secondary mt-8"
          >
            {group.button}
          </a>
        </div>
      ))}
    </section>
  );
};

export default Interest;
