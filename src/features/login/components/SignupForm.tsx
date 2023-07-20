export const SignupForm: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="text-center">
        <h2 className="text-center text-4xl font-bold text-gray-700 dark:text-white">LINKS.ME</h2>

        <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
      </div>

      <div className="mt-8">
        <form>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
            />
          </div>

          <div className="mt-6">
            <div className="mb-2 flex justify-between">
              <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">
                Password
              </label>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-blue-500 hover:underline focus:text-blue-500"
              >
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
            />
          </div>

          <div className="mt-6">
            <button className="w-full transform rounded-md bg-blue-500 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don&#x27;t have an account yet?
          <a
            href="/login"
            className="text-blue-500 hover:underline focus:underline focus:outline-none"
          >
            log in
          </a>
          .
        </p>
      </div>
    </div>
  )
}
