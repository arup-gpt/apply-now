import React, { useState } from 'react'

const StepFive = ({ register, prev, errors }) => {
   return (
      <div className=' space-y-4'>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>21. How would your closest friends and family members describe you?</label>
            <textarea rows={4} {...register('answer_twentyone')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>22. What excites you about being a part of Girl Power Talk?</label>
            <textarea rows={4} {...register('answer_twentytwo')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>23. What is one creative idea you have for Girl Power Talk that could enhance our culture or business?</label>
            <textarea rows={4} {...register('answer_twentythree')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>24. Why should you be the next Young Leader at Girl Power Talk?</label>
            <textarea rows={4} {...register('answer_twentyfour')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>25. What questions do you have for us?</label>
            <textarea rows={4} {...register('answer_twentyfive')} className='form-control text-white' />
         </fieldset>
         <div className="">
            <p className='text-base text-white mb-4'>Integrity & Honesty Certification:</p>
            <label htmlFor="termConditions" className='text-base text-white cursor-pointer'>
               <input type="checkbox" id='termConditions' {...register("termConditions")} className='w-4 h-4 me-4' />
               <span>I hereby attest that the above responses are original content authored by me personally. I did not use any artificial intelligence application to complete the aforementioned free response questions. I did not copy, plagiarize or seek the help of someone else to write or complete this interview questionnaire. I hereby acknowledge that violating this pledge will compromise my candidacy and is grounds for immediate termination of employment when discovered at any date in the future. I understand that violating this pledge will blacklist my name permanently. I will be prohibited from ever applying to Girl Power Talk and Blue Ocean Global Technology, including all affiliated and subsidiary companies. This includes all Girl PowerX enterprise clients and talent acquisition member companies. Your submission will be analyzed for writing authenticity. We test every application for plagiarism and usage of AI tools, including ChatGPT.</span>
            </label>
            {errors.termConditions && <p className='text-sm text-red-600 mt-2'>{errors.termConditions.message}</p>}
         </div>
         <div className="w-full flex justify-end p-2">
            <div className="flex gap-5">
               <button type='button' className='bg-transparent hover:bg-[#E63946] text-base text-white border-2 border-[#E63946] rounded-md py-2 px-4' onClick={prev}>Previous</button>
               <button type='submit' className='bg-[#E63946] hover:bg-transparent text-base text-white border-2 border-[#E63946] rounded-md py-2 px-5'>Submit</button>
               <button type='button' className='bg-transparent hover:bg-[#E63946] text-base text-white border-2 border-[#E63946] rounded-md py-2 px-4'>Save Changes</button>
            </div>
         </div>
      </div>
   )
}

export default StepFive