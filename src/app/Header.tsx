"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const collapseButton = document.getElementById("navbar-collapse-button");
    collapseButton?.addEventListener("click", () => setOpen(!open));
    return () => {
      collapseButton?.removeEventListener("click", () => setOpen(!open));
    };
  }, [open]);

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap w-full h-28 bg-white text-sm pt-4 fixed z-50">
      <nav className="w-full h-full z-10 shadow-lg">
        <div className="w-full h-full max-w-screen-xl mx-auto md:flex md:items-end md:justify-between">
          <div className="flex items-center justify-between h-full min-w-fit pb-4 pl-4">
            <a
              href="/"
              className="h-full w-auto"
              onClick={() => setOpen(false)}
            >
              <Image
                width="300"
                height="300"
                src="/media/logos/logo.png"
                alt="Beach Cities Robotics"
                className="h-full w-auto hover:animate-wiggle-small"
                priority
              />
            </a>
            <div className="md:hidden pr-4">
              <button
                type="button"
                id="navbar-collapse-button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border-2 border-primary bg-white text-primary shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="navbar-collapse-with-animation"
              >
                <svg
                  className={`${
                    open ? "hidden" : "block"
                  } flex-shrink-0 size-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className={`${
                    open ? "block" : "hidden"
                  } flex-shrink-0 size-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              open ? "max-h-[500px]" : "max-h-0"
            } md:max-h-none md:block basis-full grow bg-white px-8 shadow-lg md:shadow-none`}
          >
            <div className="flex flex-col gap-x-4 md:gap-x-10 pb-3 md:pb-2 mt-5 md:mt-0 md:ps-5 md:flex-row md:items-center md:justify-end flex-wrap font-title text-3xl text-primary">
              <Link
                className="hover:text-primary-dark"
                href="/"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                className="hover:text-primary-dark"
                href="/about"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                className="hover:text-primary-dark"
                href="/calendar"
                onClick={() => setOpen(false)}
              >
                Calendar
              </Link>
              <Link
                className="hover:text-primary-dark"
                href="/blog"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
              <Link
                className="hover:text-primary-dark"
                href="/join"
                onClick={() => setOpen(false)}
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
