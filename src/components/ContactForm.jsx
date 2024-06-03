import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { contactFormSchema } from "../lib/formValidations";
import toast from "react-hot-toast";
import SuccessToast from "./SuccessToast";

function ContactForm() {
  // eslint-disable-next-line no-unused-vars
  const [queryType, setQueryType] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm(
    {
      resolver: zodResolver(contactFormSchema)
    })
  const query = watch("query")
  const onContactForm = () => {
    toast(() => (
      <SuccessToast />
    ))
    reset()
  }

  return (
    <>
      <div className='max-h-full min-h-screen w-screen flex justify-center items-center bg-greenLighter px-10 py-5 font-Karla'>
        <div className="rounded-lg bg-white w-full p-5 flex flex-col gap-4 md:w-1/2 lg:w-[600px]">
          <h1 className="leading-0 text-greyDarker font-semibold text-2xl">Contact Us</h1>
          <form onSubmit={handleSubmit(onContactForm)} method="POST" className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex flex-col gap-1 text-greyDarker md:flex-grow">
                <label htmlFor="firstname" className="flex gap-2 font-light">
                  First Name
                  <span className="leading-0 text-greenMedium">*</span>
                </label>
                <input
                  type="text"
                  {...register("firstname")}
                  className="rounded-md border border-greyMedium hover:border-greenMedium focus:border-greenMedium outline-none p-3 transition delay-150 ease-in-out"
                />
                {errors.firstname?.message && <span className="text-red text-xs">{errors.firstname.message}</span>}
              </div>
              <div className="flex flex-col gap-1 text-greyDarker md:flex-grow">
                <label htmlFor="lastname" className="flex gap-2 font-light">
                  Last Name
                  <span className="leading-0 text-greenMedium">*</span>
                </label>
                <input
                  type="text"
                  {...register("lastname")}
                  className="rounded-md border border-greyMedium hover:border-greenMedium focus:border-greenMedium outline-none p-3 transition delay-150 ease-in-out"
                />
                {errors.lastname && <span className="text-red text-xs">{errors.lastname.message}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-1 text-greyDarker">
              <label htmlFor="email" className="flex gap-2 font-light">
                Email Address
                <span className="leading-0 text-greenMedium">*</span>
              </label>
              <input
                type="text"
                {...register("email")}
                className="rounded-md border border-greyMedium hover:border-greenMedium focus:border-greenMedium outline-none p-3 transition delay-150 ease-in-out"
              />
              {errors.email && <span className="text-red text-xs">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col gap-2 text-greyDarker">
              <span className="flex gap-2 font-light">
                Query Type
                <span className="leading-0 text-greenMedium">*</span>
              </span>
              <div className="flex flex-col gap-4 md:flex-row select-none">
                <div className={`rounded-md border outline-none p-3 flex justify-start items-center gap-3 md:flex-grow ${query === "general" ? 'bg-greenLighter border-greenMedium' : 'border-greyMedium hover:border-greenMedium focus:border-greenMedium'}`}>
                  <input
                    onChange={() => setQueryType("general")}
                    type="radio"
                    {...register("query")}
                    value="general"
                    id="general"
                    className="transition delay-50 ease-in-out appearance-none h-2 w-2 outline outline-offset-2 outline-greenMedium checked:bg-greenMedium checked:rounded-full checked:border-transparent rounded-full"
                  />
                  <label htmlFor="general">General Enquiry</label>
                </div>
                <div className={`rounded-md border  outline-none p-3 flex justify-start items-center gap-3 md:flex-grow ${query === "support" ? 'bg-greenLighter border-greenMedium' : 'border-greyMedium hover:border-greenMedium focus:border-greenMedium'}`}>
                  <input
                    onChange={() => setQueryType("support")}
                    type="radio"
                    {...register("query")}
                    value="support"
                    id="support"
                    className="transition delay-50 ease-in-out appearance-none h-2 w-2 outline outline-offset-2 outline-greenMedium checked:bg-greenMedium checked:rounded-full checked:border-transparent rounded-full"
                  />
                  <label htmlFor="support">Support Request</label>
                </div>
              </div>
              {errors.query && <span className="text-red text-xs">{errors.query.message}</span>}
            </div>
            <div className="flex flex-col gap-1 text-greyDarker">
              <label htmlFor="message" className="flex gap-2 font-light">
                Message
                <span className="leading-0 text-greenMedium">*</span>
              </label>
              <textarea
                {...register("message")}
                id="message"
                className="rounded-md border border-greyMedium hover:border-greenMedium focus:border-greenMedium outline-none p-3 h-32 md:h-20 transition delay-150 ease-in-out resize-none"
              ></textarea>
              {errors.message && <span className="text-red text-xs">{errors.message.message}</span>}
            </div>
            <div className="flex flex-col gap-2 text-greyMedium font-light select-none">
              <div className="flex gap-3 itmes-center justify-start">
                <input
                  type="checkbox"
                  {...register("contacted")}
                  id="agree"
                  defaultChecked={false}
                  className="self-center accent-greenMedium h-3 w-3"
                />
                <label htmlFor="agree">I consent to being contacted by the team</label>
                <span className="leading-none text-greenMedium">*</span>
              </div>
              {errors.contacted && <span className="text-red text-xs">To submit this form, please consent to being contacted</span>}
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

export default ContactForm