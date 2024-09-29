import React from "react";
import { useFormStatus } from "react-dom";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 disabled:bg-opacity-75 dark:bg-white dark:bg-opacity-10'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{" "}
          <SlEnvolopeLetter className='text-xs opacity-70 transition-all group-hover:-translate-y-1' />
        </>
      )}
    </button>
  );
}
