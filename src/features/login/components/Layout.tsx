import type { ReactNode } from "react"
type LayoutProps = { children: ReactNode }

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex h-screen justify-center">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className="flex h-full items-center bg-gray-900 bg-opacity-40 px-20">
            <div>
              <h2 className="text-4xl font-bold text-white">Brand</h2>

              <p className="mt-3 max-w-xl text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla
                laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6">{children}</div>
      </div>
    </div>
  )
}
