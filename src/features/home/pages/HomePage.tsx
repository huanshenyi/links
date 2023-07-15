import Header from "../components/Header"
import Image from "next/image"
import TitleImage from "../images/title.png"

export const IndexPage: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
      <Header />
      <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative mx-auto flex px-6 py-16">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="mb-12 h-2 w-20 bg-gray-800 dark:bg-white"></span>
            <h1 className="font-bebas-neue flex flex-col text-6xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-8xl">
              Be on
              <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p className="text-sm text-gray-700 dark:text-white sm:text-base">
              Dimension of reality that makes change possible and understandable. An indefinite and
              homogeneous environment in which natural events and human existence take place.
            </p>
            <div className="mt-8 flex">
              <a
                href="#"
                className="text-md mr-4 rounded-lg border-2 border-transparent bg-pink-500 px-4 py-2 uppercase text-white hover:bg-pink-400"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-md rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 uppercase text-pink-500 hover:bg-pink-500 hover:text-white dark:text-white"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <Image
              src={TitleImage}
              width="0"
              height="0"
              alt="titleimage"
              className="m-auto max-w-xs md:max-w-sm"
            />
            {/* <img src="/images/object/10.png" className="m-auto max-w-xs md:max-w-sm" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
