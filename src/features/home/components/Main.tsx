import Image from "next/image"
import IphoneIMG from "../images/iPhone.png"
import PlaceholderIMG from "../images/placeholder.png"
import Img720600 from "../images/720x600.png"
import Link from "next/link"

const Main = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-40 flex flex-col items-center pt-6 text-center md:ml-24 md:w-1/2 md:items-start md:text-left lg:flex-grow">
          <h1 className="Avenir xl:w-2/2 mb-5 items-center text-5xl text-gray-900 sm:text-6xl">
            We are making Stunning Websites
          </h1>
          <p className="mb-4 text-lg text-gray-600 xl:w-3/4">
            nine4 is a free to use website template for websites made with Next.js and styled with
            Tailwind CSS
          </p>
          <div className="flex justify-center">
            <button className="btn-neutral btn">Neutral</button>
          </div>
        </div>
        <div className="mb-0 mr-48 sm:mb-28 sm:mr-0 md:pl-10 lg:mb-0 xl:mr-44">
          <Image
            src={IphoneIMG}
            width="0"
            height="0"
            className="ml-24 w-80 md:ml-1"
            alt="iPhone-12"
          />
        </div>
      </div>
      <section className="mx-auto">
        <div className="container mx-auto px-5 lg:px-24 ">
          <section className="body-font text-gray-600">
            <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
              <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                <Image
                  width="0"
                  height="0"
                  alt="hero"
                  src={Img720600}
                  className="rounded object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                  Before they sold out
                  <br className="hidden lg:inline-block" />
                  readymade gluten
                </h1>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                  cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                  hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                    Button
                  </button>
                  <button className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="grr mx-auto max-w-7xl pt-20 text-center">
        <h1 className="Avenir mb-8 text-6xl font-semibold text-gray-900">
          Less code, less effort.
        </h1>
        <h1 className="Avenir mb-8 text-center text-2xl font-semibold text-gray-600">
          Minify your CSS with Tailwind&apos;s built in PostCSS support.
        </h1>
        <div className="container mx-auto flex flex-col items-center justify-center rounded-lg ">
          <Image
            src={PlaceholderIMG}
            width="0"
            height="0"
            className="g327 mb-10 w-3/4 rounded-lg border object-cover object-center shadow-md"
            alt="Placeholder Image"
          />
        </div>
      </div>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="py-24 md:py-36">
            <h1 className="Avenir mb-5 text-6xl font-semibold text-gray-900">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-1/4 rounded-md border border-gray-600 py-3 pl-2 pr-2 font-semibold text-gray-800 hover:border-gray-900"
            ></input>
            <Link
              className="ml-2 mt-2 inline-flex transform items-center rounded-lg border bg-gray-900 bg-transparent px-14 py-3 font-medium text-white transition duration-500 ease-in-out"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Main
