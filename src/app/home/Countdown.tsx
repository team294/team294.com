import { useState } from "react";

export const Countdown = ({ content }: any) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  var countDownDate = content.date
    ? new Date(content.date).getTime()
    : new Date().getTime();

  var x = setInterval(function () {
    var currentDate = new Date().getTime();
    var distance = countDownDate - currentDate;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    if (distance < 0) clearInterval(x);
  }, 1000);

  return (
    <section
      id="countdown"
      className="flex flex-col items-center p-8 md:p-20 gap-6"
    >
      <p className="title text-center">Countdown to {content.title}</p>
      <div className="flex flex-row items-center gap-1 md:gap-4">
        <div className="flex flex-col items-center bg-primary text-white p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-lg">
          <p className="title text-white">{days}</p>
          <p className="body text-white">Days</p>
        </div>
        <p className="text-primary font-title text-6xl -mt-2 md:-mt-3">:</p>
        <div className="flex flex-col items-center bg-primary text-white p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-lg">
          <p className="title text-white">{hours}</p>
          <p className="body text-white">Hours</p>
        </div>
        <p className="text-primary font-title text-6xl -mt-2 md:-mt-3">:</p>
        <div className="flex flex-col items-center bg-primary text-white p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-lg">
          <p className="title text-white">{minutes}</p>
          <p className="body text-white">Minutes</p>
        </div>
        <p className="text-primary font-title text-6xl -mt-2 md:-mt-3">:</p>
        <div className="flex flex-col items-center bg-primary text-white p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-lg">
          <p className="title text-white">{seconds}</p>
          <p className="body text-white">Seconds</p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
