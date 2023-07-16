import React from "react"
import Link from "next/link"

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <div className="clearNav fixed top-0 z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90">
      <div className="mx-auto flex max-w-6xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            href="/"
            className="focus:shadow-outline rounded-lg text-lg font-semibold tracking-widest focus:outline-none"
          >
            <h1 className="Avenir md:text-4x1 text-4xl tracking-tighter text-gray-900 lg:text-3xl">
              LIMKS.ME
            </h1>
          </Link>
          <button
            className="cursor-pointer px-3 py-1 leading-none text-white outline-none focus:outline-none md:hidden "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className={"flex-grow items-center md:flex" + (navbarOpen ? " flex" : " hidden")}>
          <nav className="flex-grow flex-col ">
            <ul className="flex flex-grow flex-wrap items-center justify-end">
              <li>
                <Link
                  href="/"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button className="btn-primary btn">Login</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
