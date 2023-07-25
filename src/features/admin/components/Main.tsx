import Image from "next/image"

export default function Main() {
  return (
    <>
      <div>
        <div className="pl-2 pt-6">
          <div className="grid w-full grid-cols-1 gap-2 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8  2xl:col-span-2">
              <div className="mb-4 flex items-center justify-center">
                <button className="btn-primary btn-outline btn w-64">+ Add Link</button>
              </div>
              <div className="mb-4 flex items-center justify-center">
                <button className="btn-link btn">Add header</button>
              </div>
              <div id="main-chart"></div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8 ">
              <div className="mb-4 flex items-center justify-between">
                <div className="mockup-phone">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="phone-1 artboard artboard-demo">
                      <div className="avatar">
                        <div className="w-24 rounded-full">
                          <Image
                            width="0"
                            height="0"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="alert alert-success">
                        <span>Your purchase has been confirmed!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-2"></div> */}
        </div>
      </div>
    </>
  )
}
