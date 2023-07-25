import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div>
      <div>
        <Header />
        <div className="flex overflow-hidden bg-white pt-16">
          {/* SiderBar追加する場合はここに */}
          <div id="main-content" className="relative h-full w-full overflow-y-auto bg-gray-50">
            <Main />
            <Footer />
            <p className="my-10 text-center text-sm text-gray-500">
              &copy; 2023
              <a href="#" className="hover:underline" target="_blank">
                Themesberg
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
