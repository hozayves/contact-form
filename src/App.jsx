import { useState } from "react"

function App() {
  const [general, setGeneral] = useState(false)
  const [support, setSupport] = useState(false)

  return (
    <>
      <div className='max-h-full min-h-screen w-screen flex justify-center items-center bg-greenLighter px-10 py-5 font-Karla'>
        <div className="rounded-lg bg-white w-full p-5 flex flex-col gap-4 md:w-1/2 lg:w-[600px]">
          <h1 className="leading-0 text-greyDarker font-semibold text-2xl">Contact Us</h1>
          <form method="POST" className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex flex-col gap-1 text-greyDarker md:flex-grow">
                <label htmlFor="firstname" className="flex gap-2 font-light">
                  First Name
                  <span className="leading-0 text-greenMedium">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="rounded-md border border-greyMedium hover:border-greenMedium focus:border-greenMedium outline-none p-3 transition delay-150 ease-in-out"
                />
                <span className="text-red text-xs">This field is required</span>
              </div>
              <div className="flex flex-col gap-1 text-greyDarker md:flex-grow">
                <label htmlFor="firstname" className="flex gap-2 font-light">
                  Last Name
                  <span className="leading-0 text-greenMedium">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="rounded-md border border-greyMedium hover:border-greenMedium focus:border-greenMedium outline-none p-3 transition delay-150 ease-in-out"
                />
                <span className="text-red text-xs">This field is required</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-greyDarker">
              <label htmlFor="firstname" className="flex gap-2 font-light">
                Email Address
                <span className="leading-0 text-greenMedium">*</span>
              </label>
              <input
                type="text"
                name="firstname"
                className="rounded-md border border-greyMedium hover:border-greenMedium focus:border-greenMedium outline-none p-3 transition delay-150 ease-in-out"
              />
              <span className="text-red text-xs">Please enter a valid email address</span>
            </div>
            <div className="flex flex-col gap-2 text-greyDarker">
              <span className="flex gap-2 font-light">
                Query Type
                <span className="leading-0 text-greenMedium">*</span>
              </span>
              <div className="flex flex-col gap-2 md:flex-row">
                <div className={`rounded-md border outline-none p-3 flex justify-start items-center gap-3 md:flex-grow ${general ? 'bg-greenLighter border-greenMedium transition delay-50 ease-in-out' : 'border-greyMedium hover:border-greenMedium focus:border-greenMedium'}`}>
                  <input
                    value={general}
                    onChange={e => {
                      setGeneral(e.target.value)
                      setSupport(false)
                    }}
                    checked={general}
                    type="radio"
                    name="firstname"
                    id="general"
                    className="transition delay-50 ease-in-out appearance-none h-2 w-2 outline outline-offset-2 outline-greenMedium checked:bg-greenMedium checked:rounded-full checked:border-transparent rounded-full"
                  />
                  <label htmlFor="general">General Enquiry</label>
                </div>
                <div className={`rounded-md border  outline-none p-3 flex justify-start items-center gap-3 md:flex-grow ${support ? 'border bg-greenLighter border-greenMedium transition delay-50 ease-in-out' : 'border-greyMedium hover:border-greenMedium focus:border-greenMedium'}`}>
                  <input
                    value={support}
                    onChange={e => {
                      setSupport(e.target.value)
                      setGeneral(false)
                    }}
                    checked={support}
                    type="radio"
                    name="firstname"
                    id="support"
                    className="transition delay-50 ease-in-out appearance-none h-2 w-2 outline outline-offset-2 outline-greenMedium checked:bg-greenMedium checked:rounded-full checked:border-transparent rounded-full"
                  />
                  <label htmlFor="support">Support Request</label>
                </div>
              </div>
              <span className="text-red text-xs">Please select a query address</span>
            </div>
            <div className="flex flex-col gap-1 text-greyDarker">
              <label htmlFor="message" className="flex gap-2 font-light">
                Message
                <span className="leading-0 text-greenMedium">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                className="rounded-md border border-greyMedium hover:border-greenMedium focus:border-greenMedium outline-none p-3 h-32 md:h-20 transition delay-150 ease-in-out"
              ></textarea>
              <span className="text-red text-xs">This field is required</span>
            </div>
            <div className="flex flex-col gap-2 text-greyMedium font-light">
              <div className="flex gap-2 itmes-center justify-start">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  className="self-center accent-greenMedium h-3 w-3"
                />
                <label htmlFor="agree">I consent to being contacted by the team</label>
                <span className="leading-none text-greenMedium">*</span>
              </div>
              <span className="text-red text-xs">To submit this form, please consent to being contacted</span>
            </div>
            <button
              type="submit"
              className="leading-none bg-greenMedium hover:bg-greyDarker text-white p-5 w-full rounded-lg mt-5 transition delay-150 ease-in-out"
            >Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
