import Link from "next/link"

const Header: React.FC = () => {
  return (
    <>
      <header className="z-30 flex h-24 w-full items-center sm:h-32">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-3xl font-black uppercase text-gray-800 dark:text-white">
            Links.ME
          </div>
          <div className="flex items-center">
            <nav className="font-sen hidden items-center text-lg uppercase text-gray-800 dark:text-white lg:flex">
              <Link href="/" className="flex px-6 py-2">
                Home
              </Link>
              <Link href="/" className="flex px-6 py-2">
                Home
              </Link>
              <Link href="/" className="flex px-6 py-2">
                Home
              </Link>
            </nav>
            <button className="ml-4 flex flex-col lg:hidden">
              <span className="mb-1 h-1 w-6 bg-gray-800 dark:bg-white"></span>
              <span className="mb-1 h-1 w-6 bg-gray-800 dark:bg-white"></span>
              <span className="mb-1 h-1 w-6 bg-gray-800 dark:bg-white"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
