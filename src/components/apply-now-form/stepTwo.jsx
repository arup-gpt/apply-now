'use client'
import React from 'react'

const StepTwo = ({ register, prev, next }) => {

   return (
      <div className='space-y-4'>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>1. How did you learn about Girl Power Talk? If you were referred by someone, please provide their full name and your relationship to that person.</label>
            <textarea rows={4} {...register('answer_one')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>2. Name one or more people, living or deceased, that you admire, and explain why.</label>
            <textarea rows={4} {...register('answer_two')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>3. Leadership comes in many forms, and we value diversity in leadership. What do you feel are your strongest leadership qualities? Please share one or more examples of times when you have applied them in your life.</label>
            <textarea rows={4} {...register('answer_three')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>4. What are your biggest strengths? Name at least two, and explain how you would use them to make the world better.</label>
            <textarea rows={4} {...register('answer_four')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>5. What are your most significant weaknesses? Name at least two, and explain how you mitigate them. Everyone has weaknesses, so please be honest in sharing yours here.</label>
            <textarea rows={4} {...register('answer_five')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>6. Write a brief autobiography of your life. Feel free to provide a truthful account or be imaginative and creative. A minimum of 200 words is kindly requested.</label>
            <textarea rows={4} {...register('answer_six')} className='form-control text-white' />
         </fieldset>
         <div className="w-full flex justify-end p-2">
            <div className="flex gap-5">
               <button type='button' className='bg-transparent hover:bg-[#E63946] text-base text-white border-2 border-[#E63946] rounded-md py-2 px-4' onClick={prev}>Previous</button>
               <button type='button' className='bg-[#E63946] hover:bg-transparent text-base text-white border-2 border-[#E63946] rounded-md py-2 px-5' onClick={next}>Next</button>
               <button type='button' className='bg-transparent hover:bg-[#E63946] text-base text-white border-2 border-[#E63946] rounded-md py-2 px-4'>Save Changes</button>
            </div>
         </div>
      </div>
   )
}

export default StepTwo