import React from "react";
import { useForm } from "@formspree/react";

const InquiryForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_INQUIRYFORM as string);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form
      action="https://formspree.io/f/mvolneap"
      method="POST"
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap w-full pt-10"
      >
        <div className="floating-label-group pb-8 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            type="text"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">First Name</label>
        </div>
        <div className="floating-label-group pb-8 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="text"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Last Name
          </label>
        </div>
        <div className="floating-label-group pb-8 w-full ">
          <input
            type="email"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">Email</label>
        </div>

        <div className="floating-label-group pb-8 w-full">
          <textarea
            id="username"
            className="form-control bg-transparent border-b-4 w-full text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">Subject</label>
        </div>
        <div className="floating-label-group pb-8 w-full">
          <textarea
            id="username"
            className="form-control bg-transparent border-b-4 w-full text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">
            What are you inquiring about?
          </label>
        </div>
        <button
          className="text-black rounded-full  bg-yellow h-[70px] w-full shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default InquiryForm;
