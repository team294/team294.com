import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap w-full h-28 bg-white text-sm pt-4 lg:fixed z-50">
      <nav className="w-full h-full z-10 shadow-lg">
        <div className="w-full h-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between h-full min-w-fit pl-4 pb-4">
            <a href="/" className="h-full w-auto">
              <Image
                width="300"
                height="300"
                src="/media/logo.png"
                alt="Beach Cities Robotics"
                priority
                className="h-full w-auto hover:animate-wiggle-small"
              />
            </a>
            <div className="md:hidden pr-4">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
              >
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:mt-10 bg-white px-4 shadow-lg md:shadow-none">
            <div className="flex flex-col gap-4 md:gap-10 mt-5 md:mt-0 md:ps-5 pb-4 md:pb-0 md:flex-row md:items-center md:justify-end font-title text-3xl text-primary">
              <Link className="hover:text-primary-dark" href="/">Home</Link>
              <Link className="hover:text-primary-dark" href="/about">About</Link>
              <Link className="hover:text-primary-dark" href="/calendar">Calendar</Link>
              <Link className="hover:text-primary-dark" href="mailto:frc.294.business@gmail.com">Contact</Link>
              <Link className="hover:text-primary-dark" href="/join">Join</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
