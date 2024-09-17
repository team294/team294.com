export default function Calendar() {
  return (
    <section
      id="calendar"
      className="w-full max-w-screen-2xl h-[85vh] pt-4 md:pt-16 px-4 md:px-20 pb-16 flex justify-center"
    >
      <iframe
        src="https://calendar.google.com/calendar/embed?src=frc294%40gmail.com&ctz=America%2FLos_Angeles"
        className="border-none w-full h-full"
      />
    </section>
  );
}
